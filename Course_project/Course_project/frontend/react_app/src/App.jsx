import { useEffect, useState } from "react";
import "./App.css";

import {
  addCourse,
  getCourses,
  deleteCourse,
  updateCourse
} from "./api/CourseApi";

function App() {
  const [courses, setCourses] = useState([]);
  const [title, setTitle] = useState("");
  const [duration, setDuration] = useState("");

  // FETCH COURSES (GET)
  const fetchCourses = async () => {
    try {
      const res = await getCourses();
      setCourses(res.data);
    } catch (error) {
      console.error("Fetch error:", error);
    }
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  // ADD COURSE (POST)
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addCourse({ title, duration });
      fetchCourses();
      setTitle("");
      setDuration("");
    } catch (error) {
      console.error("Add error:", error);
    }
  };

  // DELETE COURSE (DELETE)
  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("Are you sure?");
    if (!confirmDelete) return;

    try {
      await deleteCourse(id);
      fetchCourses();
      alert("Course Deleted Successfully");
    } catch (error) {
      console.error("Delete error:", error);
    }
  };

  // UPDATE COURSE (PUT)
  const update = async (id, oldTitle, oldDuration) => {
    const newTitle = prompt("Enter new title", oldTitle);
    if (newTitle === null) return;

    const newDuration = prompt("Enter new duration", oldDuration);
    if (newDuration === null) return;

    const updatedCourse = {
      title: newTitle,
      duration: newDuration
    };

    try {
      await updateCourse(id, updatedCourse);
      fetchCourses();
      alert("Course Updated Successfully");
    } catch (error) {
      console.error("Update error:", error);
    }
  };

  return (
    <>
      <h1>Course Management System</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Course title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />

        <input
          type="text"
          placeholder="Duration"
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
          required
        />

        <button type="submit">Add Course</button>
      </form>

      <ul>
        {courses.map((course) => (
          <li key={course._id}>
            {course.title} - {course.duration}

            <div>
              <button
                onClick={() =>
                  update(course._id, course.title, course.duration)
                }
              >
                Edit
              </button>

              <button onClick={() => handleDelete(course._id)}>
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;



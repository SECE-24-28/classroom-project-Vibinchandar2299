import { useState } from 'react'
import './App.css'
import api from './api/Post.jsx'
import { useEffect } from 'react'
function App() {
  const [posts, setPosts] = useState([])
  useEffect(()=>{
    const fetchPosts=async()=>{
      try{
        const res= await api.get("/feedback");
        console.log(res.data);
        setPosts(res.data);
      }
      catch(err){
        console.log(err);
      }
    }
    fetchPosts();
  },[])
  return (
    <>
      {
        posts.map((post)=>(
          <div key={post.id}>
            <h3>{post.title}</h3> 
            <p>{post.date}</p>
            <p>{post.body}</p>
            <hr />
          </div>
        ))
      }
    </>
  )
}

export default App
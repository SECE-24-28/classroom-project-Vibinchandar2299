import React, { useEffect, useState } from 'react'
import './App.css'
import SearchStudent from './SearchStudent'
import Body from './Body'

const LOCAL_KEY = 'react_day2_students'

const defaultStudents = [
	{ id: 1, sname: 'Alice', fee: false },
	{ id: 2, sname: 'Bob', fee: true },
	{ id: 3, sname: 'Charlie', fee: false },
]

export default function App() {
	const [stuList, setStuList] = useState(() => {
		try {
			const raw = localStorage.getItem(LOCAL_KEY)
			return raw ? JSON.parse(raw) : defaultStudents
		} catch (e) {
			return defaultStudents
		}
	})

	const [name, setName] = useState('')
	const [search, setSearch] = useState('')

	useEffect(() => {
		try {
			localStorage.setItem(LOCAL_KEY, JSON.stringify(stuList))
		} catch (e) {
			// ignore localStorage write errors
		}
	}, [stuList])

	const handleAdd = (e) => {
		e.preventDefault()
		const trimmed = name.trim()
		if (!trimmed) return
		const newStu = { id: Date.now(), sname: trimmed, fee: false }
		setStuList((s) => [newStu, ...s])
		setName('')
	}

	const handleChange = (id) => {
		setStuList((list) =>
			list.map((stu) => (stu.id === id ? { ...stu, fee: !stu.fee } : stu)),
		)
	}

	const handleDelete = (id) => {
		setStuList((list) => list.filter((stu) => stu.id !== id))
	}

	const filtered = stuList.filter((stu) =>
		stu.sname.toLowerCase().includes(search.toLowerCase()),
	)

	return (
		<div className="App">
			<h1>Student List</h1>

			<form onSubmit={handleAdd} style={{ marginBottom: '1rem' }}>
				<input
					type="text"
					placeholder="Add student name"
					value={name}
					onChange={(e) => setName(e.target.value)}
				/>
				<button type="submit">Add</button>
			</form>

			<SearchStudent search={search} setSearch={setSearch} />

			<div style={{ marginTop: '1rem' }}>
				<strong>Total:</strong> {stuList.length} &nbsp;|&nbsp; <strong>Shown:</strong>{' '}
				{filtered.length}
			</div>

			<Body stuList={filtered} handleChange={handleChange} handleDelete={handleDelete} />
		</div>
	)
}

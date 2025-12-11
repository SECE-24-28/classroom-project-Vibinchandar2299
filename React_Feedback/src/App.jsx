import { useState, useEffect } from 'react'
import './App.css'
import api from './api/Post.jsx'
import Home from './Home.jsx'

function App() {
  
  const [posts, setPosts] = useState([])
  const [search, setSearch] = useState("")
  const [searchResults, setSearchResults] = useState([])

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
  
  useEffect(()=>{
    const demo=async()=>
    {
      const filtered= await posts.filter((post)=>
      post.title?.toLowerCase().includes(search.toLowerCase())
    )
    setSearchResults(filtered)
    }
    demo()
  },[posts,search])
  return (
    <>
      <input 
        type="text" 
        placeholder="Search posts..." 
        value={search} 
        onChange={(e)=>setSearch(e.target.value)} 
      />
      <Home searchResults={searchResults} />

    </>
  )
}

export default App
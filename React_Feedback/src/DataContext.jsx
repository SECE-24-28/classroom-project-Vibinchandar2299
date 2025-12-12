import React from 'react'
import { useState, useEffect } from 'react'
import api from './api/Post.jsx'
import {createContext} from "react"

export const DataContext = createContext();
export const DataProvider=({children})=>{
    const [posts, setPosts] = useState([])
  const [search, setSearch] = useState("")
  const [searchResults, setSearchResults] = useState([])
  const [title,setTitle]=useState('')
  const [body,setBody]=useState('')

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
  
  useEffect(() => {
  const demo = () => {
    const filtered = posts.filter(post =>
      post.title?.toLowerCase().includes(search.toLowerCase())
    )
    setSearchResults(filtered)
  }

  demo()  
}, [posts, search])

    
    

  const handleSubmit=async(e)=>{
      e.preventDefault();
      const id=(posts.length)?(Number(posts[posts.length-1].id)+1):(1)
      const datetime=new Date().toLocaleString()

      const newObj={id,title,datetime,body}
      try{
        await api.post("/feedback",newObj)
        const newList=[...posts,newObj]
        setPosts(newList)
        setTitle('')
        setBody('')
      }
      catch(err){
        console.log(err)
      }
  }
    return(
        <DataContext.Provider value={{
            posts,
            search,
            searchResults,
            setSearch,
            title,
            body,
            setTitle,
            setBody,
            handleSubmit
        }}>
            {children}
        </DataContext.Provider> 
    )
}
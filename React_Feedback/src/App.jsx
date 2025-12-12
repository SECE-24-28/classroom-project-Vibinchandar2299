import { useState, useEffect } from 'react'
import './App.css'
import api from './api/Post.jsx'
import Home from './Home.jsx'
import Search from './Search.jsx'
import AddPost from './AddPost.jsx'
import { DataProvider } from './DataContext.jsx'

function App() {
  
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
  return (
    <>
      
      
      {/* <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder="Title" 
          value={title} 
          onChange={(e)=>setTitle(e.target.value)} 
          required 
        />
        <textarea 
          placeholder="Body" 
          value={body} 
          onChange={(e)=>setBody(e.target.value)} 
          required 
        />
        <button type="submit">Add Post</button>
      </form>
       */}
       <DataProvider>
          <Search search={search} setSearch={setSearch}/><hr />
          <AddPost title={title} setTitle={setTitle} body={body} setBody={setBody} handleSubmit={handleSubmit}/>
       </DataProvider>
       
      <Home searchResults={searchResults} />
    </>
  )
}

export default App
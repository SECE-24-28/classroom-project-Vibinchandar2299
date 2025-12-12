import React from 'react'
import {DataContext} from './DataContext'
import { useContext } from 'react'

const AddPost = () => {
  const {title,setTitle,body,setBody,handleSubmit} = useContext(DataContext)
  return (
    <div className="card" style={{maxWidth:700,margin:'0 auto'}}>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder='Title'
          value={title}
          onChange={(e)=>setTitle(e.target.value)}
          required
        />
        <textarea 
          placeholder='Body'
          value={body}
          onChange={(e)=>setBody(e.target.value)}
          required
          rows={8}
        ></textarea>
        <div style={{display:'flex',justifyContent:'flex-end'}}>
          <button type='submit'>Save</button>
        </div>
      </form>
    </div>
  )
}

export default AddPost
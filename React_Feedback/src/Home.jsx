import React from 'react'
import {DataContext} from './DataContext'
import { useContext } from 'react'

const Home = () => {
  const {searchResults} = useContext(DataContext)
  return (
    <>
    {
        searchResults.map((post)=>(
          <div key={post.id} className="post">
            <h3>{post.title}</h3> 
            <p className="post-date">{post.datetime}</p>
            <p>{post.body}</p>
          </div>
        ))
      }

      </>
  )
}

export default Home
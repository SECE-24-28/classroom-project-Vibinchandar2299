import React from 'react'

const Home = ({searchResults}) => {
  return (
    <>
    {
        searchResults.map((post)=>(
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

export default Home
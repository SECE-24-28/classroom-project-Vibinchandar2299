import React from 'react'
import {DataContext} from './DataContext'
import { useContext } from 'react'

const Home = () => {
  const {searchResults} = useContext(DataContext)
  return (
    <section>
      {searchResults.length === 0 && (
        <div className="card">
          <p className="read-the-docs">No posts yet. Add the first feedback using "New Post".</p>
        </div>
      )}

      <div className="posts-list">
        {searchResults.map((post) => (
          <article key={post.id} className="post card">
            <h3>{post.title}</h3>
            <p className="post-date">{post.datetime}</p>
            <p>{post.body}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Home
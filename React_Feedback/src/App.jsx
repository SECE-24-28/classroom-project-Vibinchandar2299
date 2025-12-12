import './App.css'

import Home from './Home.jsx'
import Search from './Search.jsx'
import AddPost from './AddPost.jsx'
import { DataProvider } from './DataContext.jsx'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'

function App() {
  return (
    <DataProvider>
      <Router>
        <div className="app">
          <header className="app-header">
            <div className="header-left">
              <h1 className="app-title">Feedback Board</h1>
              <p className="app-sub">Share thoughts — quick, simple feedback posts</p>
            </div>

            <div className="header-right">
              <nav className="nav">
                <Link to="/">Home</Link>
                <Link to="/newpost" className="btn-link">New Post</Link>
              </nav>
              <Search />
            </div>
          </header>

          <main className="container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/newpost" element={<AddPost />} />
            </Routes>
          </main>
        </div>
      </Router>
    </DataProvider>
  )
}

export default App
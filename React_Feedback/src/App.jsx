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
        <Search />
        <hr />

        <ol>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/newpost">NewPost</Link></li>
        </ol>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/newpost" element={<AddPost />} />
        </Routes>
      </Router>
    </DataProvider>
  )
}

export default App
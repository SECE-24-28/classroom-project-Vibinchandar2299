import './App.css'

import Home from './Home.jsx'
import Search from './Search.jsx'
import AddPost from './AddPost.jsx'
import { DataProvider } from './DataContext.jsx'

function App() {  
  return (
    <>
       <DataProvider>
          <Search/><hr />
          <AddPost/>
         <Home/>
       </DataProvider>
       
    </>
  )
}

export default App
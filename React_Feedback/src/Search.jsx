import React from 'react'
import { useContext } from 'react'
import {DataContext} from './DataContext'

const Search = () => {
   const {search,setSearch}=useContext(DataContext)
    return (
      <div>
        <input 
          className="search-inline"
          type="text" 
          placeholder="Search posts..." 
          value={search} 
          onChange={(e)=>setSearch(e.target.value)} 
        />
      </div>
  )
}

export default Search
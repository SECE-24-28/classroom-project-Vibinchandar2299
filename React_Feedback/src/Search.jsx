import React from 'react'
import { useContext } from 'react'
import DataContext from './DataContext'

const Search = ({search,setSearch}) => {
   const {num}=useContext(DataContext)
    return (
    <>
    <h1>{num}</h1>
        <input 
        type="text" 
        placeholder="Search posts..." 
        value={search} 
        onChange={(e)=>setSearch(e.target.value)} 
      />
    </>
  )
}

export default Search
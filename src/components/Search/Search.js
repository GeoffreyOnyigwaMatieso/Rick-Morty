import React from 'react'
import style from './Search.module.scss'

const Search = ({setSearch, setPageNumber}) => {
  return (
    <form className='d-flex justify-content-center gap-4 mb-5'>
        <input onChange={(e) => {
            setPageNumber(1)
            setSearch(e.target.value)}}
             type="text"  className={style.input}  placeholder='Search Character'/>
      <button onClick = {(e)=> {e.preventDefault()}} className={`${style.btn} btn btn-primary fs-5`}>Search</button>
    </form>
  )
}

export default Search

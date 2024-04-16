import { Button } from 'bootstrap'
import React from 'react'

const Pagination = ({pageNumber,setPageNumber}) => {
    // create a function to handle the next page
    let next = ()=> {
        setPageNumber((prev)=> prev + 1)

    }
    // create a function to handle the previous page
    let prev = ()=> {
        // condition to check if the page number is 1, if it is then return
        if(pageNumber === 1) return;
        setPageNumber((prev)=> prev - 1)
    }
  return (
    <div className='container d-flex justify-content-center gap-5 my-5'>
      <button onClick={prev} className='btn btn-primary'>Prev</button>
      <button onClick = {next} className='btn btn-primary'>Next</button>
    </div>
  )
}

export default Pagination

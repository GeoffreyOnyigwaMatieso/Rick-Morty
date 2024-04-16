import { Button } from 'bootstrap'
import React from 'react'
import ReactPaginate from 'react-paginate'

const Pagination = ({ info, pageNumber,setPageNumber}) => {
 
//   console.log(info?.pages)
  return (
    <ReactPaginate 
    className='pagination justify-content-center gap-4 my-4' 
    nextLabel = 'Next'
    previousLabel = 'Prev'
    nextClassName='btn btn-primary'
    previousClassName='btn btn-primary'
    pageClassName='page-item'
    pageLinkClassName='page-link'
    onPageChange={(page) => setPageNumber(page.selected + 1)}
    activeClassName='active'
    forcePage={pageNumber === 1 ? 0 :pageNumber - 1}
    pageCount={info?.pages} 
    />
  )
}

export default Pagination

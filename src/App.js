import React, { useState, useEffect } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import Filter from "./components/Filters/Filter";
import Cards from "./components/Cards/Cards";
import Pagination from './components/Pagination/Pagination';
import Search from './components/Search/Search';

function App() {

  let [pageNumber, setPageNumber] = useState(1)
  let [fetchData, updateFetchData] = useState([])
  let [search, setSearch] = useState('')

  // destructure results for Cards and info for pagination
  let { info, results } = fetchData

  // console.log(results)
  let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}`;
  

  useEffect(() => {
    (async function () {
      let data = await fetch(api).then(res => res.json())
      updateFetchData(data)
    })()
  }, [api])


  return (
    <div className="App">
      <h1 className="text-center ubuntu my-4 ">
        Rick & Morty <span className="text-danger">WiKi</span>
      </h1>
        <Search setPageNumber = {setPageNumber} setSearch = {setSearch}/>
      <div className="container">
        <div className="row">
          <div className="col-3">
            <Filter />
          </div>
          <div className="col-8">
            <div className="row">
              <Cards results={results} />
            </div>
          </div>
        </div>
      </div>
      <Pagination pageNumber = {pageNumber} setPageNumber = {setPageNumber}></Pagination>
    </div>
  );
}

export default App;

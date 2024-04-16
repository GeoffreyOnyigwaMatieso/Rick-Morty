import React, { useState, useEffect } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import Filter from "./components/Filters/Filter";
import Cards from "./components/Cards/Cards";
import Pagination from './components/Pagination/Pagination';

function App() {

  let [pageNumber, setPageNumber] = useState(1)
  let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}`;
  let [fetchData, updateFetchData] = useState([])

  // destructure results for Cards and info for pagination
  let { info, results } = fetchData

  // console.log(results)


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

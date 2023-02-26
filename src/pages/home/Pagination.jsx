import React, { useState } from "react";
import MovieCard from "./movieCard/MovieCard";
import Pagination from "antd/es/pagination";
import Select from "./filter/Select"

const PaginationMovies = ({ movies }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const moviesPerPage = 8;

  const indexOfLastMovie = currentPage * moviesPerPage;
  const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
  const currentMovies = movies?.slice(indexOfFirstMovie, indexOfLastMovie);

  

  const handlePaginationChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <div className="d-flex justify-content-between align-items-center my-5">
        <Pagination
        defaultCurrent={1}
        total={movies.length}
        pageSize={moviesPerPage}
        onChange={handlePaginationChange}
        
      />
      
      <Select />


      </div>
      <div className="d-flex justify-content-center align-items-center gap-3 flex-wrap">
          {currentMovies?.map((movie,index)=>(
            <MovieCard movie={movie} key={index} />
          ))}
      </div>
      <Pagination
        defaultCurrent={1}
        total={movies.length}
        pageSize={moviesPerPage}
        onChange={handlePaginationChange}
        className="d-flex justify-content-center my-5"
      />
    </div>
  );
};

export default PaginationMovies;

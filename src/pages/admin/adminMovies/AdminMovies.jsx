import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchMovies , allMovies , allMoviesLoading, allMoviesError, deleteMovie} from '../../../store/moviesSlice';
import { BsFillTrashFill } from "react-icons/bs"
import { BsFillPencilFill } from "react-icons/bs"
import { Link } from 'react-router-dom';

import Pagination from "antd/es/pagination";


const AdminMovies = () => {

  const handlePaginationChange = (page) => {
    setCurrentPage(page);
  };


  const movies = useSelector(allMovies)

  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(fetchMovies())
  },[])

  // to delete a user
  const handleDelete = (id)=>{
    if (confirm("Are you sure you want to delete this user ?")){
 
      dispatch(deleteMovie(id))

      return

    }
  }

  // handle pagination
  const [currentPage, setCurrentPage] = useState(1);

 const moviesPerPage = 8;

  const indexOfLastMovie = currentPage * moviesPerPage;
  const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
  const currentMovies = movies && movies.length > 0 ? movies.slice(indexOfFirstMovie, indexOfLastMovie) : [];
  

  console.log(movies)

  return (

    <div className='users'>
    
      <Link to="/admin/movies/add-movie" className="btn btn-primary add-user-btn mt-5 w-80">Add new movie</Link>
      <table className="table table-striped container my-5 users-table">
        <thead className="thead-light">
          <tr>
            <th scope="col">Title</th>
            <th scope="col">Rating</th>
            <th scope="col">Duration</th>
            <th scope="col">Edit</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          {currentMovies?.map((movie,index)=>(
            <tr key={index}>
              <td>{movie?.Title?.slice(0,20)}..</td>
              <td>{movie?.Rating}</td>
              <td>{movie?.Duration} mins</td>
              <td><Link to={`/admin/movies/edit/${movie?.id}`}><BsFillPencilFill /></Link></td>
              <td><button onClick={()=>handleDelete(movie?.id)} className="text-danger"><BsFillTrashFill /></button></td>
          </tr>
          ))}
        </tbody>
      </table>
        <Pagination
        className='mb-5'
        defaultCurrent={1}
        total={movies.length}
        pageSize={moviesPerPage}
        onChange={handlePaginationChange}
        
      />
    </div>
  )
}

export default AdminMovies
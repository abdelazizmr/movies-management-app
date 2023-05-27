import React from 'react'
import Filters from "./filter/Filters"
import { useSelector, useDispatch } from 'react-redux'
import { allMovies, allMoviesError, allMoviesLoading } from '../../store/moviesSlice'
import { useEffect } from 'react'
import { fetchMovies } from '../../store/moviesSlice'
import Pagination from "./Pagination"
import { Link } from 'react-router-dom'
import Spinner from '../../components/Spinner'

const Movies = () => {

  const movies = useSelector(allMovies)
  const error = useSelector(allMoviesError)
  const loading  = useSelector(allMoviesLoading)

  const dispatch = useDispatch()

  useEffect(()=>{

    dispatch(fetchMovies())

  },[])


  console.log(movies)



  return (
    <>
      <div className='m-3 d-flex justify-content-end'>
        <Link to="/login">Go admin dashboard</Link>
      </div>
      <div className='d-flex justify-content-center gap-5 m-2 home-container'>
        <Filters />
        
        <div>
          {movies ? 
          <Pagination movies={movies} />
          : <Spinner />
          }
        </div>

      </div>
    </>
    
  )
}

export default Movies
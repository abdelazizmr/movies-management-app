import React from 'react';
import { useEffect, useState } from 'react';
import { useParams, Link } from "react-router-dom"
import axios from 'axios';
import "./specificMovie.css"


const  SpecificMovie = () => {

  const [movie, setmovie] = useState({})

  const { id } = useParams()

  useEffect(()=>{
    
    const getMovie = async () =>{
      const {data}  = await axios.get(`http://localhost:5000/movies/${id}`)
      setmovie(data)
    }
    getMovie()
  },[id])

  let img;
  if (movie?.Image?.includes('http')){
    img = movie?.Image
  }else{
    img = `/images/${movie?.Image}`
  }


  return (
    <>
    <div className="navbar">
    <ul className="navbar-list">
      <li className="navbar-item">
        <a href="/">◀ Go back</a>
      </li>
    </ul>
    </div>

  <div className="movie-info">
    <h1 className="movie-title">{movie?.Title}</h1>
    <img className="movie-poster" src={img} alt="The Shawshank Redemption Poster" />
    
    <div className="movie-rating">{movie?.Rating}</div>
    <div className="movie-details">
      <div className="movie-detail-label">Duration:</div>
      <div className="movie-detail-value">{movie?.Duration}</div>
      <div className="movie-detail-label">Release Date:</div>
      <div className="movie-detail-value">{movie?.ReleaseDate}</div>
      <div className="movie-detail-label">Country:</div>
      <div className="movie-detail-value">{movie?.Country}</div>
    </div>
    <div className="movie-synopsis">{movie?.Synopsis}</div>
  </div>
</>
  );
}

export default SpecificMovie;

import React, { useState, useEffect } from 'react';
import { updateMovie } from '../../../store/moviesSlice';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch } from "react-redux"
import axios from 'axios';


function EditMovie() {
  const [movie, setMovie] = useState({
    Title: '',
    Synopsis: '',
    Duration: '',
    ReleaseDate: '',
    Rating: '',
    Country: '',
    Image: ''
  });

  const dispatch = useDispatch()
  const { id } = useParams()
  const navigate  = useNavigate()

  useEffect(()=>{
    const getMovie = async () =>{
      const { data }  = await axios.get(`http://localhost:5000/movies/${id}`)
      setMovie(data)
    }

    getMovie()
  },[id])

  function handleSubmit(event) {
    event.preventDefault();
    const payload = {
      id : id,
      updateMovie : movie
    }

    dispatch(updateMovie(payload))
    alert('Movie updated successfully ✔')
   navigate('/admin')

  }


  function handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    setMovie(prevMovie => ({
      ...prevMovie,
      [name]: value
    }));
  }

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="Title">Title</label>
          <input type="text" className="form-control" id="Title" name="Title" value={movie?.Title} onChange={handleInputChange} />
        </div>
        <div className="form-group">
          <label htmlFor="Synopsis">Synopsis</label>
          <textarea className="form-control" id="Synopsis" name="Synopsis" rows="3" value={movie?.Synopsis} onChange={handleInputChange}></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="Duration">Duration</label>
          <input type="text" className="form-control" id="Duration" name="Duration" value={movie?.Duration} onChange={handleInputChange} />
        </div>
        <div className="form-group">
          <label htmlFor="ReleaseDate">Release Date</label>
          <input type="text" className="form-control" id="ReleaseDate" name="ReleaseDate" value={movie?.ReleaseDate} onChange={handleInputChange} />
        </div>
        <div className="form-group">
          <label htmlFor="Rating">Rating</label>
          <input type="text" className="form-control" id="Rating" name="Rating" value={movie?.Rating} onChange={handleInputChange} />
        </div>
        <div className="form-group">
          <label htmlFor="Country">Country</label>
          <input type="text" className="form-control" id="Country" name="Country" value={movie?.Country} onChange={handleInputChange} />
        </div>
        <div className="form-group">
          <label htmlFor="Image">Image</label>
          <input type="text" className="form-control" id="Image" name="Image" value={movie?.Image} onChange={handleInputChange} />
        </div>
        <button type="submit" className="btn btn-primary mt-3">Save</button>
      </form>
    </div>
  );
}

export default EditMovie
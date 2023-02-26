import React, { useState } from 'react';
import { addMovie } from '../../../store/moviesSlice';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from "react-redux"

function AddMovie() {
  const [Title, setTitle] = useState('');
  const [Synopsis, setSynopsis] = useState('');
  const [Duration, setDuration] = useState('');
  const [ReleaseDate, setReleaseDate] = useState('');
  const [Rating, setRating] = useState('');
  const [Country, setCountry] = useState('');
  const [Image, setImage] = useState('');

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleSubmit = (event) => {
    event.preventDefault();

    const newMovie = {
      id : new Date().getTime(),
      Title,
      Synopsis,
      Duration,
      ReleaseDate,
      Rating,
      Country,
      Image
    };

    dispatch(addMovie(newMovie));
    alert('Movie has been added successfully ✔')
    navigate('/admin')
  };

  return (
    <div className="container mt-3 px-3">
      <h2 className='text-center'>Add a Movie</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="Title">Title</label>
          <input
            type="text"
            className="form-control"
            id="Title"
            placeholder="Enter movie Title"
            value={Title}
            onChange={(event) => setTitle(event.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="Synopsis">Synopsis</label>
          <textarea
            className="form-control"
            id="Synopsis"
            rows="3"
            placeholder="Enter movie Synopsis"
            value={Synopsis}
            onChange={(event) => setSynopsis(event.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="Duration">Duration (minutes)</label>
          <input
            type="number"
            className="form-control"
            id="Duration"
            placeholder="Enter movie Duration"
            value={Duration}
            onChange={(event) => setDuration(event.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="Duration">Image (URL only allowed)</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter movie url"
            value={Image}
            onChange={(event) => setImage(event.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="Rating">Rating</label>
          <input
            type="number"
            step="0.1"
            className="form-control"
            id="Rating"
            placeholder="Enter movie Rating"
            value={Rating}
            onChange={(event) => setRating(event.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="Country">Country</label>
          <input
            type="text"
            className="form-control"
            id="Country"
            placeholder="Enter movie Country"
            value={Country}
            onChange={(event) => setCountry(event.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary mt-2">Add Movie</button>
      </form>
    </div>
  );
}

export default AddMovie;

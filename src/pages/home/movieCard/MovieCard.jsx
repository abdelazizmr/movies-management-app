 import "./moviecard.css"
 import { Link } from "react-router-dom";
 
 const MovieCard = ({ movie }) => {
  
  

  let rating;
  if (movie?.Rating >= 8.5){
    rating = 'very-good'
  }
  else if (movie?.Rating < 8.5 && movie?.Rating >= 7){
    rating = 'good'
  }
  else{
    rating = 'bad'
  }

  let img;
  if (movie?.Image.includes('http')){
    img = movie?.Image
  }else{
    img = `/images/${movie?.Image}`
  }


  return (
  

    <Link to={`/movie/${movie?.id}`}>
      <div className="movie-card">

        <img src={img} alt="" style={{width:'300px',height:'400px'}} />

        <div className=" d-flex justify-content-center align-items-center gap-3 p-3 ">
          <p className={rating} >{movie?.Rating}</p>

          <h2>{movie?.Title.slice(0,20)}..</h2>
        </div>

      </div>  
    </Link>
  
    
  );
};

export default MovieCard
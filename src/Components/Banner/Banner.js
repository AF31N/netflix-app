import React, { useEffect, useState } from 'react';
import './Banner.css';
import axios from '../../Axios';
import { API_KEY } from '../../Constants/Constants';
import { ImageUrl } from '../../Constants/Constants';

function Banner() {
  const [movies, setMovies] = useState([]);
  const [currentMovieIndex, setCurrentMovieIndex] = useState(0);

  useEffect(() => {
    axios.get(`/trending/all/week?api_key=${API_KEY}&language=en-US`).then((response) => {
      console.log(response.data.results)
      setMovies(response.data.results);
    });
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMovieIndex((prevIndex) => (prevIndex + 1) % movies.length);
    }, 8000); // Change the movie every 5 seconds (adjust this time as needed)

    return () => clearInterval(interval);
  }, [movies]);

  const currentMovie = movies.length > 0 ? movies[currentMovieIndex] : {};

  return (
    <div className='banner' style={{ backgroundImage: `url(${currentMovie ? ImageUrl + currentMovie.backdrop_path : ''})` }}>
      <div className='content'>
      <h1 className='title'>{currentMovie && currentMovie.title ? currentMovie.title : currentMovie.name }</h1>
        <div className='banner_buttons'>
          <button className='button'>Play</button>
          <button className='button'>My List</button>
        </div>
        <h1 className='description'>{currentMovie ? currentMovie.overview : ''}</h1>
      </div>
      <div className='fade_bottom'></div>
    </div>
  );
}

export default Banner;




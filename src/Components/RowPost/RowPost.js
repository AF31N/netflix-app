import React, { useEffect, useState } from 'react';
import './RowPost.css';
import axios from '../../Axios';
import { ImageUrl, API_KEY } from '../../Constants/Constants';
import YouTube from 'react-youtube';

function RowPost(props) {
  const [movies, setMovies] = useState([]);
  const [videoId, setVideoId] = useState(null);

  useEffect(() => {
    axios
      .get(props.url)
      .then((response) => {
        setMovies(response.data.results);
      })
      .catch((err) => {
        console.error('Network error', err);
      });
  }, [props.url]); // Include props.url in the dependency array


  const handleMovie = (id) => {
    axios
      .get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`)
      .then((response) => {
        const videos = response.data.results;
        if (videos && videos.length > 0) {
          const firstVideoId = videos[0].key;
          setVideoId(firstVideoId); // Set the video ID to state
        } else {
          console.log('No videos found');
        }
      })
      .catch((error) => {
        console.error('Error fetching videos:', error);
      });
  };

  const closeVideo = () => {
    setVideoId(null); // Clear the video ID to hide the video
  };

  const opts = {
    height: '390',
    width: '640',
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <div className='row'>
      <h1>{props.title}</h1>
      <div className='posters'>
        {movies.map((obj) => (
          <img
            key={obj.id}
            onClick={() => handleMovie(obj.id)}
            className={props.isSmall ? 'smallposter' : 'poster'}
            src={`${ImageUrl + obj.backdrop_path}`}
            alt=''
          />
        ))}
      </div>
      {videoId && (
        <div>
          <YouTube videoId={videoId} opts={opts} />
          <button onClick={closeVideo}>Close</button> {/* Close button to hide the video */}
        </div>
      )}
    </div>
  );
}

export default RowPost;







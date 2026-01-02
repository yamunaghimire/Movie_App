import { useEffect, useState } from "react"
import { moviesApi } from "../../../app/config/movie.api"

const useMovieDetails = (movieId)=>{
    const[movieDetails, setMovieDetails] = useState(null);
    useEffect(()=>{
        async function getMovieDetails()
        {
         const data = await moviesApi.getMovieDetails(movieId);
         console.log("Movie Details:", data)
         setMovieDetails(data);
        }
        getMovieDetails();

    },[movieId])
    return movieDetails;
};

export default useMovieDetails;
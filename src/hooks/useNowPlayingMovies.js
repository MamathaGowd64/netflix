import { useDispatch, useSelector } from 'react-redux';
import { addNowPlayingmovies } from '../utils/movieSlice';
import { useEffect } from 'react'
import { API_OPTIONS } from '../constants/constants';

const useNowPlayingMovies = () => {
    const dispatch = useDispatch();

    const nowplayingmovies = useSelector((store) => store.movies.nowplayingmovies);

    const getNowPlayingMovies = async () => {
        const response = await
            fetch('https://api.themoviedb.org/3/movie/now_playing?page=1',
                API_OPTIONS);
        const json = await response.json();
        //console.log(json)
        dispatch(addNowPlayingmovies(json.results));
    }
// (!nowplayingmovies && getNowPlayingMovies());
    
    useEffect(() => {
        if (!nowplayingmovies) getNowPlayingMovies();//memoization
       
      },[]);
}
 
export default useNowPlayingMovies;
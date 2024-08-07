import { useDispatch } from 'react-redux';
import { addNowPlayingmovies } from '../utils/movieSlice';
import { useEffect } from 'react'
import { API_OPTIONS } from '../constants/constants';

const useNowPlayingMovies = () => {
    const dispatch = useDispatch();

    const getNowPlayingMovies = async () => {
        const response = await
            fetch('https://api.themoviedb.org/3/movie/now_playing?page=1',
                API_OPTIONS);
        const json = await response.json();
        dispatch(addNowPlayingmovies(json));
    }
    
    useEffect(() => {
        getNowPlayingMovies();
      },[]);
}
 
export default useNowPlayingMovies;
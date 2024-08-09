import { useDispatch } from 'react-redux';
import { addPopularMovies } from '../utils/movieSlice';
import { useEffect } from 'react'
import { API_OPTIONS } from '../constants/constants';

const usePopularMovies = () => {
    const dispatch = useDispatch();

    const getPopularMovies = async () => {
        const response = await
            fetch('https://api.themoviedb.org/3/movie/popular?&page=1',
                API_OPTIONS);
        const json = await response.json();
        //console.log(json);
        dispatch(addPopularMovies(json.results));
        
    }
    
    useEffect(() => {
        getPopularMovies();
      },[]);
}
 
export default usePopularMovies;
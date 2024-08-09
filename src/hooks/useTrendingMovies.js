import { useDispatch } from 'react-redux';
import { addTrendingMovies } from '../utils/movieSlice';
import { useEffect } from 'react'
import { API_OPTIONS } from '../constants/constants';

const useTrendingMovies = () => {
    const dispatch = useDispatch();

    const getTrendingMovies = async () => {
        const response = await
            fetch('https://api.themoviedb.org/3/movie/upcoming?&page=1',
                API_OPTIONS);
        const json = await response.json();
        //console.log(json);
        dispatch(addTrendingMovies(json.results));
        
    }
    
    useEffect(() => {
        getTrendingMovies();
      },[]);
}
 
export default useTrendingMovies;
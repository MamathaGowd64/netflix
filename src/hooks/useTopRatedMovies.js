import { useDispatch } from 'react-redux';
import { addTopRatedMovies } from '../utils/movieSlice';
import { useEffect } from 'react'
import { API_OPTIONS } from '../constants/constants';

const useTopRatedMovies = () => {
    const dispatch = useDispatch();

    const getTopRatedMovies = async () => {
        const response = await
            fetch('https://api.themoviedb.org/3/movie/top_rated?&page=1',
                API_OPTIONS);
        const json = await response.json();
       // console.log(json);
        dispatch(addTopRatedMovies(json.results));
        
    }
    
    useEffect(() => {
        getTopRatedMovies();
      },[]);
}
 
export default useTopRatedMovies;
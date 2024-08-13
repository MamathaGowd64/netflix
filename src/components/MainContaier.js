import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBakground from "./VideoBakground";

const MainContaier = () => {

    const movies = useSelector((store) => store.movies?.nowplayingmovies);
    const trailerKey = useSelector((state) => state.movies.trailerVideo?.key);
    if (!movies) return;

    const mainMovie = movies[0];
    const { original_title, overview,id} = mainMovie;
    return (
        <div>
            <VideoTitle title={original_title} overview={overview} key={trailerKey} />
            <VideoBakground movieId={id} />
        </div>
    )
}
export default MainContaier;
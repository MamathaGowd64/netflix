import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBakground from "./VideoBakground";

const MainContaier = () => {

    const movies = useSelector((store) => store.movies?.nowplayingmovies);
    if (!movies) return;

    const mainMovie = movies.results[0];
    const { original_title, overview,id} = mainMovie;
    return (
        <div>
            <VideoTitle title={original_title} overview={overview} />
            <VideoBakground movieId={id} />
        </div>
    )
}
export default MainContaier;
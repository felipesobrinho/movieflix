"use client"
import HighlightedMovie from "@/components/HighlightedMovie";
import MovieList from "@/components/MovieList";

const MOVIES_LIST_URL = "https://api.themoviedb.org/3/trending/movie/day"
const HIGHLIGHTED_MOVIE_URL = "https://api.themoviedb.org/3/movie/"

export default function Home() {

    return (
        <div className="overflow-y-scroll">
            <HighlightedMovie url={HIGHLIGHTED_MOVIE_URL} trending_url={MOVIES_LIST_URL} />
            < h2 className="text-center text-black text-2xl my-4 font-bold"> Filmes populares 🚀 </h2>
            <MovieList url={MOVIES_LIST_URL} />
        </ div>
    )
}

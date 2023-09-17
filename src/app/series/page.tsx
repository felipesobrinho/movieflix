"use client"
import HighlightedMovie from "@/components/HighlightedMovie";
import MovieList from "@/components/MovieList";

const SERIES_LIST_URL = "https://api.themoviedb.org/3/trending/tv/day?api_key="
const HIGHLIGHTED_SERIE_URL = "https://api.themoviedb.org/3/tv/"

export default function Home() {

    return (
        <div className="overflow-y-scroll">
            <HighlightedMovie url={HIGHLIGHTED_SERIE_URL} trending_url={SERIES_LIST_URL} />
            <h2 className="text-center text-black text-2xl my-4 font-bold"> Séries populares 🚀 </h2>
            <MovieList url={SERIES_LIST_URL} />
        </ div>
    )
}

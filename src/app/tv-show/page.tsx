"use client"
import HighlightedMovie from "@/components/HighlightedMovie";
import MovieList from "@/components/MovieList";

const TV_LIST_URL = "https://api.themoviedb.org/3/tv/popular"
const HIGHLIGHTED_SERIE_URL = "https://api.themoviedb.org/3/tv/"

export default function Home() {

    return (
        <div className="overflow-y-scroll">
            <HighlightedMovie url={HIGHLIGHTED_SERIE_URL} trending_url={TV_LIST_URL} />
            <h2 className="text-center text-black text-2xl my-4 font-bold"> Programas de TV populares 🚀 </h2>
            <MovieList url={TV_LIST_URL} />
        </ div>
    )
}

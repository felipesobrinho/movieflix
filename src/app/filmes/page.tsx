"use client"
import HighlightedMovie from "@/components/HighlightedMovie";
import MovieList from "@/components/MovieList";

const URL = "https://api.themoviedb.org/3/trending/all/day?api_key="

export default function Home() {

    return (
        <div className="overflow-y-scroll">
            <HighlightedMovie />
            <h2 className="text-center text-black text-2xl my-4 font-bold"> Filmes populares 🚀 </h2>
            <MovieList url={URL} />
        </ div>
    )
}

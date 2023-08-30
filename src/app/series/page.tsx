"use client"
import MovieList from "@/components/MovieList";

const URL = "https://api.themoviedb.org/3/tv/top_rated?api_key="

export default function Home() {

    return (
        <div className="overflow-y-scroll m-5">
            <h2 className="text-center text-black text-2xl mb-4 font-bold"> Séries populares 🚀 </h2>
            <MovieList url={URL} />
        </ div>
    )
}

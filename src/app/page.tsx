"use client"
import HighlightedMovie from "@/components/HighlightedMovie";
import MovieList from "@/components/MovieList";

const URL = "https://api.themoviedb.org/3/trending/all/week?api_key="

export default function Home() {

  return (
    <div className="overflow-y-scroll">
      <HighlightedMovie />
      <h2 className="text-center text-black text-2xl my-4 font-bold"> Filmes populares da semana 🚀 </h2>
      <MovieList url={URL} />
    </ div>
  )
}

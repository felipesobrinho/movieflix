"use client"
import HighlightedMovie from "@/components/HighlightedMovie";
import MovieList from "@/components/MovieList";

const TRENDING_LIST_URL = "https://api.themoviedb.org/3/trending/all/week?api_key="
const HIGHLIGHTED_MOVIE_URL = "https://api.themoviedb.org/3/movie/"

export default function Home() {

  return (
    <div className="overflow-y-scroll">
      <HighlightedMovie url={HIGHLIGHTED_MOVIE_URL} trending_url={TRENDING_LIST_URL} />
      <h2 className="text-center text-black text-2xl my-4 font-bold"> Filmes populares da semana 🚀 </h2>
      <MovieList url={TRENDING_LIST_URL} />
    </ div>
  )
}

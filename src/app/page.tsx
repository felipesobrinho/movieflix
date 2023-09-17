"use client"
import HighlightedMovie from "@/components/HighlightedMovie";
import MovieList from "@/components/MovieList";

const TRENDING_MOVIES_URL = "https://api.themoviedb.org/3/trending/all/week"
const HIGHLIGHTED_MOVIE_URL = "https://api.themoviedb.org/3/movie/"

export default function Home() {

  return (
    <div className="overflow-y-scroll flex flex-col">
      <HighlightedMovie url={HIGHLIGHTED_MOVIE_URL} trending_url={TRENDING_MOVIES_URL} />
      <h2 className="text-center text-black text-2xl my-4 font-bold"> Filmes populares da semana 🚀 </h2>
      <MovieList url={TRENDING_MOVIES_URL} />
    </ div>
  )
}

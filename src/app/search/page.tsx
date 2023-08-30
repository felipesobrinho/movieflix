'use client'
import MovieList from "@/components/MovieList";
import { useSearchParams } from "next/navigation";

const SEARCH_URL = `https://api.themoviedb.org/3/search/movie`
const LANGUAGUE = "pt-BR"

export default function SearchPage() {
    const searchParams = useSearchParams();
    const query = searchParams.get("q");

    const FORMATED_URL = `${SEARCH_URL}?query=${query}&language=${LANGUAGUE}&api_key=`

    return (
        <div className="overflow-y-scroll m-5">
            <h2 className="text-black text-2xl mb-4 font-bold text-center"> Resultados para: <span className="text-red-500"> {query?.toUpperCase()} </span></h2>
            <MovieList url={FORMATED_URL} />
        </div>
    )
}
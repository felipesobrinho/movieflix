'use client'
import Card from "@/components/MovieCard";
import { MovieData, MovieResponse } from "@/interfaces/movie-data";
import axios from "axios";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const SEARCH_URL = "https://api.themoviedb.org/3/search/movie"
const API_KEY = "aaa503732a8e1332e0a32c01e12ff533"
const LANGUAGUE = "pt-BR"

export default function SearchPage() {
    const [movies, setMovies] = useState<MovieData[]>([]);
    const searchParams = useSearchParams();
    const query = searchParams.get("q");


    const fetchMovieData = () => {
        axios.get<MovieResponse>(`${SEARCH_URL}?query=${query}&language=${LANGUAGUE}&api_key=${API_KEY}`)
            .then((response) => {
                const movieData = response.data.results;
                console.log(response)
                setMovies(movieData);
            })
    }

    useEffect(() => {
        fetchMovieData()
    }, [query])

    return (
        <div className="flex flex-col items-center justify-center">
            <h2 className="text-black text-2xl mb-4 font-bold"> Resultados para: <span className="text-red-500"> {query?.toUpperCase()} </span></h2>
            <div className="grid grid-cols-4 gap-5 mb-5">
                {movies.map(movie => (
                    <Card
                        key={movie.id}
                        title={movie.title ? movie.title : movie.original_name}
                        poster_path={movie.poster_path}
                        resume={movie.overview}
                    />
                ))}
            </div>
        </div>
    )
}
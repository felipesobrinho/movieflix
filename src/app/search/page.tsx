'use client'
import Card from "@/components/MovieCard";
import { MovieData, MovieResponse } from "@/interfaces/movie-data";
import { data } from "autoprefixer";
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
                setMovies(movieData);
            })
    }

    useEffect(() => {
        fetchMovieData()
    }, [query])

    return (
        <div className="overflow-y-scroll m-5">
            <h2 className="text-black text-2xl mb-4 font-bold text-center"> Resultados para: <span className="text-red-500"> {query?.toUpperCase()} </span></h2>
            <div className="grid grid-cols-responsive gap-6 items-center justify-center">
                {movies.map(data => (
                    <Card
                        key={data.id}
                        title={data.title ? data.title : data.original_name}
                        poster_path={data.poster_path}
                        resume={data.overview}
                        release_date={data.release_date ? data.release_date : data.first_air_date}
                    />
                ))}
            </div>
        </div>
    )
}
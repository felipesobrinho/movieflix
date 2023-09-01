import { formatRuntime } from "@/app/utils/formatRuntime";
import { getReleaseDateYear } from "@/app/utils/getReleaseDateYear";
import { MovieData, MoviesResponse } from "@/interfaces/movie-data";
import axios from "axios";
import { useEffect, useState } from "react";

const API_KEY = "aaa503732a8e1332e0a32c01e12ff533"
const TRENDING_URL = "https://api.themoviedb.org/3/trending/all/week?api_key="
const URL = "https://api.themoviedb.org/3/movie/"

interface ImagesData {
    width: number,
    height: number,
    file_path: string,
    backdrops: Array<ImagesData>,
}

export default function HighlightedMovie() {
    const [data, setData] = useState<MovieData>();
    const [images, setImages] = useState<ImagesData>();

    const getHighlightedData = async () => {
        const response = await axios.get<MoviesResponse>(`${TRENDING_URL}${API_KEY}`);
        const firstMovieId = (response.data.results[0].id);
        const getMovie = await axios.get<MovieData>(`${URL}${firstMovieId}?api_key=${API_KEY}`);
        const getImages = await axios.get<ImagesData>(`${URL}${firstMovieId}/images?api_key=${API_KEY}`)
        setData(getMovie.data);
        setImages(getImages.data.backdrops[0]);
    }

    useEffect(() => {
        getHighlightedData()
    }, [])

    return (
        <div className="relative shadow-2xl w-full h-[50vh] flex items-center justify-center">
            <img
                className="object-cover w-full h-full"
                src={`https://image.tmdb.org/t/p/original/${images?.file_path}`}
                alt={data?.title || "Movie poster"}
                width={images?.width}
                height={images?.height}
            />
            <div className="px-10 flex flex-col justify-center items-center absolute top-0 left-0 bottom-0 bg-gradient-to-r from-black">
                <div>
                    <h2 className="font-bold text-3xl text-white">{data?.title}</h2>
                    <div className="flex gap-3 my-1">
                        <p className="text-gray-400 text-lg font-semibold"> {getReleaseDateYear(data?.release_date)} </p>
                        <p className="text-gray-400 text-lg font-semibold"> {formatRuntime(data?.runtime)} </p>
                    </div>
                    <p className="text-gray-200 max-w-[50%] font-semibold"> {data?.overview} </p>
                </div>
            </div>

        </div>
    )
}
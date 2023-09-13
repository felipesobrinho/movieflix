import { ImagesData, MovieData, VideosData } from "@/interfaces/movie-data";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const API_KEY = "aaa503732a8e1332e0a32c01e12ff533"

const URL = "https://api.themoviedb.org/3/"

export function useMovie({ id, category }: { id: string, category: string }) {

    const fetcher = async (id: string, category: string) => {
        const getMovieCategory = await axios.get<MovieData>(`${URL}${category}/${id}?api_key=${API_KEY}`);
        const getMovieImages = await axios.get<ImagesData>(`${URL}${category}/${id}/images?api_key=${API_KEY}`)
        const getMovieVideos = await axios.get<VideosData>(`${URL}${category}/${id}/videos?api_key=${API_KEY}`)
        return {
            movie: getMovieCategory.data,
            images: getMovieImages.data,
            videos: getMovieVideos.data,
        }
    }

    const query = useQuery({
        queryKey: ['movie', id],
        queryFn: () => fetcher(id, category),
        enabled: !!id,
    });

    return {
        ...query,
        data: query.data
    }
}
'use client'
import { ImagesData, MovieData, MoviesResponse } from '@/interfaces/movie-data';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const API_KEY = "aaa503732a8e1332e0a32c01e12ff533"

export interface HighlightedData {
    url: string,
    trending_url: string,
}

export default function useHighlightedData({ url, trending_url }: HighlightedData) {

    const getHighlightedData = async () => {
        const response = await axios.get<MoviesResponse>(`${trending_url}${API_KEY}`);
        const firstItemId = response.data.results[0].id;
        const getMovie = await axios.get<MovieData>(`${url}${firstItemId}?api_key=${API_KEY}`);
        const getImages = await axios.get<ImagesData>(`${url}${firstItemId}/images?api_key=${API_KEY}`)
        return {
            movie: getMovie.data,
            images: getImages.data.backdrops[0]
        }
    }

    const query = useQuery({
        queryKey: ['highlighted-movie-data'],
        queryFn: getHighlightedData,
    })

    return {
        ...query,
        data: query.data,
    }
}
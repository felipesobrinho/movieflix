'use client'
import { MoviesResponse } from '@/interfaces/movie-data';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const API_KEY = "aaa503732a8e1332e0a32c01e12ff533"

export default function useMoviesList(url: string) {
    const query = useQuery<MoviesResponse, Error>({
        queryKey: ['movie-data'],
        queryFn: async () => {
            const response = await axios.get<MoviesResponse>(`${url}${API_KEY}`)
            return response.data;
        },
    })

    return {
        ...query,
        data: query.data,
    }
}
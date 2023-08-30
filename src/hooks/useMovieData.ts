'use client'
import { MovieResponse } from '@/interfaces/movie-data';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const API_KEY = "aaa503732a8e1332e0a32c01e12ff533"


export default function useMovieData(url: string) {
    const query = useQuery<MovieResponse, Error>({
        queryKey: ['movie-data'],
        queryFn: async () => {
            const response = await axios.get<MovieResponse>(`${url}${API_KEY}`)
            return response.data;
        },
        retry: 2,
    })

    return {
        ...query,
        data: query.data,
    }
}
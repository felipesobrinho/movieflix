'use client'
import { MovieResponse } from '@/interfaces/movie-data';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const API_KEY = "aaa503732a8e1332e0a32c01e12ff533"

const fetchMovieData = async () => {
    const response = await axios.get<MovieResponse>(`https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}`)
    return response;
}


export default function useMovieData() {
    const query = useQuery({
        queryKey: ['movie-data'],
        queryFn: fetchMovieData,
    })

    return {
        ...query,
        data: query.data?.data,
    }
}
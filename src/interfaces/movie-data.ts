export interface MovieData {
    id: string,
    title: string,
    poster_path: string,
    original_name: string,
    overview: string,
    release_date: string,
    first_air_date: string,
}

export interface MovieResponse {
    results: MovieData[],
}
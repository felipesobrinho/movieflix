export interface MovieData {
    id: string,
    title: string,
    poster_path: string,
    original_name: string,
    overview: string,
    release_date: Date,
    first_air_date: Date,
}

export interface MovieResponse {
    results: MovieData[],
}
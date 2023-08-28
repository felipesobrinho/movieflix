export interface MovieData {
    id: string,
    title: string,
    overview: string;
    poster_path: string,
    original_name: string,
}

export interface MovieResponse {
    results: MovieData[],
}
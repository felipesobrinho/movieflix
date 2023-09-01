export interface MovieData {
    id: string,
    title: string,
    poster_path: string,
    original_name: string,
    overview: string,
    release_date: string,
    first_air_date: string,
    runtime: any,
    number_of_episodes: string,
    number_of_seasons: string,
}

export interface MoviesResponse {
    results: MovieData[],
}

export interface MovieResponse {
    results: MovieData,
}

export interface ImagesData {
    width: number,
    height: number,
    file_path: string,
    backdrops: Array<ImagesData>,
}
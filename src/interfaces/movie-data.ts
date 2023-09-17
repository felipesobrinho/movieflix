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
    media_type: string,
    vote_average: number,
    tagline: string,
    budget: number,
    revenue: number,
    genres: [{
        id: string,
        name: string,
    }]
    production_companies: [{
        id: string,
        logo_path: string,
        name: string,
        origin_country: string,
    }]
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
    backdrops: [{
        file_path: string,
    }]
}

export interface VideoData {
    results: [{
        iso_639_1: string,
        iso_3166_1: string,
        name: string,
        key: string,
        site: string,
        size: number,
        type: string,
        official: boolean,
        published_at: string,
        id: string
    }]

}
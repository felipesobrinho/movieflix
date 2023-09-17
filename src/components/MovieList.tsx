import Card from "@/components/MovieCard";
import useMovieList from "@/hooks/useMovieList";
import Loading from "./Loading";

export default function MovieList({ url }: { url: string }) {
    const { data, isLoading } = useMovieList(`${url}`);
    return (
        <>
            <div className="grid grid-cols-responsive gap-6 items-center justify-center mb-10">
                {!isLoading && data?.results.map(data => (
                    <Card
                        category={data.media_type == "movie" ? "movie" : "tv"}
                        key={data.id}
                        id={data.id}
                        title={data.title ? data.title : data.original_name}
                        poster_path={data.poster_path}
                        overview={data.overview}
                        release_date={data.release_date ? data.release_date : data.first_air_date}
                        vote_average={data.vote_average}
                    />
                ))}
            </div>
            {
                isLoading &&
                <Loading />
            }
        </ >
    )
}
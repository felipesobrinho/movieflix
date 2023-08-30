import Card from "@/components/MovieCard";
import useMovieData from "@/hooks/useMovieData";

export default function MovieList({ url }: { url: string }) {
    const { data, isLoading } = useMovieData(`${url}`);

    return (
        <div className="grid grid-cols-responsive gap-6 items-center justify-center">
            {!isLoading && data?.results.map(data => (
                <Card
                    key={data.id}
                    title={data.title ? data.title : data.original_name}
                    poster_path={data.poster_path}
                    resume={data.overview}
                    release_date={data.release_date ? data.release_date : data.first_air_date}
                />
            ))}
        </div>
    )
}
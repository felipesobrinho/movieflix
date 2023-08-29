"use client"
import Card from "@/components/MovieCard";
import useMovieData from "@/hooks/useMovieData"

export default function Home() {
  const { data, isLoading, isError } = useMovieData();

  return (
    <div className="overflow-y-scroll m-5">
      <h2 className="text-center text-black text-2xl mb-4 font-bold"> Filmes mais votados 🌟</h2>
      <div className="grid grid-cols-responsive gap-6 items-center justify-center">
        {!isLoading && data?.results.map(data => {
          return (
            <Card
              key={data.id}
              title={data.title ? data.title : data.original_name}
              poster_path={data.poster_path}
              resume={data.overview}
              release_date={data.release_date ? data.release_date : data.first_air_date}
            />
          );
        })}
      </div>
      {isLoading &&
        <p> Carregando... </p>
      }
      {isError &&
        <p> Erro ao carregar </p>
      }
    </ div>
  )
}

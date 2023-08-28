"use client"
import Card from "@/components/MovieCard";
import useMovieData from "@/hooks/useMovieData"

export default function Home() {
  const { data, isLoading, isError } = useMovieData();

  console.log(data)
  return (
    <div className="flex justify-center flex-col items-cente">
      <div className="grid grid-cols-4 gap-5 mb-5">
        {!isLoading && data?.results.map(data => {
          return (
            <Card
              key={data.id}
              title={data.title ? data.title : data.original_name}
              poster_path={data.poster_path}
              resume={data.overview}
            />
          );
        })}
      </div>
      {isLoading &&
        <div className="w-full h-full flex items-center justify-center">
          <p> Carregando... </p>
        </div>
      }
      {isError &&
        <div className="w-[100vw] h-[100vh] flex items-center justify-center">
          <p> Erro ao carregar</p>
        </div>
      }
    </ div>
  )
}

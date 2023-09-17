'use client'
import { useMovie } from "@/hooks/useMovie"
import { Skeleton } from "@/components/ui/skeleton";
import Image from "next/image";
import StarRating from "@/components/StarRating";
import ShowTrailer from "@/components/ShowTrailer";
import { formatBudget, formatDate, formatRuntime, getReleaseDateYear } from "../utils/utils";

export default function MoviePage({
    searchParams,
}: {
    searchParams: { id: string, category: string }
}) {
    const { data, isLoading } = useMovie({ id: searchParams.id, category: searchParams.category });

    const getTrailer = () => {
        const trailer = data?.videos.results.find(video => video.type == 'Trailer');
        return `https://www.youtube.com/embed/${trailer?.key}?rel=0&showinfo=0&autoplay=1`
    }

    return (
        <div className="w-full h-full overflow-hidden shadow-2xl bg-slate-900 overflow-y-scroll">
            {!isLoading &&
                <div>
                    <div className="relative shadow-2xl h-[50vh] flex items-center justify-center">
                        <Image
                            className="object-cover w-full h-full"
                            src={`https://image.tmdb.org/t/p/original/${data?.images?.backdrops[0]?.file_path}`}
                            alt={data?.movie.title || "Movie poster"}
                            width={1920}
                            height={1080}
                        />
                        <div className="px-10 flex flex-col justify-center items-center absolute top-0 left-0 bottom-0 bg-gradient-to-r from-black">
                            <div>
                                <h2 className="font-bold text-3xl text-white">{data?.movie.title ? data.movie.title : data?.movie.original_name}</h2>
                                <div className="flex gap-3 my-1">
                                    <p className="text-gray-400 text-lg font-semibold"> {getReleaseDateYear(data?.movie.release_date ? data.movie.release_date : data?.movie.first_air_date)} </p>
                                    <p className="text-gray-400 text-lg font-semibold">
                                        {data?.movie.runtime ? formatRuntime(data.movie.runtime) :
                                            data?.movie.number_of_seasons == "1" ?
                                                `${data?.movie.number_of_seasons} temporada` :
                                                `${data?.movie.number_of_seasons} temporadas`
                                        }
                                    </p>
                                </div>
                                <StarRating vote_average={data?.movie.vote_average} />
                                <p className="text-slate-300 italic text-base py-1">{data?.movie.tagline}</p>
                                <p className="text-gray-200 max-w-[50%] font-semibold my-1"> {data?.movie.overview} </p>
                                <ShowTrailer getTrailer={getTrailer()} />
                            </div>
                        </div>
                    </div>
                    <div className="items-center w-full h-full margin-auto pt-6 pb-6 flex justify-center">
                        <Image
                            className="object-cover shadow-xl min-h-[480px] border-solid border-4 border-slate-600"
                            src={`https://image.tmdb.org/t/p/original/${data?.movie.poster_path}`}
                            width={320}
                            height={480}
                            alt={data?.movie.title || "Movie Poster"}
                        />
                        <div className="pl-6">
                            <ul className="grid grid-cols-[max-content_1fr] gap-4 text-sm">
                                <div className="font-semibold"> Data de Lançamento: </div>
                                <div> {formatDate(data?.movie.release_date)} </div>
                                <div className="flex font-semibold"> Gêneros: </div>
                                <div className="flex gap-2"> {data?.movie.genres.map(genre =>
                                    <p key={genre.id}> • {genre.name}</p>
                                )}
                                </div>
                                <div className="font-semibold">Tempo de duração: </div>
                                <div> {formatRuntime(data?.movie.runtime)} </div>
                                <div className="font-semibold"> Orçamento: </div>
                                <div> {formatBudget(data?.movie.budget)} </div>
                                <div className="font-semibold">Receita Arrecadada: </div>
                                <div>{formatBudget(data?.movie.revenue)} </div>
                                <div className="flex font-semibold"> Produção: </div>
                                <div className="flex gap-2"> {data?.movie.production_companies.map(company =>
                                    <p key={company.id}> • {company.name}</p>
                                )}
                                </div>
                            </ul>
                        </div>
                    </div>
                </div>
            }
            {
                isLoading &&
                <div className="items-left justify-center shadow-2xl w-full h-[50vh] relative flex flex-col">
                    <Skeleton className="w-full flex flex-col justify-center items-center absolute top-0 left-0 bottom-0 bg-slate-500" />
                    <Skeleton className="w-1/4 h-16 bg-slate-300 items-center mx-10" />
                    <Skeleton className="w-1/2 h-14 bg-slate-300 items-center my-5 mx-10" />
                    <Skeleton className="w-1/3 h-16 bg-slate-300 items-center mx-10" />
                </div>
            }

        </div >
    )
}
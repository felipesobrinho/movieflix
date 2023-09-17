import { formatRuntime } from "@/app/utils/formatRuntime";
import { getReleaseDateYear } from "@/app/utils/getReleaseDateYear";
import useHighlightedMovie, { HighlightedData } from "@/hooks/useHighlightedMovie";
import { Skeleton } from "./ui/skeleton";
import Link from "next/link";

export default function HighlightedMovie({ url, trending_url }: HighlightedData) {
    const { data, isLoading } = useHighlightedMovie({ url, trending_url });
    return (
        <>
            <Link
                href={{
                    pathname: `/details`,
                    query: {
                        id: `${data?.movie.id}`,
                        category: `${data?.movie.number_of_seasons ? "tv" : "movie"}`
                    }
                }}>
                {!isLoading &&
                    <div className="relative shadow-2xl w-full h-[50vh] flex items-center justify-center">
                        <img
                            className="object-cover w-full h-full"
                            src={`https://image.tmdb.org/t/p/original/${data?.images.file_path}`}
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
                                <p className="text-gray-200 max-w-[50%] font-semibold"> {data?.movie.overview} </p>
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
            </Link>
        </>
    )
}
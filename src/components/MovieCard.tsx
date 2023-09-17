'use client'
import { formatReleaseDate } from "@/app/utils/utils";
import Image from "next/image";
import Link from "next/link";
import StarRating from "./StarRating";

export interface CardData {
    id: string,
    title: string,
    overview: string,
    poster_path: string,
    release_date: string,
    category: string,
    vote_average: number,
}

export default function Card({ title, overview, release_date, poster_path, id, category, vote_average }: CardData) {

    return (
        <>
            <Link
                href={{
                    pathname: `/details`,
                    query: {
                        id: `${id}`,
                        category: `${category}`
                    }
                }}>
                <div className="max-w-xs overflow-hidden rounded-lg shadow-2xl bg-slate-900 cursor-pointer hover:scale-105 transition duration-500">
                    <Image
                        className="shadow-xl min-h-[480px]"
                        src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
                        alt={title || "Movie poster"
                        }
                        width={320}
                        height={480}
                    />
                    <div className="px-4 py-4 max-h-32 overflow-y-auto">
                        <h2 className="font-bold">{title}</h2>
                        <p className="text-gray-400 font-medium my-1"> {formatReleaseDate(release_date)} </p>
                        <StarRating vote_average={vote_average} />
                        < p className="text-gray-300"> {overview} </p>
                    </div>
                </div >
            </Link >
        </>
    )
}
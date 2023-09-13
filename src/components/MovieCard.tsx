'use client'
import { formatReleaseDate } from "@/app/utils/formatReleaseDate";
import Image from "next/image";
import Link from "next/link";

export interface CardData {
    id: string,
    title: string,
    overview: string,
    poster_path: string,
    release_date: string,
    category: string,
}

export default function Card({ title, overview, release_date, poster_path, id, category }: CardData) {

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
                <div className="max-w-xs overflow-hidden rounded-lg shadow-2xl bg-slate-900 cursor-pointer">
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
                        <p className="text-gray-300"> {overview} </p>
                    </div>
                </div >
            </Link >
        </>
    )
}
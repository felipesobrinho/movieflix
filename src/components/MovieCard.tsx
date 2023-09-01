import { formatReleaseDate } from "@/app/utils/formatReleaseDate";
import Image from "next/image";

export interface CardData {
    title: string;
    overview: string
    poster_path: string;
    release_date: string;
}


export default function Card({ title, overview, release_date, poster_path }: CardData) {
    return (
        <div className="max-w-xs overflow-hidden rounded-xl shadow-2xl bg-slate-600">
            <Image
                className="shadow-xl min-h-[480px]"
                src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
                alt={title || "Movie poster"}
                width={320}
                height={480}
            />
            <div className="px-4 py-4 max-h-32 overflow-y-auto">
                <h2 className="font-bold text-l text-zinc-950">{title}</h2>
                <p className="text-white my-1"> {formatReleaseDate(release_date)} </p>
                <p className="text-gray-300"> {overview} </p>
            </div>
        </div>
    )
}
import Image from "next/image";

interface Card {
    title: string;
    resume: string,
    poster_path: string;
}


export default function Card({ title, resume, poster_path }: Card) {
    return (
        <div className="max-w-xs rounded-lg overflow-hidden flex flex-col items-center justify-center bg-slate-500 shadow-2xl">
            <Image
                className="min-h-[480px] shadow-lg"
                src={`https://image.tmdb.org/t/p/w400/${poster_path}`}
                alt={title || "Movie poster"}
                width={320}
                height={480}
            />
            <div className="px-6 py-4 max-h-24">
                <div className="font-bold text-l">{title}</div>
                <p className="text-gray-800 text-base">{resume}</p>
            </div>
        </div>
    )
}
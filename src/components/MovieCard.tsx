import Image from "next/image";

export interface CardData {
    title: string;
    resume: string
    poster_path: string;
    release_date: Date;
}


export default function Card({ title, resume, release_date, poster_path }: CardData) {
    const releaseDate = new Date(release_date)
    const month = new Intl.DateTimeFormat('pt-BR', { month: 'long' }).format(releaseDate);
    const formatedReleaseDate = `${releaseDate.getDate() + 1} de ${month} de ${releaseDate.getFullYear()}`.toString();

    return (
        <div className="max-w-xs overflow-hidden rounded-xl shadow-2xl bg-slate-600">
            <Image
                className="shadow-xl min-h-[480px]"
                src={`https://image.tmdb.org/t/p/w400/${poster_path}`}
                alt={title || "Movie poster"}
                width={320}
                height={480}
            />
            <div className="px-4 py-4 max-h-32 overflow-y-auto">
                <div className="font-bold text-l text-zinc-950">{title}</div>
                <p className="text-white my-1"> {formatedReleaseDate} </p>
                <p className="text-gray-300"> {resume} </p>
            </div>
        </div>
    )
}
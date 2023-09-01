'use client'
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SearchInput() {
    const [search, setSearch] = useState("");
    const router = useRouter();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()

        if (!search) return

        router.push(`/search?q=${search}`)
        setSearch("");
    }


    return (
        <form onSubmit={handleSubmit} className="flex flex-col text-center justify-center my-4">
            <label className="relative block">
                <span className="sr-only">Search</span>
                <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 50 50">
                        <path d="M 21 3 C 11.601563 3 4 10.601563 4 20 C 4 29.398438 11.601563 37 21 37 C 24.355469 37 27.460938 36.015625 30.09375 34.34375 L 42.375 46.625 L 46.625 42.375 L 34.5 30.28125 C 36.679688 27.421875 38 23.878906 38 20 C 38 10.601563 30.398438 3 21 3 Z M 21 7 C 28.199219 7 34 12.800781 34 20 C 34 27.199219 28.199219 33 21 33 C 13.800781 33 8 27.199219 8 20 C 8 12.800781 13.800781 7 21 7 Z"></path>
                    </svg>
                </span>
                <input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Buscar por Filme..." name="search" type="text" className=" placeholder:text-slate-500 text-black block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" />
            </label>
        </form>
    )
}
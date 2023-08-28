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
        <form onSubmit={handleSubmit} className="flex flex-col text-center justify-center">
            <input className="text-black p-1 rounded-md max-w-xs" type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Busque por um filme..." />
        </form>
    )
}
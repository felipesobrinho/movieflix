import Link from "next/link";
import SearchInput from "./SearchInput";

export default function Header() {

    return (
        <div className="flex justify-between items-center m-5 w-[1350px] bg-slate-700 rounded-lg shadow-2xl">
            <div className="pl-3 pt-2">
                <Link href="/">
                    <h1 className="text-5xl flex align-center justify-center pb-3"> Movie <p className="text-red-600">Flix </p> </h1>
                </Link>
            </div>
            <div className="pr-5">
                <SearchInput />
            </div>
        </ div >
    )
}
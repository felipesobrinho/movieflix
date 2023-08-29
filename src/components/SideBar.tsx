import Link from "next/link";
import SideBarLinks from "./SideBarLink";

export default function SideBar() {

    return (
        <div className="flex flex-col items-center w-[320px] m-h-full bg-slate-700 shadow-inner">
            <div className="divide-y-2 mt-2">
                <Link href="/">
                    <h1 className="flex text-5xl pb-3"> Movie <p className="text-red-600">Flix </p> </h1>
                </Link>
                <div className="pt-2 font-bold">
                    <h2 className="text-2xl py-2 text-gray-400 text-left "> Buscar </h2>
                    {SideBarLinks.map(link => (
                        <div key={link.id}>
                            <Link href={link.href}>
                                <p className="flex items-center pb-3"> <link.icon className="mr-3 w-5 h-5" /> {link.title} </p>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </ div >
    )
}
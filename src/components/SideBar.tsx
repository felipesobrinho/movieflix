import Link from "next/link";
import SideBarLinks from "./SideBarLink";

export default function SideBar() {

    return (
        <div className="flex flex-col w-20 items-center justify-center m-h-full bg-slate-900 shadow-inner">
            <div>
                {SideBarLinks.map(link => (
                    <div key={link.id} className="py-10 px-3">
                        <Link href={link.href}>
                            <p className="flex items-center pb-3"> <link.icon className="w-10 h-10" /> </p>
                        </Link>
                    </div>
                ))}
            </div>
        </ div >
    )
}
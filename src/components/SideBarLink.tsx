import { IconType } from "react-icons";

import { BiSolidMoviePlay, BiSolidTv, BiSolidHome } from "react-icons/bi"
import { MdLocalMovies } from 'react-icons/md'

interface SideBarLinkData {
    id: string,
    title: string
    href: string,
    icon: IconType,
}

const SideBarLinks: SideBarLinkData[] = [
    {
        id: 'icon-1',
        title: "Home",
        href: "/",
        icon: BiSolidHome,
    },
    {
        id: 'icon-2',
        title: "Filmes",
        href: "/movies",
        icon: MdLocalMovies,
    },
    {
        id: 'icon-3',
        title: "Series",
        href: "/series",
        icon: BiSolidMoviePlay,
    },
    {
        id: 'icon-4',
        title: "TV Show",
        href: "/tv-show",
        icon: BiSolidTv,
    },
]

export default SideBarLinks;

import { IconType } from "react-icons";

import { BiSolidMoviePlay, BiSolidTv } from "react-icons/bi"
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
        title: "Filmes",
        href: "/filmes",
        icon: MdLocalMovies,
    },
    {
        id: 'icon-2',
        title: "Series",
        href: "/series",
        icon: BiSolidMoviePlay,
    },
    {
        id: 'icon-3',
        title: "TV Show",
        href: "/tv-show",
        icon: BiSolidTv,
    },
]

export default SideBarLinks;

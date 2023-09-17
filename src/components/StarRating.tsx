import { Rating } from "@mui/material";

export default function StarRating({ vote_average }: { vote_average: any }) {
    return (
        <div className="flex items-center text-sm">
            <Rating name="read-only" value={(vote_average / 5) * 2.5} readOnly />
            <p className="text-gray-300 pl-1">{vote_average?.toFixed(1)}</p>
        </div>
    )
}
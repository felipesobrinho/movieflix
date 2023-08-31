import { Skeleton } from "./ui/skeleton";

export default function Loading() {

    return (
        <div className="grid grid-cols-responsive gap-6 items-center justify-center overflow-hidden">
            {Array.from({ length: 20 }, (_, i) => i + 1).map((id) => (
                <div className="max-w-xs rounded-xl shadow-2xl bg-slate-300 ">
                    <Skeleton className="min-h-[480px] bg-slate-400 mb-2" />
                    <div className="px-4 py-4 max-h-32">
                        <Skeleton className="h-4 mb-2 bg-slate-400" />
                        <Skeleton className="h-5 mb-2 bg-slate-400" />
                    </div>
                </div>
            ))}
        </div>
    )
}
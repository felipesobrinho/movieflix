import SearchInput from "./SearchInput";

export default function Header() {
    return (
        <div className="flex justify-center items-center w-full min-h-[60px] bg-slate-600 shadow-2xl px-6">
            <SearchInput />
        </div>
    )
}
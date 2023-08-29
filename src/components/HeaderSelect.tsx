

export default function HeaderSelect() {

    return (
        <div className="flex">
            <p className="pr-2">Filtrar por:</p>
            <select className="rounded-lg text-black">
                <option value="nameFilter"> Por nome </option>
                <option value="nameFilter"> Por </option>
                <option value="nameFilter"> Por </option>
            </select>
        </div>
    )
}
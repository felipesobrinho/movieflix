export function formatReleaseDate(release_date: any) {
    const releaseDate = new Date(release_date);
    const options = { year: 'numeric', month: 'long', day: 'numeric' } as const;
    const formatedReleaseDate = releaseDate.toLocaleDateString('pt-BR', options);
    return formatedReleaseDate;
}

export function formatDate(release_date: any) {
    const releaseDate = new Date(release_date);
    const options = { year: 'numeric', month: 'numeric', day: 'numeric' } as const;
    const formatedReleaseDate = releaseDate.toLocaleDateString('pt-BR', options);
    return formatedReleaseDate;
}

export function getReleaseDateYear(release_date: any) {
    const releaseDate = new Date(release_date);
    const year = releaseDate.getFullYear();
    return year;
}

export function formatRuntime(runtime: number) {
    const hours = Math.floor(runtime / 60);
    const minutes = runtime % 60;
    return `${hours}h ${minutes}min`;
}

export function formatBudget(budget: number | undefined) {
    return budget?.toLocaleString('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 2 });
}
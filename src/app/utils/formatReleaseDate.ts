export function formatReleaseDate(release_date: any) {
    const releaseDate = new Date(release_date);
    const options = { year: 'numeric', month: 'long', day: 'numeric' } as const;
    const formatedReleaseDate = releaseDate.toLocaleDateString('pt-BR', options);
    return formatedReleaseDate;
}
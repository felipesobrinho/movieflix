export function getReleaseDateYear(release_date: any) {
    const releaseDate = new Date(release_date);
    const year = releaseDate.getFullYear();
    return year;
}
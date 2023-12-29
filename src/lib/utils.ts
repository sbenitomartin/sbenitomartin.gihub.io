export function stringToDate(dateString: string) {
    var year: number = Number(dateString.substring(0, 4));
    var month: number = Number(dateString.substring(4, 6));
    var day: number = Number(dateString.substring(6, 8));

    var date = new Date(year, month - 1, day);

    return date;
}
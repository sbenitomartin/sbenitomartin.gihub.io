export function stringToDate(dateString: string) {
    var year: number = Number(dateString.substring(0, 4));
    var month: number = Number(dateString.substring(4, 6));
    var day: number = Number(dateString.substring(6, 8));

    var date = new Date(year, month - 1, day);

    return date;
}

export function isValidYear(year: string) {
    let _year = parseInt(year);
    var text = /^[0-9]+$/;
    if (_year != 0) {
        if ((year != "") && (!text.test(year))) {
            return false;
        }

        if (year.length != 4) {
            return false;
        }
        var current_year=new Date().getFullYear();
        if((_year < 1920) || (_year > current_year))
            {
            return false;
            }
        return true;
    }
}

export function isValidMonth(month: string) {
    const months = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
    return months.includes(month);
}
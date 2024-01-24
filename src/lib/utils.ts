export function stringToDate(dateString: string) {
    let year: number = Number(dateString.substring(0, 4));
    let month: number = Number(dateString.substring(4, 6));
    let day: number = Number(dateString.substring(6, 8));

    let date = new Date(year, month - 1, day);

    return date;
}

export function isValidYear(year: string) {
    let _year = parseInt(year);
    let text = /^[0-9]+$/;
    if (_year != 0) {
        if ((year != "") && (!text.test(year))) {
            return false;
        }

        if (year.length != 4) {
            return false;
        }
        
        let current_year=new Date().getFullYear();
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
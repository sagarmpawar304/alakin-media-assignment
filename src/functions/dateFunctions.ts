export const getMonthName = (month: number): string => {
    let date = '';
    switch (month) {
        case 1:
            date = 'Jan';
            break;
        case 2:
            date = 'Feb';
            break;
        case 3:
            date = 'Mar';
            break;
        case 4:
            date = 'Apr';
            break;
        case 5:
            date = 'May';
            break;
        case 6:
            date = 'Jun';
            break;
        case 7:
            date = 'jul';
            break;
        case 8:
            date = 'Aug';
            break;
        case 9:
            date = 'Sep';
            break;
        case 10:
            date = 'Oct';
            break;
        case 11:
            date = 'Nov';
            break;
        case 12:
            date = 'Dec';
            break;
        default:
            date = 'Jan';
    }
    return date;
};

export const getMonthYearFormatedDate = (date: string): string => {
    let dateString: string = '';
    const newDate = new Date(date);
    const newDateDay = newDate.getDate();
    const newDateMonth = newDate.getMonth();
    const newDateYear = newDate.getFullYear();

    const currentDate = new Date();
    const currentDateDay = currentDate.getDate();
    const currentDateMonth = currentDate.getMonth();
    const currentDateYear = currentDate.getFullYear();

    if (currentDateYear === newDateYear) {
        if (currentDateMonth === newDateMonth) {
            if (currentDateDay === newDateDay) {
                dateString = 'today';
            } else if (currentDateDay - 1 === newDateDay) {
                dateString = 'yesterday';
            } else {
                dateString = `${getMonthName(newDateMonth)} ${newDateDay}`;
            }
        } else {
            dateString = `${getMonthName(newDateMonth)} ${newDateDay}`;
        }
    } else {
        dateString = `${getMonthName(newDateMonth)} ${newDateDay}, ${newDateYear}`;
    }

    return dateString;
};

export const formatTimeStampToDateString = (timeStamp: number) => {
    const date = new Date(timeStamp);
    const dateTimeFormat = new Intl.DateTimeFormat('en', { year: 'numeric', month: '2-digit', day: '2-digit', timeZone: 'Asia/Kolkata' });
    const [{ value: month }, , { value: day }, , { value: year }] = dateTimeFormat.formatToParts(date);
    return `${year}-${month}-${day}`;
};

export const formatTimeStampToTimeString = (timeStamp: number) => {
    const date = new Date(timeStamp);
    const dateTimeFormat = new Intl.DateTimeFormat('en', { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false, timeZone: 'Asia/Kolkata' });
    let [{ value: hr }, , { value: min }, , { value: sec }] = dateTimeFormat.formatToParts(date);
    if (+min > 0 && +hr === 24) {
        hr = "00";
    }
    return `${hr}:${min}:${sec}`
};

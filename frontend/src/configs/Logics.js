const convertUTCtoIST = (utcTime) => {
    const istTime = new Date(utcTime);
    const year = istTime.getFullYear();
    const month = istTime.getMonth() + 1; // Month is zero-based
    const day = istTime.getDate();
    const hours = istTime.getHours();
    const minutes = istTime.getMinutes();
    const seconds = istTime.getSeconds();
    let formattedHours = hours % 12 || 12; // Convert 0 to 12
    const period = hours < 12 ? 'AM' : 'PM';
    const istDateString = `${year}-${month < 10 ? '0' : ''}${month}-${day < 10 ? '0' : ''}${day}`;
    const istTimeString = `${formattedHours}:${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds} ${period}`;
    return `${istDateString} ${istTimeString}`;
}

export default convertUTCtoIST;
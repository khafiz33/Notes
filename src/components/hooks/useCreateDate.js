const useCreateDate = () => {
	const now = new Date();
	const month = now.getMonth();
	var monthName;
	if(month === 0) {
		monthName = "Jan"
	} else if(month === 1) {
		monthName = "Feb"
	}else if(month === 2) {
		monthName = "Mar"
	}else if(month === 3) {
		monthName = "Apr"
	}else if(month === 4) {
		monthName = "May"
	}else if(month === 5) {
		monthName = "Jun"
	}else if(month === 6) {
		monthName = "Jul"
	}else if(month === 7) {
		monthName = "Aug"
	}else if(month === 8) {
		monthName = "Sep"
	}else if(month === 9) {
		monthName = "Oct"
	}else if(month === 10) {
		monthName = "Nov"
	}else if(month === 11) {
		monthName = "Dec"
	}
	const date = `${monthName} ${now.getDate()}, ${now.getFullYear()} [${
		now.getHours() < 10 ? '0' + now.getHours() : now.getHours()
	}:${now.getMinutes() < 10 ? '0' + now.getMinutes() : now.getMinutes()}]`;
	return date;
};
export default useCreateDate;

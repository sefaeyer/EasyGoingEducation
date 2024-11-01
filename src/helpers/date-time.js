import moment from "moment";

export const formatDatell = (date) => {
	return moment(date).format("ll");
};

export const formatDateMY = (date) => {
	return moment(date).format("MMM YYYY");
};

export const formatTimeLT = (date) => {
	return moment(date, "HH:mm:ss").format("LT");
};

export const isLater = (timeBefore, timeAfter) => {
	const tb = moment(timeBefore, "HH:mm");
	const ta = moment(timeAfter, "HH:mm");
	return ta.isAfter(tb);
};
export const hoursAndMinutesToSeconds = (hours, minutes) => {
	const hoursToSeconds = hours * 3600;
	const minutesToSeconds = minutes * 60;
	return hoursToSeconds + minutesToSeconds;
};

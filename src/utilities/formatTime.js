export const formatTime = (remainingTime) => {
	const minutes = `0${Math.floor(remainingTime / 60)}`.slice(-2);
	const seconds = `0${remainingTime % 60}`.slice(-2);
	return `${minutes}:${seconds}`;
};

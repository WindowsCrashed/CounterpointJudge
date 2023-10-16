const calculateHarmonicInterval = (note1: number, note2: number): number => {
	if (note1 <= 0 || note2 <= 0) return -1

	let interval = Math.abs(note1 - note2)

	while (interval > 12) interval -= 12

	return interval
}

export default calculateHarmonicInterval

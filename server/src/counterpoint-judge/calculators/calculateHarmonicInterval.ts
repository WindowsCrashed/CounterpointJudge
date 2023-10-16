const calculateHarmonicInterval = (note1: number, note2: number): number => {
	let interval = Math.abs(note1 - note2)

	while (interval > 12) interval -= 12

	return interval
}

export default calculateHarmonicInterval

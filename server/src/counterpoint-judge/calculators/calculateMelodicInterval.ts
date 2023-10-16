const calculateMelodicInterval = (note1: number, note2: number): number => {
	const interval = Math.abs(note1 - note2)

	if (interval > 12) return 13

	return interval
}

export default calculateMelodicInterval

const calculateMelodicInterval = (note1: number, note2: number): number => {
	if (note1 <= 0 || note2 <= 0) return -1

	const interval = Math.abs(note1 - note2)

	if (interval > 12) return 13

	return interval
}

export default calculateMelodicInterval

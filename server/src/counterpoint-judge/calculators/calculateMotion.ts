const calculateMotion = (previousPair: number[], currentPair: number[]): number => {
	const lowerDiff = currentPair[0] - previousPair[0]
	const upperDiff = currentPair[1] - previousPair[1]

	if ((lowerDiff > 0 && upperDiff > 0) || (lowerDiff < 0 && upperDiff < 0)) {
		return 1
	}

	if ((lowerDiff > 0 && upperDiff < 0) || (lowerDiff < 0 && upperDiff > 0)) {
		return -1
	}

	if ((lowerDiff !== 0 && upperDiff === 0) || (lowerDiff === 0 && upperDiff !== 0)) {
		return 0
	}

	return -2
}

export default calculateMotion

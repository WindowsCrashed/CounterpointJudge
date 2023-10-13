const getColorByWeight = (weight: number): string => {
	if (weight === 0.5) {
		return 'text-yellow-500'
	} else if (weight === 1.0) {
		return 'text-orange-500'
	}
	return 'text-red-600'
}

export default getColorByWeight

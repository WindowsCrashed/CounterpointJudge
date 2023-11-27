const setClef = (voiceType: string): string => {
	const type = voiceType.toLowerCase()

	if (type === 'soprano' || type === 'alto') {
		return 'treble'
	} else if (type === 'tenor') {
		return 'tenor'
	} else {
		return 'bass'
	}
}

export default setClef

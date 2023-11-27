const formatNoteLabel = (label: string): string => {
	const note = label.substring(0, label.length - 1).toLowerCase()
	const number = label[label.length - 1]
	const formatedLabel = `${note}/${number}`
	return formatedLabel
}

export default formatNoteLabel

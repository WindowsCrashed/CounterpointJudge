// For generating the array of notes from db (no function in the algorithm)
const genNotes = () => {
	const notes = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B']

	let counter = 12

	for (let i = 0; i < 9; i++) {
		for (const note of notes) {
			console.log(`{ label:'${note}${i}', midi: ${counter} },`)
			counter++
		}
	}
}

export default genNotes

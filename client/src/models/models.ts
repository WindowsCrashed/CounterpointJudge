export type MidiData = {
	trackCount: number
	tracks: number[][]
	mode?: string
}

export type FeedbackData = {
	score: number
	mistakeCount: number
	mistakes: string[]
	affectedMeasures: number[]
	notes: string[][]
}

export type MidiData = {
	trackCount: number
	tracks: number[][]
	mode?: string
}

export type Mistake = {
	header: string
	measures: number[]
	notes: (string | string[])[]
	weight: number
}

export type FeedbackData = {
	score: number
	mistakeCount: number
	mistakes: Mistake[]
	affectedMeasures: number[]
	notes: string[][]
}

export type TrackVoices = {
	firstTrack: string
	secondTrack: string
}

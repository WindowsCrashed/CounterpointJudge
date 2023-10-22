export type MidiData = {
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
	mistakes: Mistake[]
	notes: string[][]
}

export type TrackVoices = {
	firstTrack: string
	secondTrack: string
}

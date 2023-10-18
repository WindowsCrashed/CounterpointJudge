export type MidiData = {
	trackCount: number
	tracks: number[][]
	mode?: string
}

export type MistakeData = {
	header: string
	measures: number[]
	notes: (string | string[])[]
	weight: number
}

export type FeedbackData = {
	score: number
	mistakes: MistakeData[]
	notes: string[][]
}

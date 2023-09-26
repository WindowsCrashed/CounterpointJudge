export type Note = {
	label: string
	midi: number
}

export type Enharmonic = {
	sharp: string
	flat: string
}

export type Interval = {
	label: string
	steps: number
}

export type Motion = {
	label: string
	code: number
}

export type MidiData = {
	trackCount: number
	tracks: number[][]
}

export type Mistake = {
	header: string
	measures: number[]
	notes: number[] | number[][]
	weight: number
}

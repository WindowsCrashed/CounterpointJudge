export type Note = {
	label: string
	pitch: number
}

export type Enharmonic = {
	sharp: string
	flat: string
}

export type Mode = {
	label: string
	triad: string[]
}

export type Mistake = {
	header: string
	measures: number[]
	notes: number[] | number[][]
	weight: number
}

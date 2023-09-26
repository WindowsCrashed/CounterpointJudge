import { Note } from '@tonejs/midi/dist/Note'

export type MidiData = {
	trackCount: number
	tracks: Note[][]
}

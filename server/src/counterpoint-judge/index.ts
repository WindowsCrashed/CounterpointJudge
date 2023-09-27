import { motions } from './data/db'
import { getNoteMidi } from './getters'

const testNotes = [
	['C4', 'G4'],
	['E4', 'G4'],
	['A3', 'C4'],
	['E5', 'F5'],
	['D3', 'F#3'],
	['Eb4', 'Bb4'],
	['C#3', 'C4'],
	['F4', 'Eb5'],
	['B4', 'D#6'],
	['D5', 'A5'],
	['G#4', 'B4'],
	['Bb3', 'C4'],
	['A2', 'F#3'],
	['B4', 'C5'],
	['Eb2', 'C3'],
	['G4', 'C5'],
	['C4', 'G#4'],
	['F3', 'B3']
]

const testNotes2 = [
	['B4', 'C5'],
	['Eb2', 'C3'],
	['G4', 'D5'],
	['F4', 'C5'],
	['F3', 'B3']
]

const testNotes3 = [
	['B4', 'C5'],
	['Eb2', 'D#3'],
	['G4', 'G5'],
	['F4', 'C5'],
	['F3', 'B3']
]

const testNotes4 = [
	['B4', 'C5'],
	['Eb2', 'D#3'],
	['G4', 'G5'],
	['F4', 'F4'],
	['G4', 'G4']
]

const testNotesFux1 = [
	['D4', 'A4'],
	['F4', 'A4'],
	['E4', 'G4'],
	['D4', 'A4'],
	['G4', 'B4'],
	['F4', 'C5'],
	['A4', 'C5'],
	['G4', 'B4'],
	['F4', 'D5'],
	['E4', 'C#5'],
	['D4', 'D5']
]

const testNotesFux2 = [
	['G3', 'D4'],
	['D4', 'F4'],
	['A3', 'E4'],
	['F3', 'D4'],
	['E3', 'G4'],
	['D3', 'F4'],
	['F3', 'A4'],
	['C4', 'G4'],
	['D4', 'F4'],
	['C#4', 'E4'],
	['D4', 'D4']
]

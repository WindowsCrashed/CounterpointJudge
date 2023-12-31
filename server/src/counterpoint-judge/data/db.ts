import { Enharmonic, Mode, Note } from '../models/models'

export const notes: Note[] = [
	{ label: 'A0', pitch: 21 },
	{ label: 'Bb0', pitch: 22 },
	{ label: 'B0', pitch: 23 },
	{ label: 'C1', pitch: 24 },
	{ label: 'C#1', pitch: 25 },
	{ label: 'D1', pitch: 26 },
	{ label: 'D#1', pitch: 27 },
	{ label: 'E1', pitch: 28 },
	{ label: 'F1', pitch: 29 },
	{ label: 'F#1', pitch: 30 },
	{ label: 'G1', pitch: 31 },
	{ label: 'G#1', pitch: 32 },
	{ label: 'A1', pitch: 33 },
	{ label: 'Bb1', pitch: 34 },
	{ label: 'B1', pitch: 35 },
	{ label: 'C2', pitch: 36 },
	{ label: 'C#2', pitch: 37 },
	{ label: 'D2', pitch: 38 },
	{ label: 'D#2', pitch: 39 },
	{ label: 'E2', pitch: 40 },
	{ label: 'F2', pitch: 41 },
	{ label: 'F#2', pitch: 42 },
	{ label: 'G2', pitch: 43 },
	{ label: 'G#2', pitch: 44 },
	{ label: 'A2', pitch: 45 },
	{ label: 'Bb2', pitch: 46 },
	{ label: 'B2', pitch: 47 },
	{ label: 'C3', pitch: 48 },
	{ label: 'C#3', pitch: 49 },
	{ label: 'D3', pitch: 50 },
	{ label: 'D#3', pitch: 51 },
	{ label: 'E3', pitch: 52 },
	{ label: 'F3', pitch: 53 },
	{ label: 'F#3', pitch: 54 },
	{ label: 'G3', pitch: 55 },
	{ label: 'G#3', pitch: 56 },
	{ label: 'A3', pitch: 57 },
	{ label: 'Bb3', pitch: 58 },
	{ label: 'B3', pitch: 59 },
	{ label: 'C4', pitch: 60 },
	{ label: 'C#4', pitch: 61 },
	{ label: 'D4', pitch: 62 },
	{ label: 'D#4', pitch: 63 },
	{ label: 'E4', pitch: 64 },
	{ label: 'F4', pitch: 65 },
	{ label: 'F#4', pitch: 66 },
	{ label: 'G4', pitch: 67 },
	{ label: 'G#4', pitch: 68 },
	{ label: 'A4', pitch: 69 },
	{ label: 'Bb4', pitch: 70 },
	{ label: 'B4', pitch: 71 },
	{ label: 'C5', pitch: 72 },
	{ label: 'C#5', pitch: 73 },
	{ label: 'D5', pitch: 74 },
	{ label: 'D#5', pitch: 75 },
	{ label: 'E5', pitch: 76 },
	{ label: 'F5', pitch: 77 },
	{ label: 'F#5', pitch: 78 },
	{ label: 'G5', pitch: 79 },
	{ label: 'G#5', pitch: 80 },
	{ label: 'A5', pitch: 81 },
	{ label: 'Bb5', pitch: 82 },
	{ label: 'B5', pitch: 83 },
	{ label: 'C6', pitch: 84 },
	{ label: 'C#6', pitch: 85 },
	{ label: 'D6', pitch: 86 },
	{ label: 'D#6', pitch: 87 },
	{ label: 'E6', pitch: 88 },
	{ label: 'F6', pitch: 89 },
	{ label: 'F#6', pitch: 90 },
	{ label: 'G6', pitch: 91 },
	{ label: 'G#6', pitch: 92 },
	{ label: 'A6', pitch: 93 },
	{ label: 'Bb6', pitch: 94 },
	{ label: 'B6', pitch: 95 },
	{ label: 'C7', pitch: 96 },
	{ label: 'C#7', pitch: 97 },
	{ label: 'D7', pitch: 98 },
	{ label: 'D#7', pitch: 99 },
	{ label: 'E7', pitch: 100 },
	{ label: 'F7', pitch: 101 },
	{ label: 'F#7', pitch: 102 },
	{ label: 'G7', pitch: 103 },
	{ label: 'G#7', pitch: 104 },
	{ label: 'A7', pitch: 105 },
	{ label: 'Bb7', pitch: 106 },
	{ label: 'B7', pitch: 107 },
	{ label: 'C8', pitch: 108 }
]

export const enharmonics: Enharmonic[] = [
	{ sharp: 'C#', flat: 'Db' },
	{ sharp: 'D#', flat: 'Eb' },
	{ sharp: 'F#', flat: 'Gb' },
	{ sharp: 'G#', flat: 'Ab' },
	{ sharp: 'A#', flat: 'Bb' }
]

export const intervals: { label: string; steps: number }[] = [
	{ label: 'Unison', steps: 0 },
	{ label: 'Minor Second', steps: 1 },
	{ label: 'Major Second', steps: 2 },
	{ label: 'Minor Third', steps: 3 },
	{ label: 'Major Third', steps: 4 },
	{ label: 'Perfect Fourth', steps: 5 },
	{ label: 'Augmented Fourth', steps: 6 },
	{ label: 'Perfect Fifth', steps: 7 },
	{ label: 'Minor Sixth', steps: 8 },
	{ label: 'Major Sixth', steps: 9 },
	{ label: 'Minor Seventh', steps: 10 },
	{ label: 'Major Seventh', steps: 11 },
	{ label: 'Octave', steps: 12 }
]

export const motions: { label: string; code: number }[] = [
	{ label: 'Direct', code: 1 },
	{ label: 'Oblique', code: 0 },
	{ label: 'Contrary', code: -1 },
	{ label: 'No Motion', code: -2 }
]

export const modes: Mode[] = [
	{ label: 'D', triad: ['D', 'F', 'A'] },
	{ label: 'E', triad: ['E', 'G', 'B'] },
	{ label: 'F', triad: ['F', 'A', 'C'] },
	{ label: 'G', triad: ['G', 'B', 'D'] },
	{ label: 'A', triad: ['A', 'C', 'E'] },
	{ label: 'C', triad: ['C', 'E', 'G'] }
]

import { notes } from '../data/db'

const getNoteLabel = (pitch: number): string => notes.find(n => n.pitch === pitch)!.label

export default getNoteLabel

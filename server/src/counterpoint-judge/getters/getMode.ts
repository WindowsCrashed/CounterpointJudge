import { modes } from '../data/db'
import { Mode } from '../models/models'

const getMode = (label: string): Mode => {
	const mode = modes.find(m => m.label === label)
	if (!mode) return { label: 'INVALID MODE', code: -1, triad: ['NONE', 'NONE', 'NONE'] }
	return mode
}

export default getMode

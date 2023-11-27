import { modes } from '../data/db'
import { Mode } from '../models/models'

const getMode = (label: string): Mode => modes.find(m => m.label === label)!

export default getMode

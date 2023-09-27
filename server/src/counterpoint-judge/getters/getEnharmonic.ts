import { enharmonics } from '../data/db'

const getEnharmonic = (flat: string): string => {
	if (flat.length > 3 || flat.length <= 0) return 'INVALID NOTE'
	const [noteLabel, noteNumber] = flat.split(/(?!b)/g)
	const enharmonic = enharmonics.find(e => e.flat === noteLabel)?.sharp
	if (!enharmonic) return 'INVALID NOTE'
	return `${enharmonic}${noteNumber}`
}

export default getEnharmonic

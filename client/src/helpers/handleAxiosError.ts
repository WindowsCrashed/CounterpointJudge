import { AxiosError } from 'axios'

const handleAxiosError = (error: AxiosError) => {
	if (error.code === AxiosError.ERR_NETWORK) {
		alert('ERROR: Server unavailable. Try again later.')
	} else if (error.code === AxiosError.ERR_BAD_REQUEST) {
		alert(`ERROR: ${error.response?.data}`)
	}
}

export default handleAxiosError

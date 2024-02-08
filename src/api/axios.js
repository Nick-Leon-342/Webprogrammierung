

import axios from 'axios'
import { REACT_APP_BACKEND_URL } from '../logic/utils-env'

export default axios.create({
	baseURL: REACT_APP_BACKEND_URL
})

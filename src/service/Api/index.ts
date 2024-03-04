import axios, {AxiosRequestConfig, AxiosResponse} from 'axios'

export interface ApiResponse<T> {
	data: T
}

const axiosConfig: AxiosRequestConfig = {
	baseURL: 'https://jsonplaceholder.typicode.com',
	timeout: 5000,
	headers: {
		'Content-Type': 'application/json'
	}
}

export const makeRequest = async <T>(
	method: 'GET' | 'POST',
	endpoint: string,
	data?: T
): Promise<ApiResponse<T>> => {
	try {
		const response: AxiosResponse<T> = await axios.request({
			...axiosConfig,
			url: endpoint,
			method,
			data
		})

		return {data: response.data}
	} catch (error) {
		if (error instanceof Error) {
			throw error.message
		} else {
			throw new Error('Request failed')
		}
	}
}

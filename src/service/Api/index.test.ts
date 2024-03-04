import axios from 'axios'
import {makeRequest, ApiResponse} from './index'

jest.mock('axios')
const mockedAxios = axios as jest.Mocked<typeof axios>

describe('makeRequest function', () => {
	beforeAll(() => {
		jest.clearAllMocks()
	})

	test('makes a GET request with correct endpoint and returns data', async () => {
		const responseData = {message: 'Mock response'}
		const expectedResponse: ApiResponse<typeof responseData> = {
			data: responseData
		}
		const endpoint = '/test'

		// Mock successful response
		const axiosResponse = {
			data: responseData,
			status: 200,
			statusText: 'OK',
			headers: {}
		}
		mockedAxios.request.mockResolvedValueOnce(axiosResponse)

		const response = await makeRequest('GET', endpoint)

		expect(mockedAxios.request).toHaveBeenCalledWith({
			baseURL: 'https://jsonplaceholder.typicode.com',
			timeout: 5000,
			headers: {'Content-Type': 'application/json'}, // Ensure headers are provided
			url: endpoint,
			method: 'GET',
			data: undefined
		})
		expect(response).toEqual(expectedResponse)
	})

	test('throws an error if request fails', async () => {
		const errorMessage = 'Request failed'
		const endpoint = '/test'

		// Mock failed response
		const axiosError = {
			name: 'Error',
			message: errorMessage,
			isAxiosError: true,
			config: {},
			response: undefined,
			request: {}
		}
		mockedAxios.request.mockRejectedValueOnce(axiosError)

		await expect(makeRequest('GET', endpoint)).rejects.toThrow(errorMessage)
	})
})

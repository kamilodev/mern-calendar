const baseUrl = process.env.REACT_APP_API_URL

const fetchWithToken = (endpoint, data, method = 'GET') => {
	const url = `${baseUrl}/${endpoint}` // localhost:4000/api/auth
	const token = localStorage.getItem('token') || ''

	if (method === 'GET') {
		return fetch(url, {
			method,
			headers: {
				'x-token': token
			}
		})
	} else {
		return fetch(url, {
			method,
			headers: {
				'Content-Type': 'application/json',
				'x-token': token
			},
			body: JSON.stringify(data),
		})
	}
}

export { fetchWithToken }
import { useState, useEffect } from 'react'

const useFetch = ({ url, options }) => {
	const [loading, setLoading] = useState(true)
	const [data, setData] = useState(null)
	const [error, setError] = useState(null)

	useEffect(() => {
		(async () => {
			try {
				const response = await fetch(url, options)
				const json = await response.json()
				setData(json.data)
			} catch (error) {
				setError(error)
			} finally {
				setLoading(false)
			}
		})()
	}, [])

	return { loading, data, error }
}

export default useFetch
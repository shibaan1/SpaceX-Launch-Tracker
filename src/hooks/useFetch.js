import { useEffect, useState } from "react"

const useFetch = (url) => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    useEffect(() => {
        let cancelled = false

        const fetchData = async () => {
            setError(null)
            setLoading(true)

            try {
                const response = await fetch(url)
                if (!response.ok) throw new Error('unable to fetch, API error')
                const fetchedData = await response.json()
                if (!cancelled) setData(fetchedData)
            } catch (err) {
                if (!cancelled) setError(err.message)
            } finally {
                setLoading(false)
            }

        }

        fetchData()

        return () => { cancelled = true }

    }, [url])


    return { data, loading, error }
}

export default useFetch
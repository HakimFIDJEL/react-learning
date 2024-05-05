import {useState, useEffect} from 'react'

export function useFetch(url, options = {})
{
    const [loading, setLoading] = useState(true)
    const [data, setData] = useState(null)
    const [errors, setErrors] = useState(null)

    useEffect(() => {
        fetch(url, {
            ...options,
            headers: {
                'Accept': 'application/json; charst=UTF-8',
                ...options.headers
            }
        })
        .then(res => res.json())
        .then(data => {
            setData(data)
            setLoading(false)
        })
        .catch(errors => {
            setErrors(errors)
            setLoading(false)
        }).finally(() => {
            setLoading(false)
        })
    }, [])

    return {loading, data, errors}
}
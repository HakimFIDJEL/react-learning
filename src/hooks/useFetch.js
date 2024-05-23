import {useState, useEffect} from 'react'
import {useRefSync} from '../hooks/useRefSync'

const emptyOptions = {}

export function useFetch(url, options = emptyOptions)
{
    const [loading, setLoading] = useState(true)
    const [data, setData] = useState(null)
    const [errors, setErrors] = useState(null)
    const optionsRef = useRefSync(options)

    useEffect(() => {
        fetch(url, {
            ...optionsRef.current,
            headers: {
                'Accept': 'application/json; charst=UTF-8',
                ...optionsRef.current?.headers
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
    }, [url])

    return {loading, data, errors, setData}
}
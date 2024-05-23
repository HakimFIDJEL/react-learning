import { react, useEffect } from 'react'
import { useState } from 'react'


export function useHashNavigation()
{
    const [hash, setHash] = useState(location.hash)

    useEffect(() => {

        const handleHashChange = () => {
            setHash(location.hash)
        }

        window.addEventListener('hashchange', handleHashChange);

        return () => {
            window.removeEventListener('hashchange', handleHashChange)
        }
    }, [])


    return { 
        page: hash.split(':')[0].replace('#', '') || 'home',
        param : hash.split(':')[1] || null
    }
}
import { useEffect } from 'react';
import { useRef } from 'react';

export function useDocumentTitle(title)
{
    const titleRef = useRef(document.title)

    useEffect(() => {
        return () => {
            document.title = titleRef
        }
    }, [])

    useEffect(() => {

        console.log(title);
        if(!title)
        {
            document.title = titleRef.current
        }
        else 
        {
            document.title = title
        }

    }, [title])
}
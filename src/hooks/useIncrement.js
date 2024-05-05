import { useState } from 'react'

export function useIncrement({base = 0, max = Infinity, min = -Infinity}){
    const [state, setState] = useState(base)

    const increment = () => {
        if(state < max) setState(state + 1)
    }
    const decrement = () => {
        if(state > min) setState(state - 1)
    }

    return [state, increment, decrement]
}
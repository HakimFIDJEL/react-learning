import { useEffect } from "react"
import { useRef } from "react"
import { createPortal } from "react-dom"

export function Modal({children, onClose})
{
    const dialogRef = useRef(null)


    useEffect(() => {
        dialogRef.current.showModal()
    }, []);

    const handleClose = (e) => {
        e.preventDefault();
        onClose?.();
    }

    return createPortal(<dialog 
                ref={dialogRef} 
                onCancel={handleClose} 
                onClose={handleClose}
                style={{width: 'calc(100vw - 2rem)', maxWidth: '600px'}}
            >
        {children}
    </dialog>, document.body)
}
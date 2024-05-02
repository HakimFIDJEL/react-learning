import { useId } from "react"

export function Input({placeholder, value, onChange, label, type="text", inputRef, labelRef, wrapperRef}) {
    
    const id = useId()  

    return <div ref={wrapperRef}>

        <label 
            ref={labelRef} 
            htmlFor={id} 
            className="form-label">
                {label}
        </label>

        <input  
            type={type}
            className="form-control"
            value={value}
            placeholder={placeholder}
            onChange={(e) => onChange(e.target.value)}
            id={id}  
            ref={inputRef}
        />

    </div>
}

Input.displayName = 'Input'
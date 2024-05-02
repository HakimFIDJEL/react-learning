import { useState } from "react"
import { useEffect } from "react"
import { useId } from "react"
import { useMemo } from "react"
import { useRef } from "react"
import { Input } from "./components/forms/Input"

/* ======== Le hook useRef ======== */


function App() {

  const prefixRef = useRef(null)
  const [prefix, setPrefix] = useState('')
  prefixRef.current = prefix

  useEffect(() => {
    
    // const timer = setInterval(() => {
    //   console.log(prefixRef.current)
    // }, 1000);

    // return () => clearInterval(timer)

  }, []);
  
  return <div className="container">
    <Input 
      label="Prefix"
      value={prefix}
      onChange={setPrefix}
      inputRef={prefixRef}
    />

    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Accusantium ad dolor ea 
    eos error esse fuga illo iste, labore magni nam nostrum, nulla pariatur placeat 
    praesentium quaerat tenetur veritatis vero ?
    
  </div>
}




export default App

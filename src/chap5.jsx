import { useState } from "react"

/* ======== LES FORMULAIRES ======== */

function App() {

  // const [firstname, setFirstname] = useState('')

  // const handleChange = (e) => {
  //   setFirstname(e.target.value)
  // }

  // const reset = () => {
  //   setFirstname('')
  // }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(new FormData(e.target))
  }

  const [checked, setChecked] = useState(true)
  const toggleChecked = () => {
    setChecked(!checked)
  }


  
  return <>
      <form action="" onSubmit={handleSubmit}>
        <input type="text" name="firstname" defaultValue="default Value" /* value={firstname} onChange={handleChange} */ />

        <input type="checkbox" name="checked" checked={checked} onChange={toggleChecked} />
        <button disabled={!checked}>Envoyer</button>
        

        {/* <textarea value={firstname} onChange={handleChange} /> */}

    
        {/* <button type="button" onClick={reset}>Reset</button> */}
      </form>
    </>

}



export default App

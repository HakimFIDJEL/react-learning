import { useState } from "react"
import { Input } from "./chap7/components/forms/Input"
import { Checkbox } from "./chap7/components/forms/Checkbox"
import { useEffect } from "react"

/* ======== Le hook useEffect ======== */


function App() {

  // const [showInput, setShowInput] = useState(true)
  const [timer, setTimer] = useState(5)
  const [timeLeft, setTimeLeft] = useState(timer)

  const handleChange = (v) => {
    setTimer(v)
    setTimeLeft(v)
  }

  useEffect(() => {


    const interval = setInterval(() => {

      
      setTimeLeft(v => {
        if(v <= 1)
        {
          clearInterval(interval)
          return 0
        }
        return v - 1
      })

    }, 1000);

    return () => {
      clearInterval(interval)
    }

  }, [timer])


  return <>

    <div className="container">
      
      <Input 
        placeholder="Modifier le timer"
        value={timer}
        onChange={handleChange}
      />

      <p>
        Décompte : {timeLeft}
      </p>
    </div>




    {/* <div className="container">
      <Checkbox 
        checked={showInput}
        onChange={setShowInput}
        id="titleshow"
        label="Afficher le champs titre"
      />

      

      {showInput && <EditTitle /> }


    </div> */}
    
  </>
}




// function EditTitle () {

//   const [title, setTitle] = useState("")
//   const [firstname, setFirstname] = useState("")
//   const [y, setY] = useState(0)

//   useEffect(() =>
//   {

//     const originalTitle = document.title

//     return () => {
//       document.title = originalTitle
//     }

//   }, [title]);
  
//   useEffect(() =>
//   {
//     const handler = (e) => {
//       setY(window.scrollY)
//     }

//     window.addEventListener('scroll', handler)

//     return () => {
//       window.removeEventListener('scroll', handler)
//     }

//   }, []);

//   return <div className="vstack gap-2">
//       Scroll : {y}

//       <Input 
//         placeholder="Modifier le titre"
//         value={title}
//         onChange={setTitle}
//       />
//       <Input 
//         placeholder="Modifier le prénom"
//         value={firstname}
//         onChange={setFirstname}
//       />
//     </div>
// }


export default App

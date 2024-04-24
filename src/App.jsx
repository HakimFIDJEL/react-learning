import { useState } from "react"

function App() {

  const [person, setPerson] = useState({
    firstname: 'John',
    lastname: 'Doe',
    age: 25
  })

  // ILLEGAL - React Hook "useState" is called conditionally. React Hooks must be called in the exact same order in every component render
  // if(person.age < 19) {
    const [count, setCount] = useState(0) 
  // }

  const incrementAge = () => {
    setPerson(person => ({...person, age: person.age + 1}))
  }

  const incrementCount = () => {
    setCount(count + 1)
  }
  
  return <>
      <p>Age de {person.firstname} : {person.age} </p>
      <button onClick={incrementAge}>Gagner une année</button>
      <button onClick={incrementCount}>Incrémenter {count}</button>
    </>

}



export default App

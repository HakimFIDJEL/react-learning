import { useIncrement } from "./hooks/useIncrement"
import { useToggle } from "./hooks/useToggle"
import { useDocumentTitle } from "./hooks/useDocumentTitle"
import { useFetch } from "./hooks/useFetch"
import { useState } from "react"
import { Input } from "./components/forms/Input"

/* ======== Créer un hook personnalisé ======== */




function App() {

  // const [checked, toggleCheck] = useToggle()
  // const [count, increment, decrement] = useIncrement({
  //   base: 0,
  //   max: 10,
  //   min: 0
  // })

  // const [name, setName] = useState('')

  // if(name)
  // {
  //   useDocumentTitle('Editer ' + name)
  // }
  // else 
  // {
  //   useDocumentTitle(null)
  // }

  const {loading, data, errors} = useFetch('https://jsonplaceholder.typicode.com/posts?_limit=10&_delay=2000')



  return <>
    <div className="container">

      {loading && <p>Chargement...</p>}
      {errors && <p>Erreur : {errors.message}</p>}
      {data && <div>
        <ul>
          {data.map(post => <li key={post.id}>{post.title}</li>)}
        </ul>
      </div>}

      {/* <Input 
        value={name}
        onChange={setName}
        label = "Nom" /> */}


      {/* <input type="checkbox" value={checked} onChange={toggleCheck} />

      Compteur : {count}
      <button onClick={increment}>Incrémenter</button>
      <button onClick={decrement}>Décrémenter</button> */}

      
    </div>
  </>
}




export default App

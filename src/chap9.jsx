import { useState } from "react"
import { useEffect } from "react"
import { useId } from "react"
import { useMemo } from "react"
import { Input } from "./components/forms/Input"

/* ======== Le hook useMemo ======== */


function App() {

    const [firstname, setFirstname] = useState('John')
    const [password, setPassword] = useState('password')
    const security = useMemo(() => {
      return passwordSecurity(password)
    }, [password])


  return <>

    <div className="container my-3 vstack gap-2">
      <Input 
        label="Nom d'utilisateur"
        value={firstname}
        onChange={setFirstname}
      />

      <Input 
        label="Mot de passe"
        type="password"
        value={password}
        onChange={setPassword}
      />

      Sécurité : {security}

    </div>
   
    
  </>
}

function passwordSecurity(password) {
  
  if(password.length < 3)
  {
    return 'Faible'
  }
  else if(password.length < 6)
  {
    return 'Moyen'
  }
  return 'Fort'

}





export default App

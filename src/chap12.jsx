import { useState, memo } from 'react'
import { waitSync } from './utils/waitSync'
import { Input } from './components/forms/Input'

/* ======== Mémoisation et useCallback ======== */




function App() {

  const [name, setName] = useState('')
  
  const nameRef = useRef(name)
  nameRef.current = name

  const handleClick = useCallback(() => {
    console.log(nameRef.current)
  }, [])




  return <div className='container my-2 vstack gap-2'>
   <div>
    <Input
      label="Prénom"
      onChange={setName}
      value={name} 
    />
    <div>
      {name.toUpperCase()}
    </div>
    <InfoMemo onClick={handleClick} />
   </div>
  </div>
}

const InfoMemo = memo(function Info ({onClick}) {

  waitSync(500)
  return <div className='alert alert-info' onClick={onClick}>

      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aspernatur conequuntur, corporis.
      
    </div>  
})



export default App

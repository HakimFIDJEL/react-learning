const title = "Bonjour la team"
const style= {color: '#1c1d1f', backgroundColor: 'lightgreen'}
const showTitle = true
const todos = ['Faire les courses', 'Acheter du pain', 'Aller chez le coiffeur']


function App() {

  const handleClick = () => {

    alert('Hello World!')
  }
  
  return <>

      { showTitle ? 
        <Title onClick={handleClick} fontSize="16px" hidden>
          {title}
        </Title> : 
        <p>Titre non officiel</p>
      }

      <input type="text" />

      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Suspendisse nec ligula nec turpis tincidunt tincidunt.
      </p>

      <ul>
        {todos.map((todo, index) => <li key={index}>{todo}</li>)}
      </ul>
      
    </>

}

function Title ({ fontSize, onClick, children, hidden }) {
  const combinedStyle = {...style, fontSize : fontSize}
  
  const props = {
    style: combinedStyle,
    id: "title",
    className: "title"
  }

  // if (hidden) {
  //   return null;
  // }

  return <h1 onClick={onClick} {...props} >{children}</h1>
}

export default App

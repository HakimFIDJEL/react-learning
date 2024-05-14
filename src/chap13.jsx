

/* ======== Les portails ======== */

import { createPortal } from "react-dom"




function App() {

  return <div style={{
                height: 300,
                overflowY: 'scroll',
                background: '#EEE',
                margin: 20,
                position: 'relative'
              }}
              className="container">

                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis asperiores illo accusamus aut dolore expedita? Maiores nihil iusto, iure odio, sint autem error cumque similique maxime ipsa ex, consequuntur dolores.
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis asperiores illo accusamus aut dolore expedita? Maiores nihil iusto, iure odio, sint autem error cumque similique maxime ipsa ex, consequuntur dolores.
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis asperiores illo accusamus aut dolore expedita? Maiores nihil iusto, iure odio, sint autem error cumque similique maxime ipsa ex, consequuntur dolores.
                </p>

                <Modal />
  
  </div>
}

function Modal() {
  return createPortal(<div style={{
    position: 'absolute',
    top: 0,
    right: 0,
    padding: 10,
    border: 'solid 1px grey',
    background: 'white',
  }}>
    Je suis une modale
  </div>, document.body);
}


export default App
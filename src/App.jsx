import React from 'react'
import { useHashNavigation } from './hooks/useHashNavigation'

import { Home } from './pages/Home.jsx'
import { Contact } from './pages/Contact.jsx'
import { Single } from './pages/Single.jsx'
import { NotFound } from './pages/NotFound.jsx'

import { header } from './components/header.jsx' 
import { ErrorBoundary } from 'react-error-boundary'
/* ======== TP : Blog avec React ======== */



function App() {


    const { page, param } = useHashNavigation();
    const pageContent = getPageContent(page, param);
    const headerContent = header({page});



    return <>

        { headerContent }

        <ErrorBoundary FallbackComponent={PageError}>
        { pageContent }
        </ErrorBoundary>




    </>;
}

function PageError({error})
{
    return <Alert type='danger'>{error.message}</Alert>
}

function getPageContent(page, param) {
    switch (page) {
        case 'home':
            return <Home />
        case 'contact':
            return <Contact />
        case 'single':
            return <Single 
                id={param}
            />
        default:
            return <NotFound page={page} />
    }
}



export default App

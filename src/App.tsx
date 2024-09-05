import Header from './components/Cabecalho'
import Hero from './components/Hero'
import ListaVagas from './containers/ListaVagas'

import React from 'react'
import GlobalStyle from './GlobalStyle'

function App() {
    return (
        <>
            <GlobalStyle />
            <Header />
            <Hero />
            <div className="container">
                <ListaVagas />
            </div>
        </>
    )
}

export default App

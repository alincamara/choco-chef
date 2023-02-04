import React, {
  ReactElement,
  //  useEffect, useState
} from 'react'
import // useSelector,
// useDispatch
'react-redux'
import { Header } from './components/Header'
import { Home } from './components/Home'
import { About } from './components/About'
import { Catalog } from './components/Catalog'
import { Reviews } from './components/Reviews'
import { Blog } from './components/Blog'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { ScrollUp } from './components/ScrollUp'
import './App.css'

const App = (): ReactElement => {
  // const counter = useSelector((state: any) => state?.counter)
  // const dispatch = useDispatch()

  return (
    <div className="app">
      <>
        <Header />
        <main className="main">
          <Home />
          {/* <About /> */}
          <Catalog />
          <Reviews />
          {/* <Blog /> */}
          <Contact />
        </main>
        <Footer />
        <ScrollUp />
      </>
    </div>
  )
}

export default App

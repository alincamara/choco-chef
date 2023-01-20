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
import { Portofolio } from './components/Portofolio'
import { Testimonials } from './components/Testimonials'
import { Blog } from './components/Blog'
import { Contact } from './components/Contact'
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
          {/* <About />
          <Portofolio />
          <Testimonials /> */}
          {/* <Blog /> */}
          {/* <Contact /> */}
        </main>
      </>
    </div>
  )
}

export default App

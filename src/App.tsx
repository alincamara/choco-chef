import React, {
  ReactElement,
  //  useEffect, useState
} from 'react'
import // useSelector,
// useDispatch
'react-redux'
// import { increment } from './actions'
import { Routes, Route } from 'react-router-dom'
import { Home } from './containers/screens/Home'
import { AboutUs } from './containers/screens/AboutUs'
import { Contact } from './containers/screens/Contact'
import Navbar from './containers/Navbar'
import './App.css'

const App = (): ReactElement => {
  // const [backendData, setBackendData] = useState<any>([{}])
  // useEffect(() => {
  //   fetch('api/')
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setBackendData(data)
  //     })
  // }, [])

  // const counter = useSelector((state: any) => state?.counter)
  // const dispatch = useDispatch()

  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <div className="footer">Footer</div>
    </div>
  )
}

export default App

import React, {
  ReactElement,
  //  useEffect, useState
} from 'react'
import { FaSearch } from 'react-icons/fa'
import {
  useSelector,
  // useDispatch
} from 'react-redux'
// import { increment } from './actions'
import { Routes, Route, Link } from 'react-router-dom'
import { Home } from './containers/screens/Home'
import { AboutUs } from './containers/screens/AboutUs'
import { Contact } from './containers/screens/Contact'
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

  const counter = useSelector((state: any) => state?.counter)
  // const dispatch = useDispatch()

  console.log('ce aduce pe counter....', counter, 'test')

  return (
    <div className="app">
      <div className="menu">
        <div className="leftSide">
          <span className="siteTitle">{''}</span>
        </div>
        <div className="center">
          <div
            className="menuItem"
            //  onClick={() => dispatch(increment())}
          >
            <Link to="/">Acasă</Link>
          </div>
          <div className="menuItem">
            <Link to="/about">Despre noi</Link>
          </div>
          <div className="menuItem">
            <Link to="/contact">Contact</Link>
          </div>
        </div>
        <div className="rightSide">
          <FaSearch />
        </div>
      </div>
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

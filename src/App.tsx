import React, {
  ReactElement,
  //  useEffect, useState
} from 'react'
import siteLogo from './styles/icons/logo-choco-chef.svg'
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
import styles from './App.css'

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
    <>
      <div className={styles.app}>
        <div className="menu">
          <div className="leftSide">
            <img src={siteLogo} className="logo" alt="logo" />
          </div>
          <div className="center">
            <div
              className="menuItem"
              //  onClick={() => dispatch(increment())}
            >
              <Link to="/">Home</Link>
            </div>
            <div className="menuItem">
              <Link to="/about">About Us</Link>
            </div>
            <div className="menuItem">
              <Link to="/contact">Contact</Link>
            </div>
          </div>
          <div className="rightSide">
            <FaSearch />
          </div>
        </div>
        {/* <div className="content">{backendData.users}</div> */}
        <div className="footer"></div>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  )
}

export default App

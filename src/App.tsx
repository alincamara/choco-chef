import React, {
  ReactElement,
  //  useEffect, useState
} from 'react'
import // useSelector,
// useDispatch
'react-redux'
// import { increment } from './actions'
import { ConnectedRouter } from 'connected-react-router'
import history from './lib/browser-history'
import { Route, Routes } from 'react-router-dom'
import { Home } from './containers/screens/Home'
import { About } from './containers/screens/AboutUs'
import { Contact } from './containers/screens/Contact'
import Navbar from './containers/Navbar'
import './App.css'
import {
  ROUTES_DEFAULT,
  ROUTE_PAGE_ABOUT,
  ROUTE_PAGE_CONTACT,
} from './constants/routes'

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
      <ConnectedRouter history={history}>
        <Routes>
          <Route path={ROUTES_DEFAULT} element={<Home />} />
          <Route path={ROUTE_PAGE_ABOUT} element={<About />} />
          <Route path={ROUTE_PAGE_CONTACT} element={<Contact />} />
        </Routes>
      </ConnectedRouter>
      <div className="footer">Footer</div>
    </div>
  )
}

export default App

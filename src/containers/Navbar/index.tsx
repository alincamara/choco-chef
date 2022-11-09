import React, { useState } from 'react'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { SidebarData } from '../../lib/slideBarData'
import { FaSearch } from 'react-icons/fa'
import './index.css'
import { IconContext } from 'react-icons'

function Navbar() {
  const [sidebar, setSidebar] = useState(false)

  const showSidebar = () => setSidebar(!sidebar)

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <div className="navbar">
          <Link to="#" className="menu-bars">
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
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
            <FaSearch className="searchIcon" />
          </div>
        </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className="nav-menu-items" onClick={showSidebar}>
            <li className="navbar-toggle">
              <Link to="#" className="menu-bars">
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {/* {item.icon} */}
                    <FaIcons.FaBars />
                    <span>{item.title}</span>
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  )
}

export default Navbar

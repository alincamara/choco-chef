import React, { ReactElement, useEffect, useState } from "react";
// @ts-ignore: Unreachable code error
import siteLogo from "./styles/icons/logo-choco-chef.svg";
import { FaSearch } from "react-icons/fa";
// @ts-ignore: Unreachable code error
import styles from "./App.css";
import { useSelector, useDispatch } from "react-redux";
// @ts-ignore: Unreachable code error
import { increment } from "./actions";

const App = (): ReactElement => {
  const [backendData, setBackendData] = useState<any>([{}]);
  useEffect(() => {
    fetch("api/")
      .then((response) => response.json())
      .then((data) => {
        setBackendData(data);
      });
  }, []);

  const counter = useSelector((state: any) => state?.counter);
  const dispatch = useDispatch();

  console.log("ce aduce pe counter....", counter, "test");

  return (
    <div className={styles.app}>
      <div className="menu">
        <div className="leftSide">
          <img src={siteLogo} className="logo" alt="logo" />
        </div>
        <div className="center">
          <div onClick={() => dispatch(increment())} className="menuItem">
            Home
          </div>
          <div className="menuItem">Shop</div>
          <div className="menuItem">About Us</div>
          <div className="menuItem">Contact</div>
        </div>
        <div className="rightSide">
          <FaSearch />
        </div>
      </div>
      <div className="content">{backendData.users}</div>
      <div className="footer"></div>
    </div>
  );
};

export default App;

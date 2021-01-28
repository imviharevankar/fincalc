import React from 'react';
import { useHistory } from "react-router-dom";

import "./Header.css";
import logo from "./img/logo.png";

function Header() {

    const history = useHistory();

    const activeEmi = () => {
        document.querySelector("#emiActive").classList.add("header__active");
        document.querySelector("#sipActive").classList.remove("header__active");

        history.push("/");

    }

    const activeSip = () => {
        document.querySelector("#emiActive").classList.remove("header__active");
        document.querySelector("#sipActive").classList.add("header__active");

        history.push("/sip");

    }
    return (
        <div className="header">
            <img src={logo} className="header__logo" alt="FinCac__logo" onClick={activeEmi}/>
            <div>
            <div id="emiActive" className="header__active" onClick={activeEmi}>
                EMI Calc.
            </div>
            <div id="sipActive" onClick={activeSip}>
                SIP Calc.
            </div>
            </div>
        </div>
    )
}

export default Header;

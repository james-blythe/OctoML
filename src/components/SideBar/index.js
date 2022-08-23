import React from "react"

import logo from "../../assets/images/logo.svg"
import home from "../../assets/images/home.svg"
import last from "../../assets/images/last.svg"
import "./style.scss"
export default () => {
    return(
        <div className="side-bar">
          <div className="icon-container">
            <img className = "img-logo" src={logo}/>
            <img className = "img-home" src={home}/>
            <img className = "img-last" src={last}/>
          </div>
          <div className="user-avatar"></div>
        </div>
    )
}
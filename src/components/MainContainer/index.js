import React from "react"
import "./style.scss"
import Header from "./Header"
import MiddleContainer from "./MiddleContainer"
export default () => {
    return(
        <div className="main-container">
          <Header/>
          <MiddleContainer/>
        </div>
    )
}
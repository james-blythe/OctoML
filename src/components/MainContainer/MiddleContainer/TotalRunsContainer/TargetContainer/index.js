import React from "react";
import "./style.scss"

export default ({target}) => {
  return(
    <div className="target-container">
      <div className="instance-container">
        <div className="instance-name">{target.instanceType}</div>
        <div className="instance-core">{target.cpuData}</div>
      </div>
      <div className="num-txt">1</div>
    </div>
  )
}
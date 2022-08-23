import React from "react";
import "./style.scss"

export default ({enable}) => {
  const btnProperty = enable?"enable":"disable"
  return(
    <div className={`opt-btn btn-${btnProperty}`}>Optimize
    </div>
  )
}
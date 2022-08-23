import React from "react";
import { Checkbox } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import "./style.scss";

export default ({ checkBoxText }) => {
  return (
    <div className="check-box">
      <div className="check-box-container">
        <Checkbox></Checkbox>
        <div className="check-txt">
          <div className="txt-header">{checkBoxText.header}</div>
          <div className="txt-context">{checkBoxText.context}</div>
        </div>
      </div>
      <FontAwesomeIcon icon={faAngleDown} />
    </div>
  );
};

import React from "react";
import "./style.scss";
import OptBtn from "./OptBtn";
import TargetContainer from "./TargetContainer";
import { v4 } from "uuid";

export default ({ optimizers }) => {
  return (
    <div className="total-runs">
      <div className="total-runs-header">Total Runs</div>
      <div className="optimizer-num-txr">{optimizers.length}</div>
      {optimizers.map((item) => (
        <TargetContainer target={item} key={v4()}></TargetContainer>
      ))}
      <OptBtn enable={optimizers.length} />
    </div>
  );
};

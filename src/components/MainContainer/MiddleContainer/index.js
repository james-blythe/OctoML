import React from "react";
import "./style.scss";
import OctimizeContainer from "./OctimizeContainer";
import TotalRunsContainer from "./TotalRunsContainer";
export default () => {
  const [targets, setTargets] = React.useState([]);
  const onRemove = (id) => {
    const tmp = targets.filter((item, index) => index !== id);
    setTargets([...tmp]);
  }
  const addTargetHandler = (target) => {
    if (targets.findIndex((item) => item.instanceType === target.instanceType) >= 0) return;
    if(target.instanceType !== "")
      setTargets([...targets, target]);
  };

  return (
    <div className="middle-container">
      <OctimizeContainer targets={targets} onAdd={addTargetHandler} onRemove={onRemove}/>
      <TotalRunsContainer optimizers={targets} />
    </div>
  );
};

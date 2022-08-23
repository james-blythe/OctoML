import React, { useState } from "react";
import "./style.scss";
import CustomizedCheckBox from "./CustomizedCheckBox";
import BasicTable from "./BasicTable";
import { v4 } from "uuid";
export default ({ optimizers, targets, onAdd, onRemove }) => {
  const [providerType, setProviderType] = React.useState("");
  const [instanceType, setInstanceType] = React.useState("");
  const [cpuData, setCpuData] = React.useState(0);
  const [memoryData, setMemoryData] = React.useState(0);
  const target = {
    providerType,
    instanceType,
    cpuData,
    memoryData,
  };
  const pushNewTarget = () => {
    setProviderType("");
  };
  const optimizerType = [
    {
      header: "Benchmark",
      context: "This is some sub content to explain benchmarking.",
    },
    {
      header: "Accelerate",
      context: "Could even open this accordian for paragraph of text.",
    },
  ];
  return (
    <div className="oct-container">
      <div className="oct-header">Octomize</div>
      <div className="checkbox-container">
        {optimizerType.map((item) => {
          return (
            <CustomizedCheckBox
              checkBoxText={item}
              key={v4()}
            ></CustomizedCheckBox>
          );
        })}
      </div>
      <div className="targets-container" optimizers={optimizers}>
        <div className="targets-header">
          <span>Hardware targets</span>
          <button
            className="provider-add-btn"
            onClick={() => pushNewTarget(target)}
          >
            Add
          </button>
        </div>
        <BasicTable
          targets={targets}
          providerType={providerType}
          setProviderType={setProviderType}
          instanceType={instanceType}
          setInstanceType={setInstanceType}
          cpuData={cpuData}
          setCpuData={setCpuData}
          memoryData={memoryData}
          setMemoryData={setMemoryData}
          onAdd={onAdd}
          onRemove={onRemove}
        />
      </div>
    </div>
  );
};

import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import BasicSelect from "../BasicSelect";

export default function BasicTable({
  providerType,
  setProviderType,
  instanceType,
  setInstanceType,
  cpuData,
  setCpuData,
  memoryData,
  setMemoryData,
  targets,
  onAdd,
  onRemove
}) {
  const [instanceList, setInstanceList] = React.useState([]);
  const rows = targets;
  const onProviderChange = (e) => {
    setProviderType(e.target.value);
    if (e.target.value === "AWS")
      setInstanceList(["m4.large", "m4.xlarge", "m4.2xlarge", "m4.4xlarge"]);
    else
      setInstanceList([
        "n2-standard-2",
        "n2-standard-4",
        "n2-standard-8",
        "n2-standard-16",
      ]);
  };

  const onInstanceChange = (e) => {
    let index;
    index = instanceList.findIndex(
      (instanceType) => instanceType === e.target.value
    );
    setInstanceType(e.target.value);
    setCpuData(1 << (index + 1));
    setMemoryData(8 * (1 << index));
  };
  React.useEffect(() => {
    onAdd({providerType, instanceType, cpuData, memoryData})
    setInstanceType("");
    if (rows.length) setProviderType("NotShow");
    else setProviderType("");
    setCpuData("");
    setMemoryData("");
  }, [cpuData])
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell sx={{ color: "#0180FF", fontSize: "10px" }}>
              PROVIDER
            </TableCell>
            <TableCell align="left" sx={{ fontSize: "10px", color: "#7B818A" }}>
              INSTANCE
            </TableCell>
            <TableCell align="left" sx={{ fontSize: "10px", color: "#7B818A" }}>
              VCPU
            </TableCell>
            <TableCell align="left" sx={{ fontSize: "10px", color: "#7B818A" }}>
              MEMORY (GIB)
            </TableCell>
            <TableCell>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, id) => (
            <TableRow
              key={row.name}
              sx={{ "td, th": { border: 0 }, height: "54px" }}
            >
              <TableCell component="th" scope="row" sx={{ height: "38px" }}>
                {
                  <BasicSelect
                    type="provider"
                    onChange={onProviderChange}
                    list={["AWS", "GCP"]}
                    value={row.providerType}
                  ></BasicSelect>
                }
              </TableCell>
              <TableCell sx={{ height: "38px" }}>
                {" "}
                {
                  <BasicSelect
                    type="instance"
                    providerType={providerType}
                    setCpuData={setCpuData}
                    setMemoryData={setMemoryData}
                    value={row.instanceType}
                    list={instanceList}
                  ></BasicSelect>
                }
              </TableCell>
              <TableCell align="left" sx={{ height: "38px" }}>
                {row.cpuData}
              </TableCell>
              <TableCell align="left" sx={{ height: "38px" }}>
                {row.memoryData}
              </TableCell>
              <TableCell onClick={() => onRemove(id)}>
                X
              </TableCell>
            </TableRow>
          ))}

          {providerType !== "NotShow" && <TableRow
            key={"Add_Row"}
            sx={{ "td, th": { border: 0 }, height: "54px" }}
          >
            <TableCell component="th" scope="row" sx={{ height: "38px" }}>
              {
                <BasicSelect
                  type="provider"
                  list={["AWS", "GCP"]}
                  value={providerType}
                  onChange={onProviderChange}
                  placeholder="Select Provider"
                ></BasicSelect>
              }
            </TableCell>
            <TableCell align="right" sx={{ height: "38px" }}>
              {" "}
              {
                <BasicSelect
                  type="instance"
                  list={instanceList}
                  value={instanceType}
                  onChange={onInstanceChange}
                  placeholder="Select Instance"
                ></BasicSelect>
              }
            </TableCell>
            <TableCell align="left" sx={{ height: "38px" }}>
              {cpuData}
            </TableCell>
            <TableCell align="left" sx={{ height: "38px" }}>
              {memoryData}
            </TableCell>
          </TableRow>}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

import e from "express";
import {
  getEmployeeByNik,
  updateEmployeeName,
} from "../services/employee-service.js";

const getEmployeeInfo = (req, res) => {
  const nik = req.params.nik;
  const employeeData = getEmployeeByNik(nik);

  return res.json(employeeData);
};

const updateEmployeeData = (req, res) => {
  const nik = req.params.nik;
  const body = req.body;
  const result = updateEmployeeName(nik, body.nama);
  if (result.status === "false") {
    return res.status(200).json(result);
  } else if (result.status === "true") {
    return res.status(201).json(result);
  }
};

export { getEmployeeInfo, updateEmployeeData };

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
  const status = updateEmployeeName(nik, body.nama);

  return res.json(status);
};

export { getEmployeeInfo, updateEmployeeData };

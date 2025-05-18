import fs from "fs";

const getEmployeeByNik = (nik) => {
  const dataString = fs.readFileSync("src/models/employees.json", "utf8");
  const dataJSON = JSON.parse(dataString);
  const employee = dataJSON.find((employee) => employee.nik === nik);
  if (!employee) {
    return {
      status: "false",
      message: `Nik : ${nik} tidak ditemukan!`,
    };
  }

  return {
    status: "true",
    data: employee,
  };
};

const updateEmployeeName = (nik, newName) => {
  const dataString = fs.readFileSync("src/models/employees.json", "utf8");
  const dataJSON = JSON.parse(dataString);
  const employeeIndex = dataJSON.findIndex((employee) => employee.nik === nik);
  if (employeeIndex === -1) {
    return {
      status: "false",
      message: `Nik : ${nik} tidak ditemukan!`,
    };
  }

  const oldName = dataJSON[employeeIndex].nama;
  dataJSON[employeeIndex].nama = newName;
  fs.writeFileSync("src/models/employees.json", JSON.stringify(dataJSON));
  return {
    status: "true",
    message: `Perubahan Nama: ${oldName} menjadi ${newName} berhasil!`,
  };
};

export { getEmployeeByNik, updateEmployeeName };

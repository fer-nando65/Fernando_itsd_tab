import express from "express";
import {
  getEmployeeInfo,
  updateEmployeeData,
} from "../controllers/employee-controller.js";

const employeeRouter = express.Router();

employeeRouter.get("/info/:nik", getEmployeeInfo);
employeeRouter.post("/update/:nik", updateEmployeeData);

export { employeeRouter };

import express from "express";
import { employeeRouter } from "./src/routes/employee-router.js";

const app = express();
const port = 3000;

app.use(express.json());

app.use("/api/v1", employeeRouter);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

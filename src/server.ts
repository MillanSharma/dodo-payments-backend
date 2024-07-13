import process from "node:process";
import cors from "cors";
import express from "express";
import dotenv from 'dotenv';
import routes from "./routes/routes";
import swaggerJSDoc from "swagger-jsdoc";
import  swaggerUi from "swagger-ui-express";
import swaggerOptions from "../swaggerConfig";
dotenv.config();

const { PORT } = process.env;

const app = express();

app.use(express.json());
app.use(cors());

//swagger setup
const swaggerSpecs = swaggerJSDoc(swaggerOptions);
app.use("/dodo-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpecs));

app.use("/", routes);

app.listen(PORT, () => {
  console.info(`Server is running at ${process.env.API_BASE_URL}`);
});

export default app;

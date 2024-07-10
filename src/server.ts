import process from "node:process";
import cors from "cors";
import express from "express";
import routes from "./routes/routes";

const { PORT } = process.env;


const app = express();

app.use(express.json());
app.use(cors());

app.use("/", routes);

app.listen(PORT, () => {
  console.info(`Server running at ${process.env.API_BASE_URL}`);
});

export default app;

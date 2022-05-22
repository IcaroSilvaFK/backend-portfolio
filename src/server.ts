/**
 * @author @IcaroSilvaFK
 * @version 0.1
 */

import express from "express";
import cors from "cors";

import { routes } from "./routes/routes";

const app = express();
const port = 8080;

app.use(express.json());
app.use(cors({ origin: "*", methods: ["GET", "POST", "DELETE"] }));
app.use(routes);

app.listen(port, () => {
  console.log(`server running at http://localhost:${port}`);
});

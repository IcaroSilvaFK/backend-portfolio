import express from "express";
import Cors from "cors";

import { routes } from "./routes/routes";

const app = express();
const port = 8080;

app.use(express.json());
app.use(routes);
app.use(Cors());

app.listen(port, () => {
  console.log(`server running at http://localhost:${port}`);
});

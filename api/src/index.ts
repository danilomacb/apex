import express from "express";
import cors from "cors";

import login from "./routes/login";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/login", login);

app.listen(3001, () => console.log(`Api running`));

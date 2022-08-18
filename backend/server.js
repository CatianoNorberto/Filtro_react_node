import express from "express";
const app = express();
import cors from "cors";

app.use(cors());

import { Users } from "./users.js";

app.get("/", (req, res) => {
  const { q } = req.query;

  const keys = ["first_name", "last_name", "email"];

  const search = (data) => {
    return data.filter((item) =>
      keys.some((key) => item[key].toLowerCase().includes(q))
    );
  };

  q ? res.json(search(Users).slice(0, 10)) : res.json(Users.slice(0, 10));
});

app.listen(3333, () => console.log("Servidor rodando na porta 3333"));

import express, { Express, Request, Response } from "express";

const app: Express = express();
const port = 3010;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req: Request, res: Response) => {
  const body = req.body;

  console.log(body);

  return res.json("Hello Expressss!");
});

// backend가 열렸을때 실행될 내용
app.listen(port, () => {
  console.log(`Server is listening on port: ${port}`);
});

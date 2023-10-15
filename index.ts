import express, { Express, Request, Response } from "express";

const app: Express = express();
const port = 3010;

app.get("/", (req: Request, res: Response) => {
  return res.json("Hello Expressss!");
});

// backend가 열렸을때 실행될 내용
app.listen(port, () => {
  console.log(`Server is listening on port: ${port}`);
});

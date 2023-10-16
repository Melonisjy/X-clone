import express, { Express, Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const app: Express = express();
const port = 3010;

const client = new PrismaClient();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req: Request, res: Response) => {
  return res.json("Hello Expressss!");
});

app.post("/user", async (req, res) => {
  try {
    // account, password 받아오기
    const { account, password } = req.body;

    console.log(account, password);

    // 유저가 존재하는지 확인
    const existUser = await client.user.findUnique({
      where: {
        account,
      },
    });

    console.log(existUser);

    // 있으면 리턴 (종료)
    if (existUser) {
      return res
        .status(400)
        .json({ ok: false, message: "Already exist user." });
    }

    // 없으면 생성
    const newUser = await client.user.create({
      data: {
        account,
        password,
      },
    });

    console.log(newUser);

    // 생성 후 종료
    return res.json({ ok: true, user: newUser });
  } catch (error) {
    console.error(error);
  }
});

// backend가 열렸을때 실행될 내용
app.listen(port, () => {
  console.log(`Server is listening on port: ${port}`);
});

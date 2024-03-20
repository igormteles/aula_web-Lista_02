import express, {Request, Response} from 'express';

const app = express();
const PORT = process.env.PORT ?? 3000;

function appLog(){
    console.log("A API está disponível no URL http://localhost:3000")
}
app.listen(PORT, appLog);

function hello(resq: Request, res: Response){
    return res.status(201).json({mensagem: "Hello world"});
}

app.get("/api/hello", hello)
import express, { Request, Response } from 'express';

const app = express();
const port = 3000;

type method = "add" | "subtract" | "multiply" | "divide";

function Calculation (req : Request): { ok: true, output: string } | { ok: false, error: string } {
    const calculate = String(req.query.method ?? ""). toLowerCase();
    const num1 = String(req.query.x ?? "");
    const num2 = String(req.query.y ?? "");

    const x = Number(num1);
    const y = Number(num2);

    if (!calculate || num1 === " " || num2 === " ") {

        return{ ok  : false, error : "Missing paramters in query. Please provide Operation, value of x and value of y."};
    }

    if (Number.isNaN(x) || Number.isNaN(y)) {
        return { ok: false, error: "Invalid input. x and y should be numbers." };
    }

    let operand = "";
    let result: number;

    switch (calculate as method) {
        case "add":
            operand = "+";
            result = x + y;
            break;
        case "subtract":
            operand = "-";
            result = x - y;
            break;
        case "multiply":
            operand = "*";
            result = x * y;
            break;
        case "divide":
            operand = "/";
            if (y === 0) {
                return { ok: false, error: "Division by zero is not allowed." };
            }
            result = x / y;
            break;
        default:
            return { ok: false, error: "Please use add, subtract, multiply, or divide." };
    }
    return { ok: true, output: `${x} ${operand} ${y} = ${result}` };
}

app.get("/lab3", (req: Request, res: Response) => {
    const finalResult = Calculation(req);

    if (!finalResult.ok) {
        return res.status(400).send (finalResult.error);
    }

    return res.status(200).send(finalResult.output);
});

app.listen(port, ()=> {
    console.log(`server is running on http://localhost:${port}`);

});


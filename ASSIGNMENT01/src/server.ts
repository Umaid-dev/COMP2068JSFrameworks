import express, { Request, Response} from 'express';
import apiRouter from './routes';

const app = express();
const PORT = 3000;

// built in  Middleware to parse JSON bodies
app.use(express.json());

app.use("/api", apiRouter);

app.use((req: Request, res: Response) => {
    res.status(404).json({ error: "Error:Not Found" });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});



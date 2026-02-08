import express, { Request, Response, NextFunction} from 'express';
import apiRouter from './routes';
import { logger } from './middleware/logger';


const app = express();
const PORT = process.env.PORT || 3000;

// built in  Middleware to parse JSON bodies
app.use(express.json());
app.use(logger);
app.use("/api", apiRouter);

app.use((req: Request, res: Response) => {
    res.status(404).json({ error: "Error:Not Found" });
});

app.use((err: Error, req: Request, res: Response, _next: NextFunction) => {
  console.error(err.message);
  res.status(500).json({
    error: "Internal server error"
  });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});



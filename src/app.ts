import express, { Express, Request, Response } from 'express';
import userRouter from './routes/userRouter';

const app: Express = express();

const PORT = 3000;

app.set('name', 'hometask2');
app.set('x-powered-by', false);

app.use(express.json());

app.use('/user', userRouter);

app.use((error: CustomError, req: Request, res: Response) => {
    if (error?.message) {
        res.status(error.status ? error.status : 500).json({
            error: error.message
        });
    }
});

app.listen(PORT, () => {
    console.log(
        `Express app - ${app.get('name')} - is running on port ${PORT}`
    );
});

interface CustomError {
    status: number;
    message: string;
}

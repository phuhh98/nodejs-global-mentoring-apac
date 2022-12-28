const express = require('express');

const userRouter = require('./routes/userRouter');

const app = express();

const PORT = 3000;

app.set('name', 'hometask2');
app.set('x-powered-by', false);

app.use(express.json());

app.use('/user', userRouter);

app.use((error, req, res) => {
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

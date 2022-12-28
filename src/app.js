const express = require('express');

const userRouter = require('./routes/userRouter');

const app = express();

const PORT = 3000;

app.set('name', 'hometask2');
app.set('x-powered-by', false);

app.use(express.json());

app.use('/user', userRouter);

app.get('/', (req, res) => {
    res.send('lolo');
});

app.use((error, req, res, next) => {
    res.status(error.status ? error.status : 500).json({
        error: error.message
    });
    next();
});

app.listen(PORT, () => {
    console.log(
        `Express app - ${app.get('name')} - is running on port ${PORT}`
    );
});

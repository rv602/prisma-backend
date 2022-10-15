const cookieParser = require('cookie-parser');
const express = require('express');

require('dotenv').config();
const app = express();

// regular middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// cookie middleware
app.use(cookieParser());

// routes
const userRouter = require('./routes/userRoutes');
app.use('/api', userRouter);

const postRouter = require('./routes/postRoutes');
app.use('/api', postRouter);

app.get('/', (req, res) => {
    res.send('hi from express');
});

app.listen(3000, () => {
    console.log('server running on port 3000');
});
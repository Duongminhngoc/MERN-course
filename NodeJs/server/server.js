const express = require('express');
const app = express();
const usersRouter = require('./Router/UserRoute');
const authRouter = require('./Router/AuthRoute');
const port = 5000;
//connect to database
const connectDb = require('./Services/ConnectDbService');
connectDb();
//middleware router
app.use('/users', usersRouter);
app.use('/auth', authRouter);
//route for app
//listen 
app.listen(port, function(){
    console.log(`Server listen on port ${port}`);
});

const express = require('express');
require('./db/mongoose');
const app = express();
const user = require('./routers/user.js');


app.use(express.json());
app.use(user);


const port = process.env.PORT || 5000;
app.listen(port, ()=> {
    console.log(`Server is up on port ${port}`);
})
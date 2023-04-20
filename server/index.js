const express = require("express");
const app = express();
const cors = require("cors");
const PORT = 3001;

app.use(cors({
    origin: "*"
}))

app.get('/', (req,res)=>{
    res.send('Welcome to node server!');
    res.end();
})
const data = {
    fname: "Jitendra",
    lname: "Pal",
    age: 35
}
app.get('/me', (req, res)=>{
    res.json(data);
    res.end();
})

app.listen(PORT, ()=>{
    console.log(`Server started on port ${PORT}`);
})
const express = require("express")
const cors = require("cors")


const app = express()


app.use(cors({
    origin: '*'
}));

app.get('/names',(req,res)=>{
    res.send("omar")
})

app.listen(5000,()=>{
    console.log("app is runnig on port 5000")
})
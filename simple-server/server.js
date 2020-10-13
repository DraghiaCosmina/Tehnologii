const express=require('express')
const server = express()
let port=9090
server.listen(port, ()=>{
    console.log("Server pornit " + port)
})
server.get("/ping",(req,res)=>{
    res.send("mesaj")

})
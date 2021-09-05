const app =require("express");
const http =require("http").createServer(app);
const io = require("socket.io")(http);



io.on("connection",socket=>{
    console.log("CONNECT")
    socket.on("message",({name , message })=>{
        console.log("name",name,"message",message)
        io.emit('message',{name , message})
    })
})


http.listen(4000 , function()
{
    console.log("PORT 4000  ")
})
const express= require("express")
const app =express()
const port = 3000



app.get("/",(req,res)=>{
    res.send("bienveue chez nous ")
})

app.listen(port,()=>{
    console.log("severeur démaré");
})

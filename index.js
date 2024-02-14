// import routes from '/routes/routes.js'
const express= require("express");
const app =express();
const port = 3000
// app.use(express.json())



app.get("/",(req,res)=>{
    res.send("bienveue chez nous ")
})

app.listen(port,()=>{
    console.log("severeur démaré");
})

app.put("/",(req,res)=>{
    res.send("miser a jour")
})

app.post("/",(req,res)=>{
    res.send("faire un post ")
})

app.delete("/",(req,res)=>{
    res.send("pour supprimé ")
})

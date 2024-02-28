const express = require("express");
const app = express();
const path = require ("path");

const publicPath = path.resolve(__dirname , "../public");
app.use(express.static (publicPath));

const PORT = process.env.PORT || 3001;

app.listen (PORT, () => 
    console.log(`Servidor corriendo en Puerto ${PORT}`)
);

app.get("/home", (req,res)=>{
    res.sendFile(path.resolve(__dirname, "../views/home.html"))
});

app.get("/register", (req,res)=>{
    res.sendFile(path.resolve(__dirname, "../views/register.html"))
});
app.post("/registro", (req,res)=>{
    res.send("Se ha creado el usuario con éxito!")
});

app.get("/login", (req,res)=>{
    res.sendFile(path.resolve(__dirname, "../views/login.html"))
});
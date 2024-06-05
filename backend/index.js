import express from "express"
import cors from "cors";
const app = express();
const PORT = 8080;

app.use(cors());

app.get("/api/user", (req, res) => {
    res.status(200).json({message : "Hi, how are you !!"})
})

app.listen(PORT, ()=>{
    console.log(`server connected at ${PORT} !!`)
})



import express from "express"
import cors from "cors"
const app = express()
app.use(cors({
    origin : "http://localhost:5173"
}))

app.get("/",(req,res)=>{
    res.json({
        name: "shamim rana",
        roll: 58475665
    })
})

export default app 
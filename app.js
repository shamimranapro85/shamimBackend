import express from "express"
const app = express()

app.get("/",(req,res)=>{
    res.json({
        name: "shamim rana",
        roll: 58475665
    })
})

export default app 
import express from "express"
const app = express()
app.use(express.json()) // middleware que transforma el req.body a un json

const PORT = 3000

app.get("/", (_req, res) => {
  console.log("pong")
  res.send("pong")
})

app.listen(PORT, () => {
  console.log(`Server listen in port ${PORT}`)
})

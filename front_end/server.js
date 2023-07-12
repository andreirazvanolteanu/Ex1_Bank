import express from "express";

const app = express()

app.get("/", (req, res) => {})

app.get("/users", (req, res) => {
    res.send([{id:1, name: "BOB", age: 2}])
})

const port = process.env.PORT || 8091
app.listen(port, () => console.log("Listening"))
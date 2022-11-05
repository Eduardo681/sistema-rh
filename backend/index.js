const cors = require("cors")
const router = require("./src/routes");
const express = require("express");
const app = express();

app.use(cors())

app.use(express.json());
app.use("/", router);

app.listen(3004, () => {
    console.log("App listen on port 3004")
})
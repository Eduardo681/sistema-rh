const cors = require("cors")
const router = require("./routes");
const app = require("express")();

app.use(cors())

app.use("/", router);

app.listen(3000, () => {
    console.log("App listen on port 3000")
})
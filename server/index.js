import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import connect from "./database/conn.js";


const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());


app.get("/", (req, res) => {
  res.send("Hello to Memories API");
})

const PORT = 5000;

connect().then(() => {
    app.listen(PORT, () => {
        console.log(`Server running on : http://localhost:${PORT}`);
    })
    }).catch((err) => {
        console.log(err.message);
    }
);

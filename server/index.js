import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import connect from "./database/conn.js";
import session from "express-session";

import router from "./routers/router.js";

const app = express();

app.set('view engine', 'ejs'); // Corrected line
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
app.use(express.static("public"));
// app.use('/appCon/', express.static('public'));
app.use(session({ secret: "Shh, its a secret!" }));

app.get("/", (req, res) => {
  res.send("Hello to Memories API");
})
app.use("/", router);

const PORT = 5000;

connect().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on : http://localhost:${PORT}`);
  })
}).catch((err) => {
  console.log(err.message);
});

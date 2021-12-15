const express = require("express");
const path = require("path");
const ejs = require("ejs");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
    res.render("index")
});

//const db = mysql.createConnection({
//  host: process.env.DATABASE_HOST,
//  user: process.env.DATABASE_USER,
//  password: process.env.DATABASE_PASSWORD,
//  database: process.env.DATABASE
//});



//db.connect( (error) => {
//  if(error) {
//    console.log(error)
//  } else {
//    console.log("MYSQL Connected...")
//  }
//})

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server running on ${PORT}`));
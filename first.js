// hem = {
//     om: "great",
//     pari: "bekar",
// };

// module.exports = hem;

// import {bhano} from "./Basics.mjs"

// bhano()

// import figlet from "figlet";

// async function doStuff() {
//   const text = await figlet.text("HEM   LADANI");
//   console.log(text);
// }

// doStuff();
import express from "express";
const app = express();

app.use(function (req, res,next) {
    console.log("Middleware 1");
    next();
});

app.get("/", function (req, res) {
    res.send("Pari bohot bekar hai");
});
app.get("/profile", function (req, res) {
    res.send("Pari bohot bohot bekar hai");
}
);

app.listen(8090);
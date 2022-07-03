const express = require ("express");
const { getUsers } = require("./users/users.service");
const app = express();
const port = 8000;

app.use(express.json());

// // // Parsing Body Json 
// const bodyParser = require('body-parser');
// app.use(bodyParser.json());

app.set("view engine", "html");
app.engine('html', require ("ejs").renderFile);

app.use(express.static(__dirname + "/views/Chapter3"));
app.use(express.static(__dirname + "/views/Chapter4"));

app.get("/chapter3", (req, res) => {
    return res.render("Chapter3/index");
    //return res.status (200).send("selamat datang ya");
});

app.get("/chapter4", (req, res) => {
    return res.render("Chapter4/index");
});

// app.get("/product", (req, res) => {
//     const product = [
//         {
//             name: "product 1",
//             price: 3000,
//         },
//         {
//             name: "product 2",
//             price: 1000,
//         },
//     ];

//     return res.json(product);
// });

// app.get("/product/:productId", (req, res) => {
//     console.log(req.params);
//     return res.send("your product id is => " + req.params.productId);
// });

//Login
app.get("/login", getUsers);

app.listen(port, () => console.log("your server started (ctlr + click) http://localhost:" + port));


//http:localhost:8000/chapter3 => landingpage chapter 3
//http:localhost:8000/chapter4 => game suit jawa
//http:localhost:8000/login => login
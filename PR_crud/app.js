const express = require("express");
const {
    getUsers,
    createUsers,
    readUsers,
    updateUsers,
    deleteUsers,
} = require("./users/users.service");
const app = express();
const port = 5000;



// app.get("/", (req, res) => {
//   res.send("hello from simple server :)");
// });

// api untuk mendapat semua users
app.get("/users", getUsers);

app.post("/users", createUsers);

app.get("/users/:userId", readUsers);

app.put("/users", getUsers);

app.delete("/users", deleteUsers);


app.listen(port, () =>
  console.log("> Server is up and running on port : " + port)
);
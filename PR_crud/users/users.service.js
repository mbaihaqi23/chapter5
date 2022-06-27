let userId = 1
const usersList = []


const getUsers = (req, res) => {
    return res.json(usersList);
};

const createUsers = (req, res) => {
    const userId = 1;
    const user = {
        id : "userId",
        name : "usernama",
        password : "password"
    };

    return res.send("test");
};

const readUsers = (req, res) => {
    return res.send("test");
};

const updateUsers = (req, res) => {
    return res.send("test");
};

const deleteUsers = (req, res) => {
    return res.send("test");
};


module.exports = {
    getUsers,
    createUsers,
    readUsers,
    updateUsers,
    deleteUsers,
}



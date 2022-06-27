let userId = 1
const usersList = []


const getUsers = (req, res) => {
    return res.json(usersList);
};

const createUsers = (req, res) => {
    const newUser = req.body;
    userColection.push({
      id: userId,
      nama: newUser.nama,
      password: newUser.password,
    });
    userId++;
    return res.json(userColection);
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



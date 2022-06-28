let userId = 1
let usersList = []


const getUsers = (req, res) => {
    return res.json(usersList);
};

const createUsers = (req, res) => {
    const newUser = req.body;
    usersList.push({
      id: userId,
      name: newUser.name,
      password: newUser.password,
    });
    userId++;
    return res.json(usersList);
  };
    

const readUsers = (req, res) => {
    const { userId } = req.params;
    const userData = usersList.find((user) => user.id == userId);
    return res.json(userData);
};

const updateUsers = (req, res) => {
const { userId } = req.params;

const filterUser = usersList.find((user) => {
return user.id == userId;
  });

filterUser.name = req.body.name;
filterUser.password = req.body.password;
return res.json(filterUser);
};

const deleteUsers = (req, res) => {
    const { userId } = req.params;

    usersList = usersList.filter((user) => user.id != userId);
    console.log(usersList);
    return res.send("deleted");
};


module.exports = {
    getUsers,
    createUsers,
    readUsers,
    updateUsers,
    deleteUsers,
}



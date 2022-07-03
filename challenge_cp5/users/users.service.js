let userColection = [
  {
    user : "baihaqi",
    password : "rico123",
  }
];

// const getUsers = (req, res) => {
//     return res.json(usersList);
// };

const getUsers = (req, res) => {
  const user = req.body.user;
  const password = req.body.password;

  const userData = userColection.find(
    (el) => el.user == req.body.user && el.password == req.body.password
  );
  try {
    if (userData.user == user && userData.password == password)
      return res.send("LOGIN BERHASIL");
  } catch (error) {
    return res.send("LOGIN ERROR");
  }
};

module.exports = { getUsers }
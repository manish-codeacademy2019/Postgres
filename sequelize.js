const Sequelize = require('sequelize');

let User;
const sequelize = new Sequelize('test', 'Manish_S_B', 'BMS@1997Manu', {
  host: 'localhost',
  dialect: 'postgres',
  pool: {
    max: 5,
    min: 0,
    idle: 10000,
  },
});

const callbackFn = (someString) => {
  console.log(someString);
};

const init = (callback) => {
  sequelize.authenticate().then(() => {
    callback('Connected');
  });
  User = sequelize.define('user', {
    username: Sequelize.STRING,
    birthday: Sequelize.DATE,
  });
};

const insert = (userId) => {
  sequelize.sync()
    .then(() => User.create({
      id: userId,
      username: 'janedoe',
      birthday: new Date(1980, 6, 20),
    }))
    .then((userData) => {
      console.log(userData.toJSON());
    });
};


init(callbackFn);
// insert(1, callbackFn);

module.exports = {
  sequelize, User, init, insert,
};

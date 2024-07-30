const { User } = require('../models');

const userData = [
    {
        username: "jon_snow",
        password: "1234567"
    },
    {
        username: "martin_bull",
        password: "1234567"
    },
]

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
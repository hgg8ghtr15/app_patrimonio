const Sequelize = require('sequelize');

const connetion = new Sequelize({
    database: "d6919guo2571fo",
    username: "sdtlkqjjhbjynd",
    password: "af4b25c706833e5f33dd0f5491eac3ad853b148f684cf4a611b1cc1c189bae08",
    host: "ec2-52-1-20-236.compute-1.amazonaws.com",
    port: 5432,
    dialect: "postgres",
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false // <<<<<<< YOU NEED THIS
        }
    },
});

// const connetion = new Sequelize("syspatrimonio", "root", "J6t2hybt26@",{
//     host: "localhost",
//     dialect: "mysql"
// })

module.exports = connetion
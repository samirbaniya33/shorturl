const Sequelize = require('sequelize');
const sequelize = new Sequelize(
    {
        host: 'localhost',
        dialect: 'mysql',
        port: 3306,
        user: 'root',
        password: ',
        dialectOptions: {
        requestTimeout: 100000
        }
    }
);

var db = {};
console.log(sequelize)
db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;

// try{
//     sequelize.authenticate();
//     console.log("connection successful")
// }catch(e){
//     console.log("unable to connect",e)
// }
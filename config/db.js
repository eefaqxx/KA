const { Sequelize } = require("sequelize");

const sequelize = new Sequelize({
  host: "sql.freedb.tech",
  dialect: "mysql",
  username: "freedb_eefaqxx",
  password: "*FcET?gHg73qDs7",
  database: "freedb_freedb_cc",
});

module.exports = sequelize;

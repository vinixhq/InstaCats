const { DataTypes } = require("sequelize");

const db = require("../db/conn");

//Importar as tabelas para o relacionamento
const User = require("./User");
const Publication = require("./Publication");

const Like = db.define("Like", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
});

User.belongsToMany(Publication, { through: "Like" });
Publication.belongsToMany(User, { through: "Like" });

module.exports = Like;
  
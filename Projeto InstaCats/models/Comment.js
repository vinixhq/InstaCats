const { DataTypes } = require("sequelize");

const db = require("../db/conn");

//Importar as tabelas para o relacionamento
const User = require("./User");
const Publication = require("./Publication");

const Comment = db.define("Comment", {
  comment: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

User.belongsToMany(Publication, { through: "Comment" });
Publication.belongsToMany(User, { through: "Comment" });

module.exports = Comment;
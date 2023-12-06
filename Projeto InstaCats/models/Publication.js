const { DataTypes } = require("sequelize");

const db = require("../db/conn");

const Publication = db.define("Publication", {
  image: {
    type: DataTypes.STRING,
    allowNull: false,
    require: true,
  },
});

module.exports = Publication;

// Importando o ORM sequelize
const { DataTypes } = require("sequelize");
// Arquivo que faz conexão da API com o banco de dados.
const db = require("../db/conn");

// Criando o model de User
// O model de User é a representação da nossa tabela users do banco de dados.
// O model de User contém a estrutura da nossa tabela users no banco de dados.
const User = db.define("User", {
    // No primeiro parâmetro passamos no nome do nosso model.

    // No segundo parâmetro da função define(), passamos um objeto contendo as propriedades que vão representar os campos da nossa tabela de users.
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        require: true
    },

    email: {
        type: DataTypes.STRING,
        allowNull: false,
        require: true
    },

    password: {
        type: DataTypes.STRING,
        allowNull: false,
        require: true
    }
});


// Exportando o módulo de User, para utilizar ele em outros arquivos da aplicação.
module.exports = User;
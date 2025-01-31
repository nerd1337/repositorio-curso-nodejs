const Sequelize = require('sequelize');
const connection = require('./database');

// Criando a Model (Tabela) de Respostas
// Essa tabela deve se relacionar com a tabela de Perguntas

const Resposta = connection.define('respostas', {
    corpo: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    perguntaId: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
});

Resposta.sync({force: false});
module.exports = Resposta;
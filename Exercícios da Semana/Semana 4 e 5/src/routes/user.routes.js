const express = require('express');
const userRoutesV1 = express.Router();
const { criarBaseDeDadosDeUsuario } = require('../../controllers/user');

userRoutesV1.post('/user/criarArquivo', criarBaseDeDadosDeUsuario);

module.exports = userRoutesV1;
const express = require("express");

const { userRegisterFunction, userLogin } = require("../Controllers/Auth");
const AuthRoutes = express.Router();

AuthRoutes.post("/register",userRegisterFunction)

AuthRoutes.post("/login",userLogin)

module.exports = {AuthRoutes};
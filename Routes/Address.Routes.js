
const express = require('express');
const { AuthMiddleware } = require('../middleware/Auth.middleware');
const { userAddressFunction, userAddAddressfunction } = require('../Controllers/Address');

const AddressRoute = express.Router();

AddressRoute.get('/',AuthMiddleware,userAddressFunction)

AddressRoute.post('/add',AuthMiddleware,userAddAddressfunction)

module.exports = {AddressRoute}
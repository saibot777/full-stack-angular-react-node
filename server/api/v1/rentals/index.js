// const middleware = require("../../../middlewares");

const express = require('express');
const router = express.Router({ mergeParams: true });
const controller = require('./controller');

router.get('/list', controller.list);

module.exports = router;
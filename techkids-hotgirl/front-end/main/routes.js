const express = require('express');
const bcryptjs = require('bcryptjs');
const mainfrontEndRoutes = express();
const path = require('path');
mainfrontEndRoutes.get('/',(req, res) => {
    res.status(200).sendFile(path.resolve(__dirname + "/main.html"));
});
module.exports = mainfrontEndRoutes;


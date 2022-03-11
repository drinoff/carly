const mongoose = require("mongoose");

function initDB(connectionString) {
    return mongoose.connect(connectionString);
}

module.exports = initDB;

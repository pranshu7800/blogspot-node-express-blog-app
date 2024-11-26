const mongoose = require("mongoose");

function connectToDB(URL){
    return mongoose.connect(URL);
}

module.exports = { 
    connectToDB,
};
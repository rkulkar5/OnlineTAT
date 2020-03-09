var mongoose = require('mongoose');
var usersSchema = new mongoose.Schema({
    userName: {
        type: String
    },
    password : {
        type : String
    }

});

mongoose.model("Users", usersSchema)
const moongose = require("mongoose");

const connect=() =>{
    return  moongose.connect(
        'mongodb://localhost:27017/Job_Portal_Web1'
    );
}


module.exports = connect;
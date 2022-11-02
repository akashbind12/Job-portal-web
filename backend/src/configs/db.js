const moongose = require("mongoose");

const connect=() =>{
    return  moongose.connect(
        'mongodb://localhost:27017/Job_Portal_Web_New'
    );
}


module.exports = connect;
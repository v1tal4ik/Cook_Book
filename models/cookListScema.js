const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cookListScema = new Schema({
    id: {
        type: Number,
        required: [true, 'Id is undefined'],
        unique:true
    },
    date:{
        type:String
    },
    name:{
        type:String
    },
    description:{
        type:String
    },
    img:{
        type:String
    },
    versions:[
        {
            date:String,
            name:String,
            description:String,
            img:String
        }
    ]
}, {
    versionKey: false
});

const cookList = mongoose.model('cookList', cookListScema);

module.exports = cookList;
const mongoose = require('mongoose');

const userLoginSchema = mongoose.Schema({
firstName:{
    type:String,
    require:true
},
lastName:{
    type:String,
    require:true
},
email:{
    type:String,
    require:true
},
password:{
    type:String,
    require:true
},
role:{
    type:String,
    enum:['user','admin'],
    default:'user'
},
joinedAt:{
    type:Date,
    default:Date.now()
},
Cart:[{
    type:mongoose.Schema.Types.ObjectId
}]
});

module.exports = mongoose.model('user',userLoginSchema);
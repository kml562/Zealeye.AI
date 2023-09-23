import mongoose from 'mongoose';

const { Schema,model}= mongoose;

const newschema = new Schema({
Title:{
    type:String,
    required:true,
    trim:true
},


Description:{
    type:String,
    required:true,
    trim:true
},

Amount:{

    type:Number,
    required:true
},
Date:{
    type:Date,
    required:true
},
isDeleted:{
    type:Boolean,
    default:false
}
});

const  exmodel= new model("Expense",newschema);
export default exmodel;
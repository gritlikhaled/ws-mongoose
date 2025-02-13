const { default: mongoose } = require("mongoose");


const personSchema = new mongoose.Schema(
    {
        name:{
            type: String,
            require: true,
        },
        email:{
            type:String,
            required: true,
            unique: true,
        },
        age:{
            type: Number,
        },
        favoriteFoods:[]
    },
    {
        timestamps:true,
    }
);

const Person = mongoose.model("person",personSchema);
module.exports = Person

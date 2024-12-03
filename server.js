//require express
const express = require('express')
//require dotenv
require('dotenv').config()

//instance of express
const app = express()

const connectDB = require('./config/connectDB');
const Person = require('./models/Person');
connectDB();

//toDO: CRUD
const arrayPersons = {
    name:"Hamdi",
    email: "Hamdi@gmail.com",
    age:25,
    favoritFoods:["lablebi","hargma"],

    name:"Lacost",
    email: "Lacost@gmail.com",
    age:25,
    favoritFoods:["lablebi","hargma"],

    name:"Ammar",
    email: "Ammar@gmail.com",
    age:25,
    favoritFoods:["lablebi","hargma"],


}
//insert many persons

async function insertPersons(arr) {
    try {
        const personToInsert = await Person.insertMany(arr);
        console.log("the list of person is ",personToInsert);
    } catch (error) {
        console.log(error);
        
    }
    
}

// insertPersons(arrayPersons);

//find

async function showPersons() {
    try {
        const personList = await Person.find();
        console.log("the list of person is ", personList);
        
    } catch (error) {
        console.log(error);
        
    }
}

//showPersons
async function findPersons(id) {
    try {
        const personToFind =await Person.findById(id);
        console.log("the person is ", personToFind);
    } catch (error) {
        console.log(error);
    }
}

//findPersons("")
async function findPersonsByName(name) {
    try {
        const personToFind = await Person.findOne({name: name});
        console.log(`the person with this name: ${name}`,personToFind);
    } catch (error) {
        console.log(error);
    }
}
//findPersonsByName("ammar");

//UPDATE

async function updateAge(id,age) {      
    try {
        const personToUpdate = await Person.findByIdAndUpdate(
            id,
            {$set: {age:age}},
            {new: true},
        );
        console.log("age updated successfully",personToUpdate);
    } catch (error) {
        console.log(error)
    }
}
// updateAge("67459fdf37c16a3970771311",5)
async function updateFood(id,food) {
    try {
        const personToUpdate =await Person.findOneAndUpdate(
            id,
            
            { $push:{favoritFoods : food} },

            
            {new: true},
    );
        console.log(personToUpdate);
    } catch (error) {
        console.log(error);
        
    }
}
// updateFood("67459fdf37c16a3970771311", "Pasta");

//

//PORT
const PORT = process.env.PORT || 7000;

//server
app.listen(PORT, (err) => {
    err ? console.log(err)
    :console.log(`the server is running on https://localhost:${PORT}`)
});
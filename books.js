const mongoose = require('mongoose');


// creating the book schema(class)
const bookSchema = new mongoose.Schema({
    title:String, // title of the book
    description:String, // description of the book
    status:String, // the status of the book 
    email: String // email of the user associated with the book

});

// creating the book model using the book schema
const Book = mongoose.model('Book', bookSchema);

// exporting the book model to make it available in other files
module.exports = Book;


// import { Schema, model } from 'mongoose';
// // const mongoose = require('mongoose');


// // creating the book schema(class)
// const bookSchema = new Schema({
//     title:String, // title of the book
//     description:String, // description of the book
//     status:String, // the status of the book 
//     email: String // email of the user associated with the book

// });

// // creating the book model using the book schema
// const Book = model('Book', bookSchema);

// // exporting the book model to make it available in other files
// export default Book;









  
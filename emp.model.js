// business.model.js

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Business
let emp = new Schema({
  first_Name: {
    type: String
  },
  last_Name: {
    type: String
  },
  Email: {
    type: Number
  },
  phoneNo: {
    type: String
  },
  currentAddress: {
    type: String
  },
  permanentAddress: {
    type: String
  },
  Image: {
    type: String
  },
  Cource: {
    type: String
  },
  College: {
    type: String
  },
  Year: {
    type: String
  },
  Percentage: {
    type: String
  },
  Company: {
    type: String
  },
  From: {
    type: String
  },
  To: {
    type: String
  },
  Desgination: {
    type: String
  },
  Linkedln: {
    type: String
  },
  Github: {
    type: String
  },
  Facebook: {
    type: String
  },
  Hobbies: {
    type: String
  }
  
},{
    collection: 'emp_1'
});

module.exports = mongoose.model('emp', emp);
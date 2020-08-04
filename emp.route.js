// business.route.js

const express = require('express');
const empRoutes = express.Router();

// Require Business model in our routes module
let emp = require('./emp.model');

// Defined store route
empRoutes.route('/add').post(function (req, res) {
  let emp = new emp(req.body);
  emp.save()
    .then(emp => {
      res.status(200).json({'emp': 'emp in added successfully'});
    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    });
});

// Defined get data(index or listing) route
empRoutes.route('/').get(function (req, res) {
    emp.find(function(err, emp_1){
    if(err){
      console.log(err);
    }
    else {
      res.json(emp_1);
    }
  });
});

// Defined edit route
empRoutes.route('/edit/:id').get(function (req, res) {
  let id = req.params.id;
  emp.findById(id, function (err, emp_1){
      res.json(emp_1);
  });
});

//  Defined update route
empRoutes.route('/update/:id').post(function (req, res) {
    emp.findById(req.params.id, function(err, emp_1) {
    if (!emp_1)
      res.status(404).send("data is not found");
    else {
        emp_1.first_Name = req.body.first_Name;
        emp_1.last_Name = req.body.last_Name;
        emp_1.Email = req.body.Email;
        emp_1.phoneNo = req.body.phoneNo;
        emp_1.currentAddress = req.body.currentAddress;
        emp_1.permanentAddress = req.body.permanentAddress;
        emp_1.Image = req.body.Image;
        emp_1.Cource = req.body.Cource;
        emp_1.College = req.body.College;
        emp_1.Year = req.body.Year;
        emp_1.Percentage = req.body.Percentage;
        emp_1.Company = req.body.Company;
        emp_1.From = req.body.From;
        emp_1.To = req.body.To;
        emp_1.Desgination = req.body.Desgination;
        emp_1.Linkedln = req.body.Linkedln;
        emp_1.Github = req.body.Github;
        emp_1.Facebook = req.body.Facebook;
        emp_1.Hobbies = req.body.Hobbies;
         
        emp_1.save().then(emp_1 => {
          res.json('Update complete');
      })
      .catch(err => {
            res.status(400).send("unable to update the database");
      });
    }
  });
});

// Defined delete | remove | destroy route
empRoutes.route('/delete/:id').get(function (req, res) {
    emp.findByIdAndRemove({_id: req.params.id}, function(err, business){
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
});

module.exports = empRoutes;
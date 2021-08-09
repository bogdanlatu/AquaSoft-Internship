const express = require("express");
const employeeRouter = express.Router();
const Employee = require("../models/Employee");

// extragerea tuturor elementelor din tabela de angajati
employeeRouter.get("/all", (req, res) => {
  Employee.find({}).exec((err, documents) => {
    if (err) res.json({ error: "Error trying to search for employees" });
    else res.json({ result: documents });
  });
});

// extragerea unui singur angajat dupa nume
employeeRouter.get("/name/:name", (req, res) => {
  const name = req.params.name;
  Employee.findOne({ Name: name }).exec((err, document) => {
    if (err) res.json({ error: "Error trying to search for employees" });
    else if (document) res.json({ result: document });
    else res.json({ result: "Employee not found" });
  });
});

// Get employee si proiectele alocate
employeeRouter.get("/projects/:employeeId", (req, res) => {
  const employeeId = req.params.employeeId;

  Employee.findById({ _id: employeeId })
    .populate({ path: "Project_Id" })
    .exec((err, document) => {
      if (err) res.json({ error: "Error finding employee" });
      else res.json({ result: document });
    });
});

// POST (inserarea unui nou angajat)
employeeRouter.post("/new", (req, res) => {
  
  const employee = new Employee(req.body);

  // search if name is unique???
  employee.save((err) => {
    if (err) res.json({ error: "Error saving the new employee into db" });
    else res.json({ result : "Successfully created the employee" });
  }); 

});

// PUT (update pe un angajat dupa primary key)
employeeRouter.put("/modify/:employeeId", (req, res) => {
  const employeeId = req.params.employeeId;
  const employee = req.body;

  Employee.findOneAndUpdate(
    { _id: employeeId },
    {
      Name: employee.Name,
      Address: employee.Address,
      Email: employee.Email,
      Hire_Date: employee.Hire_Date,
      Salary: employee.Salary,
      Job_Title: employee.Job_Title,
      Project_Id: employee.Project_Id
    },
    {
      new: true
    },
    (err,employee) => {
      if (err) res.json({ error: "Error updating the employee" });
      else if(employee) {
        res.json({ result: employee });
      }
      else res.json({message: "Can't find employee"})
    });
});

// DELETE (remove dupa primary key)
employeeRouter.delete("/delete/:employeeId", (req, res) => {
  const employeeId = req.params.employeeId;

  Employee.findOneAndDelete({ _id: employeeId }).exec((err) => {
    if (err) res.json({ error: "Error deleting the employee" });
    else {
      res.json({ message: "Employee successfully deleted" });
    }
  });
});

module.exports = employeeRouter;

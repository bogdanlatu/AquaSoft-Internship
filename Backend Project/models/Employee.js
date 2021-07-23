const mongoose = require('mongoose');

const EmployeeSchema = new mongoose.Schema ({
    Name : {
        type : String
    },
    Address : {
        type : String
    },
    Email : {
        type : String
    },
    Hire_Date : {
        type : Date
    },
    Salary : {
        type : Number
    },
    Job_Title : {
        type : String
    },
    Project_Id : [{type : mongoose.Schema.Types.ObjectId, ref: 'Project'}]
});

module.exports = mongoose.model('Employee',EmployeeSchema,'Employees');
const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema ({
    Project_Name : {
        type : String
    },
    Start_Date : {
        type : Date
    },
    Planned_End_Date : {
        type : Date
    },
    Description : {
        type : String
    },
    Project_Code : {
        type : String
    }
});

module.exports = mongoose.model('Project',ProjectSchema,'Projects');
const express = require('express');
const projectRouter = express.Router();
const Project = require('../models/Project');

//extragerea tuturor elementelor din tabela de proiecte
projectRouter.get('/all',(req,res)=>{
    Project.find({}).exec((err,documents) => {
        if(err)
            res.json({error : "Error trying to search for projects"});
        else
            res.json({result : documents});
    });
});

// POST inserarea unui nou proiect
projectRouter.post('/new',(req,res)=>{
    const project = new Project(req.body);

    project.save(err => {
        if(err)
            res.json({error : "Error saving the new project into db"});
        else
            res.json({message : "Successfully created project"});
    });
});


// PUT update pe un proiect dupa primary key
projectRouter.put('/modify/:projectId',(req,res)=>{
    const projectId = req.params.projectId;
    const project = req.body;

    Project.updateOne({_id : projectId},
        {
            Project_Name : project.Project_Name,
            Start_Date : project.Start_Date,
            Planned_End_Date : project.Planned_End_Date,
            Description : project.Description,
            Project_Code : project.Project_Code
        }).exec(err => {
		if(err)
            res.json({error : "Error updating the project"});
        else{
            res.json({message : "Project updated successfully"});
        }
	});

});


// DELETE remove dupa primary key/ id
projectRouter.delete('/delete/:projectId',(req,res)=>{
    const projectId = req.params.projectId;

    Project.findOneAndDelete({_id : projectId}).exec(err => {
		if(err)
            res.json({error : "Error deleting the project"});
        else{
            res.json({message : "Project successfully deleted"});
        }
	});
});


module.exports = projectRouter;

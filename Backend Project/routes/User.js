const express = require('express');
const userRouter = express.Router();
const User = require('../models/User');

userRouter.post('/register',(req,res)=>{
	const { Username,Password } = req.body;
	User.findOne({Username},(err,user)=>{
		if(err)
			res.json({message : {msgBody : "Error has occured", msgError: true}});
		if(user)
			res.json({message : {msgBody : "Username is already taken", msgError: true}});
		else{
			const newUser = new User({Username,Password});
			newUser.save(err=>{
				if(err)
					res.json({message : {msgBody : "Error has occured", msgError: true}});
				else
					res.json({message : {msgBody : "Account successfully created", msgError: false}});
			});
		}
	});
});

module.exports = userRouter;
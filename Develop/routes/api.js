const router = require("express").Router();
const Workout = require("../models/workout.js");

//GET workouts
router.get("/api/workouts", function(req, res){
    Workout.find()
        .then(data =>{
            res.json(data)
        })
        .catch(err=>{
            res.json(err)
        })
});


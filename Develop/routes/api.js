const router = require("express").Router();
const Workout = require("../models/workout.js");


//Create new workouts
router.post("/api/workouts", function(req, res) {
    Workout.create({})
    .then(dbWorkout =>{
        res.json(dbWorkout);
    })
    .catch(err =>{
        res.status(400).json(err)
    })
});


//GET workouts
router.get("/api/workouts", function(req, res){
    Workout.find()
        .then(dbWorkout =>{
            res.json(dbWorkout)
        })
        .catch(err=>{
            res.status(400).json(err)
        })
});
//PUT
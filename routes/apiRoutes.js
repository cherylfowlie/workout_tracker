// var express = require("express");
const db = require("../models");
const router = require("express").Router();

router.get("/api/workouts", (req, res) => {
    db.Workout.find({})
        .then((workouts) => {
            res.json(workouts);
        })
        .catch((err) => {
            console.log(err);
        });
});

router.post("/api/workouts", (req, res) => {
    db.Workout.create({})
        .then((workout) => {
            res.json(workout);
        })
        .catch((err) => {
            console.log(err);
        });
});


router.put("/api/workouts/:id", (req, res) => {
    db.Workout.findByIdAndUpdate(
        req.params.id, { $push: { exercises: req.body } }, { new: true }
    )
        .then((workout) => {
            res.json(workout);
        })
        .catch(err => {
            res.json(err);
        });
});

router.get("/api/workouts/range", (req, res) => {
    db.Workout.find()
        .then(workout => {
            res.json(workout)
        })
        .catch(err => {
            res.json(err)
        });
});

module.exports = router;
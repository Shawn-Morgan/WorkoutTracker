const router = require('express').Router();
const db = require("../models/workout");

// get workouts

router.get("/api/workouts", (req, res) => {
    db.find({})
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.json(err);
        });
});

// update exercise or PUT

router.put("/api/workouts/:id", ({ params, body }, res) => {
    console.log(body);
    db.findByIdAndUpdate(
        params.id,
        {
            $push: {
                exercises: body,

            },
        },
        {
            new: true,
            runValidators: true
        }
    )
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.json(err);
        });
});

// build a new workout or create one

router.post("/api/workouts", ({ body }, res) => {
    console.log(body);
    db.create({})
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.json(err);
        });

    res.send('Got a POST request')
});

// get the workouts from range selection

router.get("/api/workouts/range", (req, res) => {
    db.find({}).limit(7)
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.json(err);
        });
});



module.exports = router;
const db = require("../models");
require("mongoose");

module.exports= function (app) {
//Getting all the workouts
app.get("/api/workouts", async (req, res) => {
    try {
        const workouts = await db.Workout.aggregate([
        {
          $addFields: {
            "totalDuration.totalDuration": {
              $sum: "$exercises.duration"
            }
          }
        }]);
      if (!workouts.length) {
        res.status(404).json({message: "No workouts were found"});
      } else {
        res.status(200).json(workoutsData);
      }
    } catch (err) {
      res.status(500).json(err);
    }
  });

//Creating a New Workout
app.post("/api/workouts", async (req, res) => {
    try {
      const workouts = await db.Workout.create(req.body);
      res.status(200).json(workouts);
    } catch (err) {
      res.status(500).json(err);
    }
  });

//Adding an excercise 
app.put("/api/workouts/:id", async (req, res) => {
    try {
      const workouts = await db.Workout.findByIdAndUpdate({_id: req.params.id}, {$push: {exercises: req.body}});
      console.log(workouts);
      res.status(200).json(req.body);
    } catch (err) {
      res.status(500).json(err);
    }
  });

//Getting the stats
app.get("/api/workouts/range", async (req, res) => {
    try {
      const workouts = await db.Workout.aggregate([{$sort: {day: -1}},
      {$limit: 7},
      {
        $addFields: {
          "totalDuration.totalDuration": {
            $sum: "$exercises.duration"
          }
        }
      }]);
      const workoutsToShow = workouts.reverse();
      if (!workoutsToShow.length) {
        res.status(404).json({message: "No workouts were found"});
      } else {
        res.status(200).json(workoutsToShow);
      }
    } catch (err) {
      res.status(500).json(err);
    }
  });
}
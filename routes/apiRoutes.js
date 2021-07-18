const db = require("../models");

require("mongoose");

module.exports = (app) => {
//Get all the workouts
    app.get("/workout", async (req, res) => {
        try {
         const workoutData= await db.Workout.find({});
         res.jason(workoutData);
        } catch(error) {
            console.log(error)
            res.sendStatus(500)
        }
        });


};

// const db = require("../models");

// require("mongoose");

// module.exports = (app) => {
// //Get all the workouts
//     app.get("api/workouts", async (req, res) => {
//         try {
//          const workoutData= await db.Workout.find({});
//          res.jason(workoutData);
//         } catch(error) {
//             console.log(error)
//             res.sendStatus(500)
//         }
//         });
// //Add exercise
//  app.post("/api/workouts", (req, res) => {
//       db.Workout.create({}).
//       then(data => res.json(data))
//       .catch(err => {

//         console.log("error", err);

//         res.json(err);

//       });
//  })


// };

const db = require("../models");

require("mongoose");




module.exports = (app) => {


    //Create a Workout
    app.post("/api/workouts", (req, res) => {
        db.Workout.create({})
        .then(data => res.json(data))
        .catch(err => {
            console.log(err);
            res.sendStatus(500);
          });
    });

    //Add Exercise
    app.put("/api/workouts/:id", (req, res) => {
       db.Workout.findByIdAndUpdate(req.params.id, {$push: {exercises: req.body}},
            {new: true, runValidators: true})   
        .then(data => res.json(data))
        .catch(err => {
            console.log(err);
            res.sendStatus(500);
          });

    });





};
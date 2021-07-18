var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var workoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now()
    },
    exercises: {
        type: {
         type: String,
         required: true,
        },
        name: {
         type: String,
         required: true,
        },
        duration: {
          type: Number,
          required: true,
        },
        weigth: {
            type: Number,
        },
        reps: {
            type: Number,
        },
        sets: {
            type: Number,
        },
        distance: {
            type: Number,
        },  
    },   
});

// workoutSchema.methods.isCardio = function () {
//  if (this.type===cardio) {
//     if(!this.distance) {
//     console.log
//     }
//  }      
// } 

var Workout= mongoose.model("workout", workoutSchema);
module.exports= Workout;
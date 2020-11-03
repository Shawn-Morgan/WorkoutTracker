const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutSchema = new Schema(
    {
    day: {
        type: Date,
        default: Date.now
    },

    exercises: [
    {
        type: {
            type: String,
            trim: true,
            required: "What type of exercise?"
        },
        name: {
            type: String,
            trim: true,
            required: "What is the exercise name?"
        },
        duration: {
            type: Number,
            required: "How long is the duration of the exercise?"
        },
        weight: {
            type: Number
        },
        reps: {
            type: Number
        },
        sets: {
            type: Number
        },
        distance: {
            type: Number
        }
        }
        ]
    },
    
    {toJSON: {
        virtuals: true
    }
    }
);

// tutor help
workoutSchema.virtual("totalDuration").get(function () {

  return this.exercises.reduce((total, exercise) => {
    return total + exercise.duration;
  }, 0);
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
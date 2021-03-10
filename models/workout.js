const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  day: {
    type: Date,
    default: new Date(),
  },
  exercises: [
    {
      name: {
        type: String,
        trim: true,
        required: "Enter name of workout",
      },
      type: {
        type: String,
        trim: true,
        required: "Enter type of workout",
      },
      duration: {
        type: Number,
        required: "Enter duration of workout in minutes",
      },
      weight: {
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
  ],
}, {
    toJSON: {
        virtuals: true
    }
});

workoutSchema.virtual("totalDuration").get(function(){
    return this.exercises.reduce((total, exercise) =>{
        return total + exercise.duration;
    }, 0);
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;

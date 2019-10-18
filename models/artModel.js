const mongoose = require("mongoose");
// const Tour = require("./../models/tourModel");
// const beautifyUnique = require('mongoose-beautiful-unique-validation');

const artSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "An art piece must have a name"],
      unique: true,
      trim: true,
      maxlength: [40, "Your art name is too long"],
      minlength: [7, "Your art name is too short"]
    },
    summary: {
      type: String,
      required: [true, "An art piece must have a summary"],
      trim: true,
      maxlength: [40, "Your art summary is too long"],
      minlength: [7, "Your art summary is too short"]
    },
    details: {
      type: String,
      required: [true, "An art piece must have details"],
      trim: true,
      maxlength: [400, "Your art details are too long"],
      minlength: [7, "Your art details are too short"]
    },
    width: Number,
    height: Number,
    depth: Number,
    unit: {
      type: String,
      default: "cm",
      trim: true,
      enum: ["cm", "m", "mm", "in"]
    },
    tags: [String],
    artist: {
      type: String,
      required: [true, "An art piece must have an artist"],
      trim: true,
      maxlength: [30, "Your artist name is too long"],
      minlength: [7, "Your artist name is too short"]
    },
    description: {
      type: String,
      required: [true, "An art piece must have a summary"],
      trim: true,
      maxlength: [40, "Your art summary is too long"],
      minlength: [7, "Your art summary is too short"]
    },
    price: {
      type: Number,
      required: [true, "An art piece must have a price"]
    },
    image: {
      type: String,
      required: [true, "An art piece must have a picture"],
      trim: true
    },
    createdAt: {
      type: Date,
      default: Date.now(),
      select: false
    }
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
  }
);

// reviewSchema.pre(/^find/, function(next) {
//   this
//     // .populate({
//     //     path: 'tour',
//     //     // populate: {
//     //     //     path: 'guides'
//     //     // },
//     //     select: 'name guides'
//     // })
//     .populate({
//       path: "user",
//       select: "name photo"
//     });
//   next();
// });

// reviewSchema.statics.calcAverageRatings = async function(tourId) {
//   const stats = await this.aggregate([
//     {
//       $match: { tour: tourId }
//     },
//     {
//       $group: {
//         _id: "$tour",
//         nRatings: { $sum: 1 },
//         avgRatings: { $avg: "$rating" }
//       }
//     }
//   ]);
//   await Tour.findByIdAndUpdate(tourId, {
//     ratingsQuantity: stats[0].nRatings,
//     ratingsAverage: Math.floor(stats[0].avgRatings * 100) / 100
//   });
// };

// reviewSchema.post("save", function() {
//   this.constructor.calcAverageRatings(this.tour);
// });

// reviewSchema.pre(/^findOneAnd/, async function(next) {
//   this.r = await this.findOne();

//   next();
// });

// reviewSchema.post(/^findOneAnd/, async function() {
//   // await this.findOne(); does NOT work here, query has already executed
//   await this.r.constructor.calcAverageRatings(this.r.tour);
// });

// reviewSchema.index({ user: 1, tour: 1 }, { unique: true });
// What I eventually did with the problematic UNIQUE INDEXES i couldnt find anywhere was to go to INDEXES tab on compass
// reviewSchema.plugin(beautifyUnique);
const Art = mongoose.model("Art", artSchema);
module.exports = Art;

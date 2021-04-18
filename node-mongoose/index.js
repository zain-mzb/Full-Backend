const mongoose = require("mongoose");

const Dishes = require("./models/dishes");

const url = "mongodb://localhost:27017/confusion";

const connect = mongoose.connect(url);

connect.then((db) => {
  console.log("Connected correctly to server");

  Dishes.create({
    name: "Uthapizza",
    description: "test",
  })
    .then((dish) => {
      console.log(dish);

      return Dishes.findByIdAndUpdate(
        dish._id,
        {
          $set: { description: " Updated test" },
        },
        {
          new: true,
        }
      ).exec();
    })
    .then((dish) => {
      console.log(Dishes);

      dish.comments.push({
        rating: 5,
        comment: "Im getton a sinking feeling!",
        author: "Rick Astley",
      });
      return dish.save();
    })
    .then((dish) => {
      console.log(dish);
      return Dishes.remove({});
    })
    .then(() => {
      return mongoose.connection.close();
    })
    .catch((err) => {
      console.log(err);
    });
});

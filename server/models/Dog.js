const mongoose = require("mongoose");

const dogSchema = new mongoose.Schema({
  paramOne: String,
  paramTwo: String,
  paramThree: String,
  paramFour: [String],
});

const Dog = mongoose.model("Dog", dogSchema);

module.exports = {
  model: Dog,
  schema: dogSchema,
};

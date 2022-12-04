const mongoose = require("mongoose");

const Schema = mongoose.Schema;

let recipeSchema = new Schema({
    name: String,
    instructions: [String],
    ingredients: [String]
});

module.exports = mongoose.model("Recipes", recipeSchema);
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ApiSchema = new Schema({
  title: String,
  body: String
});

const Api = mongoose.model("Api", ApiSchema);

module.exports = Api;

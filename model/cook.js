const mongoose = require("mongoose")
const cookSchema = new mongoose.Schema({
    name: String,
    ingredients:String,
    recipe:String,
    image: String
  
   
})

const model = mongoose.model("cook", cookSchema)
module.exports = model
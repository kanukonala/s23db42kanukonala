const mongoose = require("mongoose")
const bookSchema = mongoose.Schema({
book_name: String,
year_published: String,
author: String
})
module.exports = mongoose.model("bookCostume",bookSchema)



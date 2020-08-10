const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate-v2')

const bookSchema = new mongoose.Schema(
  {
    title: String,
    ISBN: String,
    stock: Number,
    author: String,
    description: String,
    category: String
  },
  {
    versionKey: false,
    timestamps: true
  }
)

bookSchema.plugin(mongoosePaginate)
module.exports = mongoose.model('Book', bookSchema)

const mongoose = require('mongoose')

function connectToDb() {
  return mongoose.connect(
    'mongodb://localhost:27017/lab-express-rooms-with-reviews',
    {
      useCreateIndex: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    },
  )
}

module.exports = connectToDb

const mongoose = require('mongoose');

if (process.env.MONGODB_URI) {
  mongoose.connect(process.env.MONGODB_URI);
}
else {
  const connectionString = "mongodb://localhost/questions";
  mongoose.connect(connectionString, { useNewUrlParser: true})
  .then(() => {
    console.log("connected to mongo at: " + connectionString);
  });
}
mongoose.connection.on('error', function(err) {
  console.error('MongoDB connection error: ' + err);
  process.exit(-1);
}
);
mongoose.connection.once('open', function() {
  console.log("Mongoose has connected to MongoDB!");
});

module.exports = mongoose

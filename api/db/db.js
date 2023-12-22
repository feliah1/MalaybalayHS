const Mongoose = require("mongoose")
const uri = "mongodb+srv://posibiliteams:HcewR6ThXyepwWg7@cluster0.12xmewk.mongodb.net/testdb?retryWrites=true&w=majority";

const connectDB = async () => {
  await Mongoose.connect(
    uri,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true
    }
  );
  console.log("MongoDB Connected")
}

module.exports = connectDB

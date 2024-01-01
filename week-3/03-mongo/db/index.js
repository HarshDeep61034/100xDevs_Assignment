const mongoose = require("mongoose");

// Connect to MongoDB
function connectToDb() {
  mongoose
    .connect("mongodb://localhost:27017/CourseSite")
    .then(() => console.log("MONGODB CONNECTED"));
}
// Define schemas
const AdminSchema = new mongoose.Schema({
  username: String,
  password: String,
  courses: [{ type: mongoose.Schema.Types.ObjectId, ref: "Course" }],
});

const UserSchema = new mongoose.Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
});

const CourseSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  imageLink: { type: String, required: true },
});

const Admin = mongoose.model("Admin", AdminSchema);
const User = mongoose.model("User", UserSchema);
const Course = mongoose.model("Course", CourseSchema);

module.exports = {
  connectToDb,
  Admin,
  User,
  Course,
};


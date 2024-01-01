const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db");
// User Routes
router.post("/signup", (req, res) => {
  // Implement user signup logic
  const { username, password } = req.headers;
  User.create({ username, password });
  res.json({ message: "User created successfully" });
});

router.get("/courses", async (req, res) => {
  // Implement listing all courses logic
  const courses = await Course.find({});
  res.json(courses);
});

router.post("/courses/:courseId", userMiddleware, async (req, res) => {
  // Implement course purchase logic
  const { username } = req.headers;
  const { courseId } = req.params;
  const course = await Course.findOne({ id: courseId });
  const user = await User.findOneAndUpdate(
    { username },
    { $push: { courses: course } },
    { new: true },
  );
  res.json({ message: "Course purchased successfully" });
});

router.get("/purchasedCourses", userMiddleware, async (req, res) => {
  const { username } = req.headers;
  const user = await User.findOne({ username });
  console.log(user);
  res.json(user);
});

module.exports = router;

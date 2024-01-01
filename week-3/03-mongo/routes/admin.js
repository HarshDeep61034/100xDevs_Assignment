const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();
const { Admin, Course } = require("../db");
// Admin Routes
router.post("/signup", async (req, res) => {
  const { username, password } = req.headers;
  Admin.create({ username, password });
  res.json({ message: "Admin created successfully" });
});

router.post("/courses", adminMiddleware, async (req, res) => {
  // Implement course creation logic
  const { title, description, price, imageLink } = req.body;
  const id = (await Course.countDocuments()) + 1;
  Course.create({ title, description, price, imageLink, id });
  res.json({
    message: "Course created successfully",
    courseId: id,
  });
});

router.get("/courses", adminMiddleware, async (req, res) => {
  // Implement fetching all courses logic
  const courses = await Course.find({});
  console.log(courses);
  res.send(courses);
});

module.exports = router;


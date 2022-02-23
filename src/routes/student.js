const router = require("express").Router();

const Student = require("../controllers/student");

router.get("/api/student", Student.getAllStudents);
router.get("/api/student/:user_id", Student.getStudentsById);
router.post("/api/student", Student.createStudent);
router.put("/api/student/:user_id", Student.updateStudent);
router.delete("/api/student/:user_id", Student.deleteStudent);

module.exports = router;

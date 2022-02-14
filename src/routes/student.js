const router = require("express").Router();

const Student = require("../controllers/student");

router.get("/getAllStudents", Student.getAllStudents);
router.get("/getStudentsById/:id", Student.getStudentsById);
router.post("/createStudent", Student.createStudent);
router.post("/updateStudent/:id", Student.updateStudent);
router.post("/deleteStudent/:id", Student.deleteStudent);

module.exports = router;
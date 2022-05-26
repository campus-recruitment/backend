const router = require("express").Router();

const Student = require("../controllers/student");

router.get("/api/student", Student.getAllStudents);
router.get("/api/student/:user_id", Student.getStudentsById);
router.get("/api/student/department/:departmentCode", Student.getStudentsByDepartment);
router.put("/api/student/:user_id/add-visitor", Student.updateAppliedVisitor);
router.put("/api/student/:user_id/save-visitor", Student.updateSavedVisitor);
router.put("/api/student/:user_id/remove-visitor", Student.removeSavedVisitor);
router.put("/api/student/:user_id", Student.updateStudent);
router.delete("/api/student/:user_id", Student.deleteStudent);

module.exports = router;

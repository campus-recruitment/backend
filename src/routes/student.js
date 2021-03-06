const router = require("express").Router();

const Student = require("../controllers/student");

router.get("/api/student", Student.getAllStudents);
router.get("/api/student/:user_id", Student.getStudentsById);
router.get("/api/student/department/:departmentCode", Student.getStudentsByDepartment);
router.get("/api/student/department/:graduationYear", Student.getStudentsByYear);
router.put("/api/student/:user_id/add-visitor", Student.updateAppliedVisitor);
router.put("/api/student/:user_id/select-visitor", Student.updateSelectedVisitor);
router.put("/api/student/:user_id/remove-selected-visitor", Student.removeSelectedVisitor);
router.put("/api/student/:user_id/save-visitor", Student.updateSavedVisitor);
router.put("/api/student/:user_id/remove-visitor", Student.removeSavedVisitor);
router.put("/api/student/:user_id", Student.updateStudent);
router.delete("/api/student/:user_id", Student.deleteStudent);

module.exports = router;

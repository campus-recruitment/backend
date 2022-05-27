const router = require("express").Router();

const Visitors = require("../controllers/Visitors_controllers");

router.get("/api/visitor", Visitors.getAllVisitors);
router.get("/api/visitor/:_id", Visitors.getVisitorsById);
// router.get("/api/visitor/:_id", Visitors.getAppliedStudents);
router.post("/api/visitor", Visitors.createVisitors);
router.put("/api/visitor/:_id", Visitors.updateVisitors);
router.put("/api/visitor/applied/:_id", Visitors.updateAppliedStudents);
router.put("/api/visitor/selected/:_id", Visitors.updateSelectedStudents);
router.put("/api/visitor/remove-selected/:_id", Visitors.removeSelectedStudents);
router.put("/api/visitor/saved/:_id", Visitors.updateSavedStudents);
router.put("/api/visitor/remove/:_id", Visitors.removeSavedStudents);
router.delete("/api/visitor/:_id", Visitors.deleteVisitors);

module.exports = router;

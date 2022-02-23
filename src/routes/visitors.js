const router = require("express").Router();

const Visitors = require("../controllers/Visitors_controllers");

router.get("/api/visitor", Visitors.getAllVisitors);
router.get("/api/visitor/:_id", Visitors.getVisitorsById);
// router.get("/api/visitor/:_id", Visitors.getAppliedStudents);
router.post("/api/visitor", Visitors.createVisitors);
router.put("/api/visitor/:_id", Visitors.updateVisitors);
router.delete("/api/visitor/:_id", Visitors.deleteVisitors);

module.exports = router;

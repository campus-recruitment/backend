const router = require("express").Router();

const Notice = require("../controllers/Notice");

router.get("/api/notice", Notice.getAllNotices);
router.get("/api/notice/:_id", Notice.getNoticesById);
router.post("/api/notice", Notice.createNotice);
router.put("/api/notice/:_id", Notice.updateNotice);
router.delete("/api/notice/:_id", Notice.deleteNotice);
router.get("/api/notice/date/:date", Notice.getNoticesByDate);

module.exports = router;

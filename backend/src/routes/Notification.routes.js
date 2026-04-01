const express = require('express');
const router = express.Router();

const { getNotifyList, markNotifyAsRead } = require('../controllers/Notification.controller');
const { protectedRoute } = require('../middlewares/authHandler');

router.get("/", protectedRoute, getNotifyList);
router.put("/read-notify", protectedRoute, markNotifyAsRead);

module.exports = router;


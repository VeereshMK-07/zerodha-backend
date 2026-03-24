const express = require("express");
const router = express.Router();
const { sendOtp, verifyOtp, verifyUser, logout, saveName } = require("../controllers/authController");

router.post("/send-otp", sendOtp);
router.post("/verify-otp", verifyOtp);
router.get("/verify-user", verifyUser);
router.post("/save-name", saveName);
router.post("/logout", logout);




router.get("/check-auth", (req, res) => {
  if (req.cookies.token) {
    return res.status(200).json({ success: true });
  }
  return res.status(401).json({ success: false });
});



module.exports = router;
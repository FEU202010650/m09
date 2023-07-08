const express = require('express');
const router = express.Router();
const courseControllers = require('../controllers/courseControllers');

router.post('/checkEmail', (req, res) => {
  courseControllers.checkEmailExists(req.body)
    .then(resultFromController => res.send(resultFromController));
});

module.exports = router;

const express = require('express');
const router = express.Router();

router.get('', (req, res) => {
	res.send('Hello World! I am creating a blog app');
});

module.exports = router;

const express = require('express');
const router = express.Router();
const Post = require('../models/Post');
const User = require('../models/User');

const adminLayout = '../views/layouts/admin';
/*
Get
Admin - login page
*/

router.get('/admin', async (req, res) => {
	try {
		const locals = {
			title: 'Admin',
			description: 'Simple blog created with NodeJS, Express & MongoDB.',
		};

		res.render('admin/login', { locals, layout: adminLayout });
	} catch (error) {
		console.log(error);
	}
});

/*
POST
Admin - Check Login
*/

router.post('/admin', async (req, res) => {
	try {
		const { username, password } = req.body;
		
        


        
		res.redirect('admin/');
	} catch (error) {
		console.log(error);
	}
});

module.exports = router;

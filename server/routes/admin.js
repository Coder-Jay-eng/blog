const express = require('express');
const router = express.Router();
const Post = require('../models/Post');
const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const adminLayout = '../views/layouts/admin';
/* const jwtSecret = process.env.JWT_SECRET;
 */

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

		if (req.body.username === 'admin' && req.body.password === 'password') {
			res.send('You are successfully logged in!');
		} else {
			res.send('Invalid username or password');
		}
	} catch (error) {
		console.log(error);
	}
});

/*
POST
Admin - Check Login
*/

// router.get('/dashboard', async (req, res) => {
// res.render('admin/dashboard');
// });

/*
POST
Admin - Register
*/

router.post('/register', async (req, res) => {
	try {
		const { username, password } = req.body;
		const hashedPassword = await bcrypt.hash(password, 10);

		try {
			const user = await User.create({ username, password: hashedPassword });
			res.status(201).json({ message: 'User Created', user });
		} catch (error) {
			if (error.code === 11000) {
				res.status(409).json({ message: 'User already in use' });
			}
			res.status(500).json({ message: 'Internal server error' });
		}
	} catch (error) {
		console.log(error);
	}
});

module.exports = router;

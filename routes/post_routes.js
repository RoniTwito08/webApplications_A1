const express = require('express');
const router = express.Router();
const Post = require('../models/post_models');
const { createPost , updatePost} = require('../controllers/post_controllers');

// Create a new post
router.post('/create', createPost);

// Update a post
router.post('/update', updatePost);

module.exports = router;




const express = require('express');
const router = express.Router();
const Post = require('../models/post_models');
const { createPost } = require('../controllers/post_controllers');

// Create a new post
router.post('/', createPost);

module.exports = router;




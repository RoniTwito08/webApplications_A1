const express = require('express');
const router = express.Router();
const Post = require('../models/post_models');

// Create a new post
const createPost = async (req, res) => {
    try {
        const post = new Post(req.body);
        await post.create();
        res.status(201).json("post created");
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

module.exports = {createPost};
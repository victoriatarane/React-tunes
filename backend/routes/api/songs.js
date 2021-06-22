const express = require('express');
const asyncHandler = require('express-async-handler');

const { Song, Artist, Review, Like } = require('../../db/models');

const router = express.Router();

router.get('/', asyncHandler(async function (_req, res) {
    const songs = await Songs.findAll(
        {
            include: [{
                model: Artist
            },{
                model: Review
            }, {
                model: Like
            }]
        }
    );
    return res.json(songs);
}));

module.exports = router;
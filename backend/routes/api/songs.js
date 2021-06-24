const express = require('express');
const asyncHandler = require('express-async-handler');
const csrf = require('csurf');
const csrfProtection = csrf({ cookie: true });
const { requireAuth } = require('../../utils/auth');

const { Song, Artist, Review, Like } = require('../../db/models');

const router = express.Router();

router.get('/', asyncHandler(async function (_req, res) {
    const songs = await Song.findAll(
        {
            include: [
                Artist,
                Like,
                Review,
                // },{
                //     model: Review
                // }, {
                //     model: Like
            ]
        }
    );
    return res.json(songs);
}));

router.post('/:id(\\d+)/like', csrfProtection, requireAuth, asyncHandler(async (req, res) => {
    const { userId, songId, likes } = req.body;
    console.log(userId, songId, likes)
    // const songId = req.params.id;
    // console.log(req.session)
    // const userId = req.session.auth.userId;

    const like = await Like.create({ userId, songId, likes });

    return res.json({ like });
}));

router.post('/:id(\\d+)/review', csrfProtection, requireAuth, asyncHandler(async (req, res) => {
    const { userId, songId, reviews } = req.body;
    console.log(reviews)
    const review = await Review.create({ review, userId, songId });
    return res.json({ review });
}));

module.exports = router;
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
            ]
        }
    );
    return res.json(songs);
}));

router.post('/:id(\\d+)/like', csrfProtection, requireAuth, asyncHandler(async (req, res) => {
    const { userId, songId, likes } = req.body;
    // console.log(userId, songId, likes)
    const like = await Like.create({ userId, songId, likes });

    return res.json({ like });
}));

router.post('/:id(\\d+)/review', csrfProtection, requireAuth, asyncHandler(async (req, res) => {
    const { userId, songId, review } = req.body;
    // console.log(review)
    const newReview = await Review.create({ userId, songId, review });
    return res.json({ newReview });
}));

// router.put('/:id(\\d+)/review/:id(\\d+)', csrfProtection, requireAuth, asyncHandler(async (req, res) => {

// }))

// router.delete('/:id(\\d+)/review/:id(\\d+)', csrfProtection, requireAuth, asyncHandler(async (req, res) => {
//     const reviewId = await Review.deleteItem(req.params.id);
//     return res.json({ reviewId });
// }))

module.exports = router;
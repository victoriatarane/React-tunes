const express = require('express');
const asyncHandler = require('express-async-handler');
const csrf = require('csurf');
const csrfProtection = csrf({ cookie: true });

const { Song, Artist, Review, Like } = require('../../db/models');

const router = express.Router();

router.get('/', asyncHandler(async function (_req, res) {
    const songs = await Song.findAll(
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

router.post('song/:id(\\d+)/like', csrfProtection, asyncHandler(async (req, res) => {
    const { like } = req.body;

    const songId = req.params.id;

    if (req.session.auth) {
        const userId = req.session.auth.userId;

        await db.Like.create({ like, userId, songId });

        res.redirect(`/`);
    } else {
        errors = ["You must be logged in to submit a review"]

        const response = db.Like.build({ like, songId })
        res.redirect(`/login`, { csrfToken: req.csrfToken(), errors, like })
    }


}));

router.post('song/:id(\\d+)/review', csrfProtection, asyncHandler(async (req, res) => {
    const { review } = req.body;

    const songId = req.params.id;

    if (req.session.auth) {
        const userId = req.session.auth.userId;

        await db.Review.create({ review, userId, songId });

        res.redirect(`/`);
    } else {
        errors = ["You must be logged in to submit a review"]

        const response = db.Review.build({ review, songId })
        res.redirect(`/login`, { csrfToken: req.csrfToken(), errors, review })
    }


}));

module.exports = router;
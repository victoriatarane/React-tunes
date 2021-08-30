const express = require('express');
const asyncHandler = require('express-async-handler');
const csrf = require('csurf');
const csrfProtection = csrf({ cookie: true });
const { requireAuth } = require('../../utils/auth');

const { Song, Artist, Review, Like, PlaylistSong, Playlist } = require('../../db/models');
// const { response } = require('express');
// const { addPlaylistSongs } = require('../../../frontend/src/store/playlist');

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


router.post('/api/playlist/:id(\\d+)', csrfProtection, requireAuth, asyncHandler(async (req, res) => {
    const {userId, songId} = req.body;
    const playlist = await Playlist.findOrCreate(
        { where: {userId} }
    );
    const playlistId = playlist.id;
    const newPlaylistSong = await PlaylistSong.create({ songId, playlistId });
    return res.json({ newPlaylistSong });
}))
// router.put('/:id(\\d+)/review/:id(\\d+)', csrfProtection, requireAuth, asyncHandler(async (req, res) => {

// }))

router.delete('/:id(\\d+)/review', csrfProtection, requireAuth, asyncHandler(async (req, res) => {
    let reviewId = req.params.id;
    let review = await db.Review.findByPk(reviewId)
    await Review.destroy({where: { id: review.id }});
    return review.id



    // console.log('THIS IS REQ', req)
    // let reviewId = await Review.deleteItem(req);
    // return res.json({ reviewId });


    // const { userId, songId, review } = req.body;
    // const newReview = await Review.create({ userId, songId, review });
    // return res.json({ newReview });
}))

//router.delete("/:id", asyncHandler(async function (req, res) {
// const itemId = await ItemsRepository.deleteItem(req.params.id);
// return res.json({ itemId });
// }));

module.exports = router;
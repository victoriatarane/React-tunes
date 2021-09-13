const express = require('express');
const asyncHandler = require('express-async-handler');
const csrf = require('csurf');
const csrfProtection = csrf({ cookie: true });
const { requireAuth } = require('../../utils/auth');
const { Op } = require('sequelize');

const { Song, Artist, Playlist, PlaylistSong } = require('../../db/models');

const router = express.Router();


router.get('/:id(\\d+)', asyncHandler(async function (req, res) {
    const userId = req.params.id;
    const playlist = await Playlist.findOrCreate({ where: {userId: userId}});
    const playlistSongs = await PlaylistSong.findAll({ where : { playlistId: playlist[0].dataValues.id }});
    let playlistIds = [];
    playlistSongs.forEach(song => {
        playlistIds.push(song.dataValues.songId)
    });
    const songs = await Song.findAll({where: {[Op.or]: playlistIds.map((id)=>{
        return {id: id}
    })}});
    return res.json(songs);
}));

router.post('/add/:songId(\\d+)', requireAuth, csrfProtection, asyncHandler(async (req, res) => {
    const {songId, userId} = req.body;
    const playlist = await Playlist.findOrCreate({ where: {userId}})
    const playlistSong = await PlaylistSong.create({ songId, playlistId: playlist.id });
    // console.log(req.body, 'REQ BODY!!!')

    return res.json(playlistSong);
}));

module.exports = router;
const express = require('express');
const asyncHandler = require('express-async-handler');
const csrf = require('csurf');
const csrfProtection = csrf({ cookie: true });
const { requireAuth } = require('../../utils/auth');

const { Song, Artist, Playlist, PlaylistSong } = require('../../db/models');

const router = express.Router();


router.get('/', asyncHandler(async function (_req, res) {
    const { userId } = req.body;
    const playlist = await Playlist.findOrCreate({ where: {userId}});
    const playlistSongs = await PlaylistSong.findAll({ where : { playlistId: playlist.id }});
    let playlistIds = [];
    playlistSongs.forEach(song => {
        playlistIds.push(songId)
    })
    const songs = await Song.findAll({ where: { id: { [Op.in]: playlistIds}}});
    return res.json(songs);
}));
const express = require('express');
const router = express.Router();
module.exports = router;
/*
router.get('/simple', function (req, res) {
    res.redirect('url');
});
*/
router.get('/!timetable', function (req, res) {
    res.redirect('https://www.ks54.ru/%D1%80%D0%B0%D1%81%D0%BF%D0%B8%D1%81%D0%B0%D0%BD%D0%B8%D0%B5-%D0%BE%D0%BD%D0%BB%D0%B0%D0%B9%D0%BD/?group=3-%D0%90%D0%A1%D0%A19-4');
});
router.get('/telegram', function (req, res) {
    res.redirect('https://itsalexsyw.t.me');
});
router.get('/tg', function (req, res) {
    res.redirect('https://itsalexsyw.t.me');
});
router.get('/channel', function (req, res) {
    res.redirect('https://stupidalexsyw.t.me');
});
router.get('/twitch', function (req, res) {
    res.redirect('https://twitch.tv/goodgamenebudet');
});
router.get('/twitter', function (req, res) {
    res.redirect('https://twitter.com/alexsywindows');
});
router.get('/vk', function (req, res) {
    res.redirect('https://vk.com/itsalexsyw');
});
router.get('/lastfm', function (req, res) {
    res.redirect('https://www.last.fm/user/alexsyw');
});
router.get('/github', function (req, res) {
    res.redirect('https://github.com/alexsyw');
});
router.get('/soundcloud', function (req, res) {
    res.redirect('https://soundcloud.com/alexsyw');
});
router.get('/inst', function (req, res) {
    res.redirect('https://instagram.com/itsalexsyw');
});
router.get('/instagram', function (req, res) {
    res.redirect('https://instagram.com/itsalexsyw');
});
router.get('/spotify', function (req, res) {
    res.redirect('https://open.spotify.com/user/1l0gjlbzqjg48sd9owqxzbya8');
});



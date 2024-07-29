const express = require('express');
const router = express.Router();
const ANGGOTA_ROUTER = require('./anggota');
const BUKU_ROUTER = require('./buku')
const PEMINJAMAN_ROUTER = require('./peminjaman')
const DENDA_ROUTER = require('./denda')

router.use('/', ANGGOTA_ROUTER);
router.use('/', BUKU_ROUTER)
router.use('/', PEMINJAMAN_ROUTER)
router.use('/', DENDA_ROUTER)

router.get('/', (req, res) => {
    res.send('API');
});

module.exports = router;
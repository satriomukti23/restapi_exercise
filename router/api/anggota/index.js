const express = require('express');
const router = express.Router();
const {create,getAll,getById} = require('../../../controller/anggota.controller')

router.post('/anggota',create);
router.get('/anggotas',getAll);
router.get('/anggota/:anggotaId',getById)

router.get('/', (req, res) => {
    res.send('anggota');
});
module.exports = router;
const express = require('express')
const router = express.Router()
const {create,getAll,getByid,getByAnggotaid,getByBukuid} = require('../../../controller/pemijaman.controller')

router.post('/peminjaman',create);
router.get('/peminjamans',getAll);
router.get('/peminjaman/:peminjamanId',getByid);
router.get('/peminjaman/:anggotaId',getByAnggotaid)
router.get('/peminjaman/:bukuId',getByBukuid);

router.get('/', (req,res) => {
    res.send ("PEMINJAMAN")
})


module.exports = router;
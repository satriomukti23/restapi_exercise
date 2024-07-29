const express = require('express')
const router = express.Router()
const {create,getAll,getById} = require('../../../controller/buku.controller')

router.post('/buku',create);
router.get('/bukus',getAll)
router.get('/buku/:bukuId',getById)

router.get('/', (req,res) => {
    res.send('BUKU')
})


module.exports = router;
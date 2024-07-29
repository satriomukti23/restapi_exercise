const express = require('express')
const router = express.Router()
const {create,getAll,getByid,getByPeminjamanId} = require('../../../controller/denda.controller')

router.post('/denda',create)
router.get('/dendas',getAll)
router.get('/denda/:dendaId',getByid)
router.get('/denda/:peminjamanId',getByPeminjamanId)


router.get('/', (req,res) => {
    res.send("DENDA")
})

module.exports = router
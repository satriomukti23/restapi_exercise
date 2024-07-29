const {createPeminjaman,getAllPeminjaman,getPeminjamanById,getPeminjamanByAnggotaId,getPeminjamanByBukuId} = require('../model/peminjaman.model')

const create = async (req,res) => {

    const {anggotaId, bukuId, tanggal_pinjam, tanggal_kembali} = req.body

    if (!anggotaId || !bukuId || !tanggal_pinjam || !tanggal_kembali){
        return res.status(404).json({
            message: "all fields are required"
        })
    }

    try {
        const peminjaman = await createPeminjaman(req.body)
        return res.status(201).json({
            message: "peminjaman created",
            data: peminjaman
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            message: "cant create peminjaman"
        })
    }
}

const getAll = async (req,res) => {

    try {
        const peminjamans = await getAllPeminjaman()
        return res.status(201).json({
            message: "get peminjaman",
            data: peminjamans
        })
    } catch (error) {
        return res.status(500).json({
            message: "cant get peminjaman"
        })
    }
}

const getByAnggotaid = async (req,res) => {

    const {anggotaId} = req.params

    try {
        const peminjaman = await getPeminjamanByAnggotaId(anggotaId)

        if(!peminjaman){
            return res.status(404).json({
                message: "peminjaman not found"
            })
        }

        return res.status(201).json({
            message: "peminjaman found",
            data: peminjaman
        })
    } catch (error) {
        return res.status(500).json({
            message: "cant get peminjaman"
        })
    } 
}


const getByid = async (req,res) => {

    const {peminjamanId} = req.params

    try {
        const peminjaman = await getPeminjamanById(peminjamanId)

        if(!peminjaman){
            return res.status(404).json({
                message: "peminjaman not found"
            })
        }

        return res.status(201).json({
            message: "peminjaman found",
            data: peminjaman
        })
    } catch (error) {
        return res.status(500).json({
            message: "cant get peminjaman"
        })
    } 
}

const getByBukuid = async (req,res) => {

    const {bukuId} = req.params

    try {
        const peminjaman = await getPeminjamanByBukuId(bukuId)

        if(!peminjaman){
            return res.status(404).json({
                message: "peminjaman not found"
            })
        }

        return res.status(201).json({
            message: "peminjaman found",
            data: peminjaman
        })
    } catch (error) {
        return res.status(500).json({
            message: "cant get peminjaman"
        })
    } 
}

module.exports = {create,getAll,getByid,getByAnggotaid,getByBukuid}
const {createDenda,getAllDenda,getDendaById,getDendaByPeminjamanId} = require('../model/denda.model')

const create = async (req,res) => {

    const {peminjamanId,jumlah_denda} = req.body

    if (!peminjamanId || !jumlah_denda){
        return res.status(404).json({
            message: "all fields are required"
        })
    }

    try {
        const denda = await createDenda(req.body)
        return res.status(201).json({
            message: "denda created",
            data: denda
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            message: "cant create denda"
        })
    }
}

const getAll = async (req,res) => {

    try {
        const dendas = await getAllDenda()
        return res.status(201).json({
            message: "get denda",
            data: dendas
        })
    } catch (error) {
        return res.status(500).json({
            message: "cant get denda"
        })
    }
}

const getByid = async (req,res) => {

    const {dendaId} = req.params

    try {
        const denda = await getDendaById(dendaId)

        if(!denda){
            return res.status(404).json({
                message: "denda not found"
            })
        }

        return res.status(201).json({
            message: "denda found",
            data: denda
        })
    } catch (error) {
        return res.status(500).json({
            message: "cant get denda"
        })
    } 
}

const getByPeminjamanId = async (req,res) => {

    const {peminjamanId} = req.params

    try {
        const denda = await getDendaByPeminjamanId(peminjamanId)

        if(!denda){
            return res.status(404).json({
                message: "denda not found"
            })
        }

        return res.status(201).json({
            message: "denda found",
            data: denda
        })
    } catch (error) {
        return res.status(500).json({
            message: "cant get denda"
        })
    } 
}

module.exports = {create,getAll,getByid,getByPeminjamanId}
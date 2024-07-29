
const {createAnggota,getAllAnggotas,getAnggotaById} = require('../model/anggota.model')

const create = async (req,res) => {

    const {nama,alamat,no_telepon} = req.body

    if(!nama || !alamat || !no_telepon){
        return res.status(400).json({
            message: " all fields are required"
        })
    }

    try{
        const anggota = await createAnggota(req.body)
        return res.status(201).json({
            message: "anggota created",
            data: anggota
        })
    }catch(error){
        return res.status(500).json({
            message: "cant create anggota"
        })
    }
}

const getAll = async (req,res) => {

    try{
        const anggotas = await getAllAnggotas()
        return res.status(200).json({
            message: "anggota found",
            data: anggotas
        })
    }catch(error){
        return res.status(500).json({
            message: "cant get anggota"
        })
    }
}

const getById = async (req,res) => {

    const {anggotaId} = req.params

    try{
        const anggota = await getAnggotaById(anggotaId)

        if(!anggotaId){
            return res.status(404).json({
                message: "anggota not found"
            })
        }

        return res.status(200).json({
            message: "anggota found",
            data: anggota
        })
        
    }catch(error){
        console.log(error)
        return res.status(500).json({
            message: "cant get anggota"
            
        })
    }
}

module.exports = {create,getAll,getById}
const {createBuku,getAllBukus,getBukuById} = require('../model/buku.model')

const create = async (req,res) => {

    const {judul,penulis,penerbit,tahun_terbit,no_rak} = req.body

    if(!judul || !penulis || !penerbit || !tahun_terbit || !no_rak){
        return res.status(404).json({
            message: " all fields are required"
        })
    }

    try{
        const buku = await createBuku(req.body)
        return res.status(201).json({
            messsage: "buku created",
            data: buku
        })

    }catch(error){
        console.log(error)
        return res.status(500).json({
            message: "cant create buku"
        })
    }
}

const getAll = async (req,res) => {

    try{
        const bukus = await getAllBukus()
        return res.status(201).json({
            message: "buku found",
            data: bukus
        })
    }catch(error){
        return res.status(500).json({
            message: "cant get buku"
        })
    }
}

const getById = async (req,res) =>  {

    const {bukuId} = req.params

    try {
        const buku = await getBukuById(bukuId)

        if(!bukuId){
            return res.status(404).json({
                message: " buku not found "
            })
        }

        return res.status(201).json({
            message: "buku found",
            data: buku
        })
    } catch (error) {
        return res.status(500).json({
            message: "cant get buku"
        })
    }
}

module.exports = {create,getAll,getById}
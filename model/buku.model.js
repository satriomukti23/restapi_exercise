const prisma = require('../config/prisma')

const createBuku = async (data) => {
    const {judul,penulis,penerbit,tahun_terbit,no_rak} = data

    try{
        const buku = await prisma.buku.create({
            data:{
                judul,
                penulis,
                penerbit,
                tahun_terbit,
                no_rak
            }
        })
        return buku
    }catch(error){
        throw new Error (error)
    }

}

const getAllBukus = async () => {

    try{
        const bukus = await prisma.buku.findMany()
        return bukus
    }catch(error){
        throw new Error (error)
    }
}

const getBukuById = async (id) => {

    try{
        const buku = await prisma.buku.findUnique({
            where:{
                id
            }
        })
        return buku
    }catch(error){
        throw new Error (error)
    }
}

module.exports = {createBuku,getAllBukus,getBukuById}
const prisma = require('../config/prisma')

const createAnggota = async (data) => {
    const {nama,alamat,no_telepon} = data

    try{
        const anggota = await prisma.anggota.create({
            data:{
                nama,
                alamat,
                no_telepon
            }
        })
        return anggota
    }catch(error){
        throw new Error(error)
    }
}

const getAllAnggotas = async () => {
    
    try{
        const anggotas = await prisma.anggota.findMany()
        return anggotas
    }catch(error){
        throw new Error(error)
    }
}

const getAnggotaById = async (id) => {

    try{
        const anggota = await prisma.anggota.findUnique({
            where:{
                id
            }
        })
        return anggota
    }catch(error){
        throw new Error(error)
    }
}

module.exports = {createAnggota,getAllAnggotas,getAnggotaById}
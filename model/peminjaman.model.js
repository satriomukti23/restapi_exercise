const prisma = require('../config/prisma')


const createPeminjaman = async (data) => {
    const { anggotaId, bukuId, tanggal_pinjam, tanggal_kembali } = data

    try {
        const peminjaman = await prisma.peminjaman.create({
            data: {
                anggotaId,
                bukuId,
                tanggal_pinjam,
                tanggal_kembali
            }
        })
        return peminjaman
    } catch (error) {
        throw new Error(error)
    }
}

const getAllPeminjaman = async () => {

    try{
        const peminjamans = await prisma.peminjaman.findMany()
        return peminjamans
    }catch(error){
        throw new Error (error)
    }
}

const getPeminjamanById = async (id) => {

    try {
        const peminjaman = await prisma.peminjaman.findUnique({
            where:{
                id
            }
        })
        return peminjaman
    } catch (error) {
        throw new Error(error)
        
    }
}

const getPeminjamanByAnggotaId = async (anggotaId) => {

    try {
        const peminjaman = await prisma.peminjaman.findUnique({
            where:{
                anggotaId
            }
        })
        return peminjaman
    } catch (error) {
        throw new Error (error)
    }
}

const getPeminjamanByBukuId = async (bukuId) => {

    try {
        const peminjaman = await prisma.peminjaman.findUnique({
            where:{
                bukuId
            }
        })
        return peminjaman
    } catch (error) {
        throw new Error (error)
    }
}

module.exports = {createPeminjaman,getAllPeminjaman,getPeminjamanById,getPeminjamanByAnggotaId,getPeminjamanByBukuId}
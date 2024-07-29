const prisma = require('../config/prisma')

const createDenda = async(data) => {

    const {peminjamanId,jumlah_denda} = data

    try {
        const denda = await prisma.denda.create({
            data: {
                peminjamanId,
                jumlah_denda
            }
        })
        return denda
    } catch (error) {
        throw new Error (error)
    }
}

const getAllDenda = async () => {

    try {
        const dendas = await prisma.denda.findMany()
        return dendas
    } catch (error) {
        throw new Error (error)
    }
}

const getDendaById = async (id) => {

    try{
        const denda = await prisma.denda.findUnique({
            where:{
                id
            }
        })
        return denda
    }catch(error){
        throw new Error (error)
    }
}

const getDendaByPeminjamanId = async (peminjamanId) => {

    try {
       const denda = await prisma.denda.findUnique({
        where:{
            peminjamanId
        }
       }) 
       return denda
    } catch (error) {
        throw new Error (error)
    }
}

module.exports = {createDenda,getAllDenda,getDendaById,getDendaByPeminjamanId}
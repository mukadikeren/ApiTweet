const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient


function getAllUsers() {
    return prisma.user.findMany()

}
function getUsers(id) {
    return prisma.user.findUnique({ where: { id } })

}
function getUserByEmail(email) {
    return prisma.user.findUnique({where: {email}})
}

module.exports = {
    getAllUsers,
    getUsers,
    getUserByEmail,
}
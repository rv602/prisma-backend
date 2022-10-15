const prisma = require("../prisma/index")

const jwt = require("jsonwebtoken")

const isLoggedIn = async (req, res, next) => {
    try {
        const token = req.cookies.token

        if (!token) {
            return res.status(401).json({ error: "Unauthorized" })
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        req.user = await prisma.user.findUnique({
            where : {
                id: decoded.userId
            }
        })

        // u can do more checks
        next()

    } catch (error) {
        throw new Error(error)
    }
}

module.exports = isLoggedIn
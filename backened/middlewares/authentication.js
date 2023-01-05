const authentication = (req, res, next) => {
    if(!req.headers.authorization) {
        return res.send("please login again")
    }
    const token = req.headers



    
}

module.exports = authentication
const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {

    try{
const authheader = req.headers.authorization;

        if(!authheader){
            return res.status(401).json({
                success: false,
                message: "Unauthorized"
            });
        }
        const token = authheader.split(' ')[1];
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        console.log(decoded);
        req.user = decoded;
        next();
    }
    catch(err){
        console.error(err);
        res.status(500).json({
            success: false,
            message: "Internal server error"
        });
    }
}

module.exports = authMiddleware;
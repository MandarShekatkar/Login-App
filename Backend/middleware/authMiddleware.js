import jwt from 'jsonwebtoken';

const authMiddleware = async (req, res, next) =>{
    try {
        const {token} = req.cookies;

        if(!token){
            return res.json({
                success:false,
                message: "Not Authorized, No Token",
            });
        }
         const decoded = jwt.verify(token, process.env.JWT_SECRET);

    req.userId = decoded.id;

    next();
    } catch (error) {
        return res.json({
            success:false,
            message: "Not Authorized",
        });
    }
}
export default authMiddleware;
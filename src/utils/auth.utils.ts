import { Request, Response } from 'express';
const jwt = require('jsonwebtoken');

const auth = (req: any, res: Response, next: any) => {

    let token = req.headers['authorization'];

    if (!token) {
        return res.status(403).json({
            status: 403,
            message: 'Unauthenticated'
        });
    }
    if (token?.split(' ')[0].toLocaleLowerCase() !== 'bearer') {
        return res.status(403).json({
            status: 403,
            message: 'Invalid Token Type'
        });
    } else {
        token = token.split(' ')[1];
        try {
            const decoded = jwt.verify(token, process.env.TOKEN_KEY || 'dcs-key');
            req.principal = decoded;
        } catch (err) {
            if (err.name === 'TokenExpiredError') {
                return res.status(403).json({
                    status: 403,
                    message: 'Token Expired'
                });
            } else {
                return res.status(403).json({
                    status: 403,
                    message: 'Invalid Token'
                });
            }
        }
    }
    
    return next();
};


module.exports = auth;
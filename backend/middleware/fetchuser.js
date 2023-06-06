import jwt from 'jsonwebtoken';
import User from '../models/Users.js'

// Secret key
const JWT_SECRET = 'MERNSTACKDEVELOPERHARSHNILESHDESAI';

const fetchuser = async (req, res, next) => {

    // Get the user from the jwt token and add id to req object
    const token = req.header('auth-token');
    console.log('from fetchuser', token)
    // If token not found
    if (!token) {
        res.status(401).send({ error: "No token" });
    }
    try {
        const data = jwt.verify(token, JWT_SECRET);
        req.user = data.user;
        console.log("data.user:"+data.user+"req.user.id:" + req.user.id + 'going to next()');
        next();
    } catch (error) {
        res.status(401).send({ error: "Please authenticate using a valid token" });
    }


}


export default fetchuser;
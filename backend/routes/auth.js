import express from 'express';
const router = express.Router();
import { createUser, loginUser, loginByAuthToken, loggedInUserDetails } from '../controllers/auth.js';
import { body } from 'express-validator';
import fetchuser from '../middleware/fetchuser.js'


// Route 1: Create a User using: POST "/api/auth/createuser". Doesn't require Auth
export default router.post('/createuser', [
    body('name', 'Enter a valid name').isLength({ min: 3 }),
    body('email', 'Enter a valid email').isEmail(),
    body('password', 'Password must be atleast 5 characters').isLength({ min: 5 })
], createUser);


// Route 2: Authenticate a User using: POST "/api/auth/login". Doesn't require Auth
router.post('/login', [
    body('email', 'Enter a valid email').isEmail(),
    body('password', 'Password cannot be blank').exists(),
], loginUser);


// Route 3: Authenticate a User using token : POST "/api/auth/login-using-auth-token". Doesn't require Auth
router.post('/login-using-auth-token', loginByAuthToken);


// Route 4: Get loggedin User details using: POST "/api/auth/getuser". Login require Auth
router.post('/getuser', fetchuser, loggedInUserDetails);
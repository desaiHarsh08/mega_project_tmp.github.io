import express from 'express';
const router = express.Router();
import { body } from 'express-validator';
import fetchuser from '../middleware/fetchuser.js'
import Schemes from '../models/Schemes.js'

// Route 1: Get all the records of User using: GET "/api/records/fetchallscheme". Login require Auth
export default router.get('/fetchallscheme', fetchuser, async (req, res) => {
    try {

        // Fetch all scheme
        console.log(req.user.id)
        const scheme = await Schemes.find({ user: req.user.id });
        res.json(scheme);
    } catch (error) {
        console.log(error);
        res.status(500).send("Internal Server Error!");
    }
});



// Route 2: Add the scheme  of farmer using: POST "/api/records/addrecord". Login require Auth
router.post('/addscheme', fetchuser, async (req, res) => {

    try {

        

console.log('here after next()');
        
        // Check whether the user scheme exist already
        const isSchemeFound = await Schemes.findOne({ schemeName: req.body.schemeName, user: req.user.id });
        console.log("isschemefound", isSchemeFound)

        // Logic for single time add record for the first time
        if (isSchemeFound) {
            return res.send(true);
        }

        const { schemeName, objective, benefits } = req.body;
console.log("from applied scheme "+req.user.id)
        let scheme = await new Schemes({
            schemeName, objective, benefits, user: req.user.id
        });

        let savedScheme = await scheme.save();

        res.json(savedScheme);


    } catch (error) {
        console.log(error);
        res.status(500).send("Internal Server Error!");
    }
});


// module.exports = router;
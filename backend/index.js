import connectToMongo from './db/db.js';
import auth from './routes/auth.js';
import schemes from './routes/appliedSchemes.js';
import cors from 'cors';

connectToMongo();

import express from 'express';
const app = express();
const port = process.env.Port || 5000;


app.use(express.json());
app.use(cors());

app.use('/api/auth', auth);
app.use('/api/schemes', schemes);

app.get('/', ()=>{
    console.log('Hi');
});

app.listen(port, ()=>{
    console.log(`Server is running at http://localhost:${port}`);
});
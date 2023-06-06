import mongoose from 'mongoose';
const mongoURI = 'mongodb+srv://desaiharsh183:6rPp5651M9Lv0dzO@cluster0.xhadwan.mongodb.net/?retryWrites=true&w=majority';

const connectToMongo = async ()=>{
    try {
        mongoose.set('strictQuery', false)
        mongoose.connect(mongoURI) 
        console.log('Connected to MongoDB Successfully!')
    } catch(error) {
        console.log(error)
        process.exit()
    }
}

export default connectToMongo;
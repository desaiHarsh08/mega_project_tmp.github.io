import mongoose from 'mongoose';
const { Schema } = mongoose;


const schemesSchema = new Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        // unique: true,
        ref: 'user'
    },
    schemeName: {
        type: String,
        default: "",
         // required: true
    },
    objective: {
        type: String,
        default: "",
         // required: true
    },
    benefits: {
        type: String,
        default: "",
         // required: true
    }
    
});

const Schemes = mongoose.model('schemes', schemesSchema);

export default Schemes
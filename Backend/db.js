const mongoose = require('mongoose');
const mongouri = "mongodb+srv://sanuabh:12345@cluster0.jbrgkf8.mongodb.net/";


const connectToMongo = async () => {
    try {
        await mongoose.connect(mongouri, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log('Connected to MongoDB successfully');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error.message);
        throw error;
    }
};

module.exports = connectToMongo;

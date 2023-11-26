const mongoose = require('mongoose');

const mongouri = "mongodb://127.0.0.1:27017/app";

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

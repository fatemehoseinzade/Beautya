import { mongodbAddress } from "@/Enums/api_enum";

const mongoose = require('mongoose');

async function connectToDatabase() {
    const uri = mongodbAddress;

    const options = {
        serverSelectionTimeoutMS: 10000, // Timeout after 10 seconds
    };

    try {
        await mongoose.connect(uri, options);
        console.log('Successfully connected to MongoDB');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }

    mongoose.connection.on('error', (err) => {
        console.error('MongoDB connection error:', err);
    });

    mongoose.connection.on('disconnected', () => {
        console.warn('MongoDB disconnected!');
    });
}

// Call the function to connect to the database
connectToDatabase();

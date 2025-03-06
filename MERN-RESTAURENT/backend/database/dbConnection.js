import mongoose from "mongoose";

export const dbConnection = () => {
    const uri = process.env.MONG_URI; // Use the correct variable name
    if (!uri) {
        console.error("MongoDB URI is not defined in environment variables.");
        return;
    }
    mongoose
        .connect(uri, { dbName: "RESTAURENT", useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => {
            console.log("Connected to database!");
        })
        .catch((err) => {
            console.error(`Some error occurred while connecting to the database: ${err.message}`);
        });
};
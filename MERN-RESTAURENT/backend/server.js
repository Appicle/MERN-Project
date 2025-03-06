import app from "./app.js";

const PORT = process.env.PORT || 6001; // Default to port 3000 if PORT is not set

app.listen(PORT, () => {
        console.log(`SERVER HAS STARTED AT PORT ${PORT}`);
    })
    .on('error', (error) => {
        if (error.code === 'EADDRINUSE') {
            console.error(`Port ${PORT} is already in use.`);
        } else {
            console.error('Error starting server:', error);
        }
        process.exit(1); // Exit the process with an error code
    });
const dotenv = require('dotenv')
dotenv.config();
const http = require("http");
const mongoose = require("mongoose");

// Mongoose connection

const connectionString = process.env.MONGO_URL;


mongoose.connect(
    connectionString,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    },
    (err, goose) => {
        if (err) console.log("ERROR on connection MongoDB");
        else {
            console.log("MongoDB connection succeed");

            const app = require("./app");
            const server = http.createServer(app);
            let PORT = process.env.PORT || 3001;
            server.listen(PORT, function () {
                console.log(`The server is running successfuly on port ${PORT}, http://localhost:${PORT}`);
            });
        }
    }
);
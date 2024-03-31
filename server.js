const http = require("http");
const mongodb = require("mongodb");

// MongoDB connect

const connectionString = "mongodb+srv://Nurillo:uQSXOA4dF3IffIlw@cluster1.f3q8bp3.mongodb.net/?retryWrites=true&w=majority&appName=Travel";


mongodb.connect(connectionString,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    },
    (err, client) => {
        if (err) console.log("ERROR on connection MongoDB");
        else {
            console.log("MongoDB connection succeed");
            module.exports = client;

            const app = require("./app");
            const server = http.createServer(app);
            let PORT = process.env.PORT || 3001;
            server.listen(PORT, function () {
                console.log(`The server is running successfuly on port ${PORT}, http://localhost:${PORT}`);
            });
        }
    }
);
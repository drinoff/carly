const express = require("express");
const initDB = require("./config/database");
const cors = require("cors");

const config = require("./config/config.json");
const routes = require("./routes");
const app = express();

app.use(cors());

app.use(routes);
app.use(express.json());

initDB(config.DB_CONNECTION_STRING)
    .then(() => {
        app.listen(config.PORT, () => {
            console.log(
                `Application is running on http://localhost:${config.PORT}`
            );
        });
    })
    .catch((err) => {
        console.log(err);
    });

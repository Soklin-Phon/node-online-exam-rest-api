import express, { Application } from "express";
import morgan from "morgan";
import router from "./routes/router";
import { createConnection } from "typeorm";
import dbConfig from "../config/database";
const cors = require('cors')

const PORT = process.env.PORT || 9020;

const app: Application = express();

app.use(express.json());
app.use(morgan('tiny'));
app.use(express.static('public'));
app.use(cors());
app.use(router);

createConnection(dbConfig)
    .then((_connection) => {
        app.listen(PORT, () => {
            console.log('Connected to Database');
            console.log('Node API running on port : ', PORT);
        });
    })
    .catch((err) => {
        console.log("Unable to connect to db", err);
        process.exit(1);
    });


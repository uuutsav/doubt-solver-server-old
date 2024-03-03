import express from 'express';
import axios from 'axios';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();
app.use(bodyParser.json());
app.use(cors());

const port = process.env.PORT || 5001;

app.get('/', (req, resp) => {
    resp.send("Root route");
})

app.post('/login', async (req, resp) => {
    const {username, password} = req.body;

    resp.send({
        status: ""
    })
})


app.listen(port, () => {
    console.log("Server listening to port: ", port);
})
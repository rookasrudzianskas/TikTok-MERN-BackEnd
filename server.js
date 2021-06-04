import express from "express";
import mongoose from "mongoose";
import Data from "./data.js";
import Videos from "./dbModel.js";

//app config
const app = express();
const port = 9000;


// middlewares
app.use(express.json());
app.use((req, res, next) => {
    res.getHeaders('Access-Control-Allow-Origin', '*'),
    res.getHeaders('Access-Control-Allow-Headers', '*'),
        next();
})

// db config
const connection_url = "mongodb+srv://admin:mOUNAIWUQKBy74qM@cluster0.eud9t.mongodb.net/backend-tiktok?retryWrites=true&w=majority";
mongoose.connect(connection_url, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
})


//api endpoints
app.get('/', (req, res) => res.status(200).send('hello world 🚀'));

app.get('/v1/posts', (req, res) => res.status(200).send(Data));
app.get('/v2/posts', (req, res) => {
    Videos.find((err, data) => {
        if(err) {
            res.status(500).send(err);
        } else {
            res.status(200).send(data);
        }
    });
});

app.post('/v2/posts', (req, res) => {
    // This post request is to add ata to the database
    // it will let us to add a video document to the videos collection
    // adding data to the database in here
    const dbVideos = req.body

    // here we do some error
    Videos.create(dbVideos, (err, data) => {
        if(err) {
            res.status(500).send(err);
        } else {
            // if there are no errors
            // DONE, no errors
            res.status(201).send(data);
        }
    });
})

// listener
app.listen(port, () => console.log(`Listening on localhost: ${port}`))
//mOUNAIWUQKBy74qM
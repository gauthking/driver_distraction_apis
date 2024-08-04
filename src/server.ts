import express, { Request, Response } from 'express';
import Cors from 'cors';
import * as functions from "firebase-functions"
import helmet from "helmet"

// setup 
const app = express();
const port = 3001;

// middleware 
app.use(express.json());
app.use(Cors());
app.use(helmet())

// starting up a dummy server

app.get("/", (req: Request, res: Response) => {
    try {
        console.log("running...")
        res.status(200).send("hi there mf")
    } catch (error) {
        console.log("some shi. happened")
        res.status(500).send("hi there again with wrror mf")
    }
})

app.listen(port, () => {
    console.log(`Server started !! Listening on port -${port}`)
})

exports.api = functions.https.onRequest(app);

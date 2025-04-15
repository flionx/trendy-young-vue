import express from 'express'
import mongoose from 'mongoose';

mongoose.connect('mongodb+srv://admin:xMYH6B8ms648Bnvz@cluster0.bslo4ki.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
.then(() => console.log('MongoDB was connected'))
.catch((err) => console.log('MongoDB connect error: ', err))

const app = express();
const PORT = 5000

app.use(express.json());

app.listen(PORT, (err) => {
    if (err) {
        console.log(err);
    }
    console.log('The server was running on port ' + PORT);
})

app.get('/', (req, res) => {
    res.send("It works")
})
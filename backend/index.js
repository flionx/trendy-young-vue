import express from 'express'
import cors from 'cors'
import registerRoute from './routes/auth.js';
import connectDB from './connectDB.js'
import 'dotenv/config'

await connectDB();

const app = express();
const PORT = process.env.PORT || 5000;
app.use(cors({
    origin: [
        'http://localhost:5173',
        'http://localhost:5174',
        // domain <----
    ],
    credentials: true,
}))
app.use(express.json());
app.use('/api/auth', registerRoute) // 'api/auth/signup'

app.listen(PORT, (err) => {
    if (err) {
        console.log(err);
    }
    console.log('The server was running on port ' + PORT);
})

app.get('/', (req, res) => {
    res.send("It works")
})
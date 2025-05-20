import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import 'dotenv/config'
import connectDB from './connectDB.js'
import registerRoute from './routes/auth.js';
import productRoute from './routes/product.js';

await connectDB();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({
    origin: [
        // 'http://localhost:5173',
        // 'http://localhost:5174',
        'https://trendy-young.vercel.app'
    ],
    credentials: true,
}))
app.use(bodyParser.json());
app.use(cookieParser())
app.use('/api/auth', registerRoute);
app.use('/api/product', productRoute);

app.listen(PORT, (err) => {
    if (err) console.log(err);
    console.log('The server was running on port ' + PORT);
})

app.get('/ping', (req, res) => {
  res.status(200).send('OK');
});
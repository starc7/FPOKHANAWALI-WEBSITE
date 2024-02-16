import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';

import morgan from 'morgan';
import authRoutes from './routes/authRoute.js';
import productRoute from './routes/productRoute.js';
import cors from 'cors';
import ExpressFormidable from 'express-formidable';

const app = express();
dotenv.config();
connectDB()


// Middlewares
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

// Routes
app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/product', productRoute);

const PORT = process.env.PORT;

app.get('/', (req, res) => {
    res.send('Radhe-Krishna --- Radhe-Radhe')
})

app.listen(PORT, () => {
    console.log(`It is listening to the ${PORT}`)
});
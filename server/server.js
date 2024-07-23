import express from 'express';
import envConfig from './config/dotenv.js';
import connectDb from './config/db.js';
import cors from 'cors';
import { errorHandler, notFound } from './middlewares/ErrorMiddleware.js';
import userRoutes from './routes/UserRoute.js';
import productRoutes from './routes/ProductRoute.js';
import orderRoutes from './routes/OrderRoute.js';

envConfig();

const server = express();

const port = process.env.PORT || 8000;

server.use(cors({ origin: '*' }));
server.use(express.json());

server.use('/api/users', userRoutes);
server.use('/api/products', productRoutes);
server.use('/api/orders', orderRoutes);

server.use(notFound);
server.use(errorHandler);

const startServer = async () => {
    try {
        await connectDb();
        server.listen(port, () =>
            console.log(`Server running on port http://localhost:${port}`)
        )
    } catch (error) {
        console.error('DB connection failed:', error.message);
    }
};

startServer();

server.get('/', (req, res) => {
    res.send("Server Started!")
})
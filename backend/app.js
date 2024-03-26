import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './db/connect.js';
import postRoutes from './routes/postRoutes.js';
import aiRoutes from './routes/aiRoutes.js';
import { notFound, errorHandler }from './middlewares/errorMiddleware.js'
import path from 'path'

dotenv.config({path: '../.env'});
const app = express();
const port = process.env.PORT || 3000;
const db_url = process.env.DB_URL

connectDB(db_url);

app.use(cors());
app.use(express.json({limit: '50mb'}));
app.use('/api/v1/post', postRoutes);
app.use('/api/v1/ai', aiRoutes);

// --------------------Deployment-------------------------
const __dirname1 = path.resolve();
if(process.env.NODE_ENV === 'production'){
    app.use(express.static(path.join(__dirname1,'../frontend/dist')))
    app.get('*',(req, res)=>{
        res.sendFile(path.resolve(__dirname1, '../frontend', 'dist', 'index.html'))
    });
}
else{
    app.get('*',(req, res)=>{
        res.send("API is running successfully.")
    });
}
// --------------------Deployment-------------------------

app.use(notFound)
app.use(errorHandler)

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`)
})

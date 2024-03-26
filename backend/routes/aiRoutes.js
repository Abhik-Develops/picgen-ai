import express from 'express';
import query from '../configs/aiConfig.js';

const router = express.Router();

router.get('/', (req, res) => {
    res.send('Hello from Stable Diffusion AI Model');
})

router.post('/', async (req, res) => {
    try {
        const { prompt } = req.body;
        const response = await query({ "inputs": prompt });
        const buffer = await response.arrayBuffer();
        const base64Image = Buffer.from(buffer).toString('base64');
        res.status(200).json({ photo: base64Image });
    } catch (error) {
        res.status(500).send(error?.error.message || 'Something went wrong');
    }
})

export default router;
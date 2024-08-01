import express from 'express';
import { searchMovies, fetchTrendingData, fetchTrailerData } from '../services/movieService.js';
const router = express.Router();
router.get('/search', async (req, res) => {
    const { query } = req.query;
    if (!query) {
        return res.status(400).json({ error: 'Query parameter is required' });
    }
    try {
        const results = await searchMovies(query);
        res.json(results);
    }
    catch (error) {
        console.error('Search movies error:', error.message);
        res.status(500).json({ error: error.message });
    }
});
// Endpoint to fetch both trending movies and TV shows with genres
router.get('/trending', async (req, res) => {
    const { type = 'movie', timeWindow = 'day' } = req.query; // Default to 'movie' and 'day'
    try {
        const data = await fetchTrendingData(type, timeWindow);
        res.json(data);
    }
    catch (error) {
        res.status(500).json({ error: 'Failed to fetch trending movies and TV shows with genres' });
    }
});
router.get('/trailer', async (req, res) => {
    const { type, id } = req.query;
    try {
        const data = await fetchTrailerData(type, id);
        res.json(data);
    }
    catch (error) {
        res.status(500).json({ error: 'Failed to fetch trailer data' });
    }
});
export default router;

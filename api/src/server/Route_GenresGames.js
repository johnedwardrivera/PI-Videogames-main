const { Router } = require('express');

const getGenresGames = require('../controllers/getGenresGames')

const router = Router();

// end-points
router.get('/Genre', async (req, res) => {
    try {
        const results = await getGenresGames()
        res.json(results)

    } catch (error) {
        res.status(500).json(error.message)

    }
})

module.exports = router



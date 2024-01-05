const express = require('express');
const {
    createWorker,
    getWorkers,
    getWorker,
    deleteWorker,
    updateWorker
} = require('../controllers/workerController')


const router = express.Router();

// GET all workers
router.get('/', getWorkers)

//GET single worker
router.get('/:id', getWorker)

// POST
router.post('', createWorker)

// DELETE
router.delete('/:id', deleteWorker)


// UPDATE
router.patch('/:id', updateWorker)


module.exports = router;
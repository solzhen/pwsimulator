const Worker = require('../models/workerModel')
const mongoose = require('mongoose')

// get all wokers
const getWorkers = async (req, res) => {
    const workers = await Worker.find({}).sort({ createdAt: -1 });
    res.status(200).json(workers);
}

// get single worker
const getWorker = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'No such worker' })
    }
    const worker = await Worker.findById(id);
    if (!worker) {
        return res.status(404).json({ error: 'No such worker' })
    }
    res.status(200).json(worker);
}

// create new worker
const createWorker = async (req, res) => {
    const { name, overness, birth_year } = req.body
    try {
        const worker = await Worker.create({
            name, overness, birth_year
        });
        res.status(200).json(worker);
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

// delete worker

const deleteWorker = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'No such worker' })
    }
    const worker = await Worker.findOneAndDelete({ _id: id })
    if (!worker) {
        return res.status(404).json({ error: 'No such worker' })
    }
    res.status(200).json(worker);
}

// update

const updateWorker = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'No such worker' })
    }
    const worker = await Worker.findOneAndUpdate({ _id: id }, {
        ...req.body
    })
    if (!worker) {
        return res.status(404).json({ error: 'No such worker' })
    }
    res.status(200).json(worker);
}




// export

module.exports = {
    createWorker,
    getWorkers,
    getWorker,
    deleteWorker,
    updateWorker
}
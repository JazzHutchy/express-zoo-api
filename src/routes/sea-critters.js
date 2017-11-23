const express = require('express')
const SeaCritter = require('../models/sea-critter')

const router = express.Router()

router.get('/sea-critters', (req, res) => {
  const seaCritters = SeaCritter.all()
  res.json(seaCritters)
})

router.get('/sea-critters/:id', (req, res) => {
  const id = req.params['id']
  const seaCritter = SeaCritter.find(id)
  // If seaCritter was found
  if (seaCritter) {
    res.json(seaCritter)
  }
  // If seaCritter was not found
  else {
    res.status(404).json({ error: `The seaCritter with id '${id}' was not found` })
  }
})

module.exports = router
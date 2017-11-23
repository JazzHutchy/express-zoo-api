const express = require('express')
const Animal = require('../models/animal')

const router = express.Router()

router.get('/animals', (req, res) => {
  const animals = Animal.all()
  res.json(animals)
})

router.get('/animals/:id', (req, res) => {
  const id = req.params['id']
  const animal = Animal.find(id)
  // If animal was found
  if (animal) {
    res.json(animal)
  }
  // If animal was not found
  else {
    res.status(404).json({ error: `The animal with id '${id}' was not found` })
  }
})

router.post('/animals', (req, res) => {
  const attributes = req.body
  const newAnimal = Animal.create(attributes)
  res.status(201).json(newAnimal)
})

router.patch('/animals/:id', (req, res) => {
  // console.log("REQ")
  // console.log(req.headers)
  // console.log(req.body)
  // console.log(req.params)
  // console.log("-------")
  // console.log("RES")
  // console.log(res)
  const id = req.params['id']
  const attributes = req.body
  const updatedAnimal = Animal.update(id, attributes)
  if (updatedAnimal) {
    res.json(updatedAnimal)
  }
  else {
    res.status(404).json({ error: `The animal with id '${id}' was not found` })
  }
})

router.delete('/animals/:id', (req, res) => {
  // const attributes = req.body
  // const deleteAnimal = Animal.destroy(id)
  // res.status(200).json(deleteAnimal)

  const id = req.params['id']
  const animal = Animal.destroy(id)
  // If animal was deleted
  if (animal) {
    res.status(200).json(animal)
  }
  // If animal was not deleted
  else {
    res.status(204).json({ error: `The animal with id '${id}' was not deleted` })
  }
})

module.exports = router
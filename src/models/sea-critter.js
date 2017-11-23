let seaCritters = [
  {
    id: 1,
    name: 'Fish',
    count: 27
  },
  {
    id: 2,
    name: 'Shark',
    count: 4
  },
  {
    id: 3,
    name: 'Anemone',
    count: 8
  },
  {
    id: 4,
    name: 'Stingray',
    count: 1
  },
  {
    id: 5,
    name: 'Moby Dick',
    count: 5
  },
  {
    id: 6,
    name: 'Starfish',
    count: 9
  }
]

let nextID = 7

// Read
function all() {
  return seaCritters
}

function find(id) {
  // Ensure 'id' is an integer
  id = parseInt(id, 10)
  let foundSeaCritter = null
  // Loop through all the seaCritters
  seaCritters.forEach((seaCritter) => {
    // Compare this seaCritter's id to the one we want to find
    if (seaCritter.id == id) {
      // If so, remember this seaCritter
      foundSeaCritter = seaCritter
    }
  })
  // Return the animal we found, or if not successful, null
  return foundSeaCritter
}

// Create

function create(attributes) {
  // Create new seaCritter 'record' copying attributes across
  // and assigning it an id
  const newSeaCritter = Object.assign({}, attributes, {
    id: nextID
  })
  // Increment id for next creation
  nextID += 1

  // Add to our array that stores our data
  seaCritters.push(newSeaCritter)

  return newSeaCritter
}

// Update

function update(id, attributes) {
  let seaCritter = find(id)
  // let index = seaCritters.indexOf(foundSeaCritter)
  //const updatedAnimal = Object.assign({}, seaCritter, attributes)
  if (seaCritter) {
    Object.assign(seaCritter, attributes)
    return seaCritter
  }
  else {
    return null
  }
}

// Destroy

function destroy(id) {
  // id = parseInt(id, 10)
  let foundSeaCritter = find(id)

  let index = seaCritters.indexOf(foundSeaCritter)

  if (index === -1) {
    return null
  }

  seaCritters.splice(index, 1)

  return foundSeaCritter
}

module.exports = {
  all,
  find,
  create,
  destroy,
  update
}
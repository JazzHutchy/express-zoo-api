let animals = [
  {
    id: 1,
    name: 'Meercat',
    count: 27
  },
  {
    id: 2,
    name: 'Rhinoceros',
    count: 4
  },
  {
    id: 3,
    name: 'Giraffe',
    count: 8
  },
  {
    id: 4,
    name: 'Grey Rhino (they exist now)',
    count: 1
  },
  {
    id: 5,
    name: 'Elephant',
    count: 5
  },
  {
    id: 6,
    name: 'Komodo Dragon',
    count: 9
  }
]

let nextID = 7

// Read
function all() {
  return animals
}

function find(id) {
  // Ensure 'id' is an integer
  id = parseInt(id, 10)
  let foundAnimal = null
  // Loop through all the animals
  animals.forEach((animal) => {
    // Compare this animal's id to the one we want to find
    if (animal.id == id) {
      // If so, remember this animal
      foundAnimal = animal
    }
  })
  // Return the animal we found, or if not successful, null
  return foundAnimal
}

// Create

function create(attributes) {
  // Create new animal 'record' copying attributes across
  // and assigning it an id
  const newAnimal = Object.assign({}, attributes, {
    id: nextID
  })
  // Increment id for next creation
  nextID += 1

  // Add to our array that stores our data
  animals.push(newAnimal)

  return newAnimal
}

// Update

// function update(id, attributes) {
// let foundAnimal = find(id)
// // Check if animal was not found
// if (!foundAnimal) {
//   // If so bail early
//   return null
// }
// let animal = foundAnimal
// // Warning: attributes may contain 'id' or other unwanted attributes
// Object.assign(animal, attributes)
// // Return the updated animal
// return animal
// }

function update(id, attributes) {
  let animal = find(id)
  // let index = animals.indexOf(foundAnimal)
  //const updatedAnimal = Object.assign({}, animal, attributes)
  if (animal) {
    Object.assign(animal, attributes)
    return animal
  }
  else {
    return null
  }
}

// Destroy

function destroy(id) {
  // id = parseInt(id, 10)
  let foundAnimal = find(id)

  let index = animals.indexOf(foundAnimal)

  if (index === -1) {
    return null
  }

  animals.splice(index, 1)

  return foundAnimal
}

module.exports = {
  all,
  find,
  create,
  destroy,
  update
}
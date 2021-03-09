const db = require('../db/connection');
const Bike = require('../models/bike.js');
const faker = require('faker');

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const fakeIt = async () => {

  // create an empty array of 100 objects
  // use faker package to generate fake data
  const bikes = [...Array(50)].map(item => {
      return {
        model: faker.lorem.word(),
        make: faker.lorem.word(),
        category: faker.lorem.word(),
        description: faker.lorem.paragraph(),
        price: faker.lorem.word(),
        size: faker.lorem.word(),
          image_url: faker.internet.url(),
        isSold: false,
          onHold: false,
      }
  })
  await Bike.insertMany(bikes);
  console.log('Created 50 fake bikez!');
}

const run = async () => {
  await fakeIt();
  db.close();
}

run();
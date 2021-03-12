const db = require('../db/connection');
const Bike = require('../models/bike.js');
const User = require('../models/user.js');
const faker = require('faker');

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const fakeIt = async () => {

  // create an empty array of 100 objects
  // use faker package to generate fake data
  // const bikes = [...Array(50)].map(item => {
  //     return {
  //       model: faker.lorem.word(),
  //       make: faker.lorem.word(),
  //       category: faker.lorem.word(),
  //       description: faker.lorem.paragraph(),
  //       price: faker.lorem.word(),
  //       size: faker.lorem.word(),
  //         imageURL: faker.internet.url(),
  //       isSold: false,
  //         onHold: false,
  //     }
  // })
  const realBikes = [
    {
      make: "Trek",
      model: "3900",
      category: "Mountain",
      description: "this is a bike",
      price: "270",
      size: "21 inch",
      imageURL: "https://i.imgur.com/ehH8S6n.jpg",
      isSold: false,
      onHold: false,
    },
    {
      make: "Trek",
      model: "800 'Antelope'",
      category: "Mountain",
      description: "this is a bike",
      price: "?",
      size: "?",
      imageURL: "https://i.imgur.com/1hh5xda.jpg",
      isSold: false,
      onHold: false,
    },
    {
      make: "Mongoose",
      model: "Maneuver",
      category: "Mountain",
      description: "this is a bike",
      price: "?",
      size: "?",
      imageURL: "https://i.imgur.com/sSYUp0H.jpg",
      isSold: false,
      onHold: false,
    },
    {
      make: "Giant",
      model: "Rincon",
      category: "Hybrid",
      description: "this is a bike",
      price: "250",
      size: "17.5\"",
      imageURL: "https://i.imgur.com/OBUSqMi.jpg",
      isSold: false,
      onHold: false,
    },
    {
      make: "Giant",
      model: "?",
      category: "Hybrid",
      description: "this is a bike",
      price: "?",
      size: "?",
      imageURL: "https://i.imgur.com/OBUSqMi.jpg",
      isSold: false,
      onHold: false,
    },
    {
      make: "Giant",
      model: "Rincon",
      category: "Mountain",
      description: "this is a bike",
      price: "250",
      size: "17.5\"",
      imageURL: "https://i.imgur.com/ky3ppTJ.jpg",
      isSold: false,
      onHold: false,
    },
    {
      make: "Schwinn",
      model: "World Sport",
      category: "Commuter",
      description: "this is a bike",
      price: "200",
      size: "49cm",
      imageURL: "https://i.imgur.com/9Wr3lx7.jpg",
      isSold: false,
      onHold: false,
    },
    {
      make: "Schwinn",
      model: "Highplains",
      category: "Mountain",
      description: "this is a bike",
      price: "250",
      size: "17in",
      imageURL: "https://i.imgur.com/1d4reRu.jpg",
      isSold: false,
      onHold: false,
    },
    {
      make: "Huffy",
      model: "Manitoba",
      category: "Mountain",
      description: "this is a bike",
      price: "200",
      size: "17in",
      imageURL: "https://i.imgur.com/z77q4zE.jpg",
      isSold: false,
      onHold: false,
    },
    {
      make: "Specialized",
      model: "Hard Rock",
      category: "Mountain",
      description: "this is a bike",
      price: "300",
      size: "20in",
      imageURL: "https://i.imgur.com/raICMuq.jpg",
      isSold: false,
      onHold: false,
    },
    {
      make: "Specialized",
      model: "Expedition",
      category: "Mountain",
      description: "this is a bike",
      price: "?",
      size: "?",
      imageURL: "https://i.imgur.com/w05BnXO.jpg",
      isSold: false,
      onHold: false,
    },
    {
      make: "Motobecane",
      model: "300 HT",
      category: "Mountain",
      description: "not a duplicate two of the same bike",
      price: "250",
      size: "15.5in",
      imageURL: "https://i.imgur.com/09HoehL.jpg",
      isSold: false,
      onHold: false,
    },
    {
      make: "Motobecane",
      model: "300 HT",
      category: "Mountain",
      description: "not a duplicate 2 of the same bike",
      price: "250",
      size: "15.5in",
      imageURL: "https://i.imgur.com/lggNgpV.jpg",
      isSold: false,
      onHold: false,
    },
    {
      make: "Lece",
      model: "Pharo",
      category: "Commuter",
      description: "steel is real - AS IS",
      price: "100",
      size: "15in",
      imageURL: "https://i.imgur.com/lJIInem.jpg",
      isSold: false,
      onHold: false,
    },
    {
      make: "Raleigh",
      model: "Record",
      category: "Commuter",
      description: "I am bike",
      price: "200",
      size: "48cm",
      imageURL: "https://i.imgur.com/6AmSbYb.jpg",
      isSold: false,
      onHold: false,
    },
    {
      make: "Trek",
      model: "3900",
      category: "Mountain",
      description: "I am nicer bike",
      price: "475",
      size: "19.5in",
      imageURL: "https://i.imgur.com/bdMHpjB.jpg",
      isSold: false,
      onHold: false,
    },
    {
      make: "Trek",
      model: "Antelope 820",
      category: "Mountain",
      description: "I am A bike",
      price: "275",
      size: "20in",
      imageURL: "https://i.imgur.com/p0XxID8.jpg",
      isSold: false,
      onHold: false,
    },
    {
      make: "Trek",
      model: "Antelope 820",
      category: "Mountain",
      description: "I am A bike",
      price: "275",
      size: "20in",
      imageURL: "https://i.imgur.com/p0XxID8.jpg",
      isSold: false,
      onHold: false,
    }];
    
    
    






  await Bike.insertMany(realBikes);
  // console.log('Created 50 fake bikez!');
}

const run = async () => {
  await fakeIt();
  db.close();
}

run();
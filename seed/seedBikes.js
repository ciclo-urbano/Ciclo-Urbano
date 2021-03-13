const db = require("../db/connection");
const Bike = require("../models/bike.js");
const User = require("../models/user.js");
const faker = require("faker");

db.on("error", console.error.bind(console, "MongoDB connection error:"));

const fakeIt = async () => {
  //make n save fake builder
  const builderBee = new User({
    email: "bb@westtownbikes.org",
    firstName: "Builder",
    lastName: "Bee",
    password_digest: "test",
    bikesBuilt: [],
    bikesChecked: [],
  });
  await builderBee.save();

  //make n save fake checker
  const checkerBee = new User({
    email: "cb@westtownbikes.org",
    firstName: "Checker",
    lastName: "Bee",
    password_digest: "test",
    bikesBuilt: [],
    bikesChecked: [],
  });
  await checkerBee.save();

  //seed bikes w assoc
  const realBikes = [
    {
      make: "Trek",
      model: "3900",
      category: "Mountain",
      description: "this is a bike",
      price: 270,
      size: "21 inch",
      imageURL: "https://i.imgur.com/ehH8S6n.jpg",
      isSold: false,
      onHold: false,
      builderID: builderBee,
      checkerID: checkerBee,
    },
    {
      make: "Trek",
      model: "800 'Antelope'",
      category: "Mountain",
      description: "this is a bike",
      price: 250,
      size: "?",
      imageURL: "https://i.imgur.com/1hh5xda.jpg",
      isSold: false,
      onHold: false,
      builderID: builderBee,
      checkerID: checkerBee,
    },
    {
      make: "Mongoose",
      model: "Maneuver",
      category: "Mountain",
      description: "this is a bike",
      price: 225,
      size: "?",
      imageURL: "https://i.imgur.com/sSYUp0H.jpg",
      isSold: false,
      onHold: false,
      builderID: builderBee,
      checkerID: checkerBee,
    },
    {
      make: "Giant",
      model: "Rincon",
      category: "Hybrid",
      description: "this is a bike",
      price: 250,
      size: '17.5"',
      imageURL: "https://i.imgur.com/OBUSqMi.jpg",
      isSold: false,
      onHold: false,
      builderID: builderBee,
      checkerID: checkerBee,
    },
    {
      make: "Giant",
      model: "?",
      category: "Hybrid",
      description: "this is a bike",
      price: 300,
      size: "?",
      imageURL: "https://i.imgur.com/OBUSqMi.jpg",
      isSold: false,
      onHold: false,
      builderID: builderBee,
      checkerID: checkerBee,
    },
    {
      make: "Giant",
      model: "Rincon",
      category: "Mountain",
      description: "this is a bike",
      price: 250,
      size: '17.5"',
      imageURL: "https://i.imgur.com/ky3ppTJ.jpg",
      isSold: false,
      onHold: false,
      builderID: builderBee,
      checkerID: checkerBee,
    },
    {
      make: "Schwinn",
      model: "World Sport",
      category: "Commuter",
      description: "this is a bike",
      price: 200,
      size: "49cm",
      imageURL: "https://i.imgur.com/9Wr3lx7.jpg",
      isSold: false,
      onHold: false,
      builderID: builderBee,
      checkerID: checkerBee,
    },
    {
      make: "Schwinn",
      model: "Highplains",
      category: "Mountain",
      description: "this is a bike",
      price: 250,
      size: "17in",
      imageURL: "https://i.imgur.com/1d4reRu.jpg",
      isSold: false,
      onHold: false,
      builderID: builderBee,
      checkerID: checkerBee,
    },
    {
      make: "Huffy",
      model: "Manitoba",
      category: "Mountain",
      description: "this is a bike",
      price: 200,
      size: "17in",
      imageURL: "https://i.imgur.com/z77q4zE.jpg",
      isSold: false,
      onHold: false,
      builderID: builderBee,
      checkerID: checkerBee,
    },
    {
      make: "Specialized",
      model: "Hard Rock",
      category: "Mountain",
      description: "this is a bike",
      price: 300,
      size: "20in",
      imageURL: "https://i.imgur.com/raICMuq.jpg",
      isSold: false,
      onHold: false,
      builderID: builderBee,
      checkerID: checkerBee,
    },
    {
      make: "Specialized",
      model: "Expedition",
      category: "Mountain",
      description: "this is a bike",
      price: 250,
      size: "?",
      imageURL: "https://i.imgur.com/w05BnXO.jpg",
      isSold: false,
      onHold: false,
      builderID: builderBee,
      checkerID: checkerBee,
    },
    {
      make: "Motobecane",
      model: "300 HT",
      category: "Mountain",
      description: "not a duplicate two of the same bike",
      price: 250,
      size: "15.5in",
      imageURL: "https://i.imgur.com/09HoehL.jpg",
      isSold: false,
      onHold: false,
      builderID: builderBee,
      checkerID: checkerBee,
    },
    {
      make: "Motobecane",
      model: "300 HT",
      category: "Mountain",
      description: "not a duplicate 2 of the same bike",
      price: 250,
      size: "15.5in",
      imageURL: "https://i.imgur.com/lggNgpV.jpg",
      isSold: false,
      onHold: false,
      builderID: builderBee,
      checkerID: checkerBee,
    },
    {
      make: "Lece",
      model: "Pharo",
      category: "Commuter",
      description: "steel is real - AS IS",
      price: 100,
      size: "15in",
      imageURL: "https://i.imgur.com/lJIInem.jpg",
      isSold: false,
      onHold: false,
      builderID: builderBee,
      checkerID: checkerBee,
    },
    {
      make: "Raleigh",
      model: "Record",
      category: "Commuter",
      description: "I am bike",
      price: 200,
      size: "48cm",
      imageURL: "https://i.imgur.com/6AmSbYb.jpg",
      isSold: false,
      onHold: false,
      builderID: builderBee,
      checkerID: checkerBee,
    },
    {
      make: "Trek",
      model: "3900",
      category: "Mountain",
      description: "I am nicer bike",
      price: 475,
      size: "19.5in",
      imageURL: "https://i.imgur.com/bdMHpjB.jpg",
      isSold: false,
      onHold: false,
      builderID: builderBee,
      checkerID: checkerBee,
    },
    {
      make: "Trek",
      model: "Antelope 820",
      category: "Mountain",
      description: "I am A bike",
      price: 275,
      size: "20in",
      imageURL: "https://i.imgur.com/p0XxID8.jpg",
      isSold: false,
      onHold: false,
      builderID: builderBee,
      checkerID: checkerBee,
    },
    {
      make: "Trek",
      model: "Antelope 820",
      category: "Mountain",
      description: "I am A bike",
      price: 275,
      size: "20in",
      imageURL: "https://i.imgur.com/p0XxID8.jpg",
      isSold: false,
      onHold: false,
      builderID: builderBee,
      checkerID: checkerBee,
    },
  ];

  //put them into db
  await Bike.insertMany(realBikes);

  //save assoc data
  builderBee.bikesBuilt = await Bike.find({ builderID: builderBee });
  await builderBee.save();
  checkerBee.bikesChecked = await Bike.find({ checkerID: checkerBee });
  await checkerBee.save();
};

const run = async () => {
  await fakeIt();
  console.log("created assoc posts");
  db.close();
};

run();

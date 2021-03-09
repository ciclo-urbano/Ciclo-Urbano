const request = require("supertest");
const app = require("../app.js");
const mongoose = require("mongoose");
const Bike = require("../models/bike");
const faker = require("faker");

beforeAll(async () => {
  // create a test database url
  const MONGODB_TEST_URI = `mongodb://127.0.0.1/bikesTestDB`;

  // close the existing connection to the database so we can connect to the test database
  await mongoose.connection.close();

  // connect to the test database
  await mongoose.connect(MONGODB_TEST_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  });

  // create an array to test on of 50 bikes
  const bikes = [...Array(50)].map((item) => {
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
    };
  });
  await Bike.insertMany(bikes);
  console.log("Created 50 fake test bikes for our fake test ride!");
});

afterAll(async () => {
  // after all tests are complete delete the test database
  await mongoose.connection.db.dropDatabase();
  // close the database connection
  await mongoose.connection.close();
});

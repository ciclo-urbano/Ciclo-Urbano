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

// this variable will be used later in our tests
let bikeId;

// projects api tests
describe("Test the express routes for our bikes endpoints", () => {
  // test the GET express route for the '/api/bikes' path
  it("should get all bikes in the db", async (done) => {
    const res = await request(app).get(`/api/bikes`);
    // test that the status code is 200 - successful
    expect(res.statusCode).toEqual(200);
    // test that the response object has an _id property
    expect(res.body[0]).toHaveProperty("_id");
    // Save the _id value for later use with other tests
    bikeId = res.body[0]._id;
    // call the done() callback function, so that jest can proceed to the next test
    done();
  }),
    it("should show a specific bike", async (done) => {
      // create a GET request with SuperTest using the projectId from the previous POST test
      const res = await request(app).get(`/api/bikes/${bikeId}`);
      expect(res.statusCode).toEqual(200);
      expect(res.body).toHaveProperty("_id");
      done();
    }),
    // test the POST express route for the '/api/projects' path
    it("should CREATE a new bike", async (done) => {
      // create a POST request with SuperTest
      const res = await request(app).post(`/api/bikes`).send({
        model: "Karakoram",
        make: "GT",
        category: "Mountain",
        description: "bitchin' triple triangle",
        price: "$300",
        size: "60cm",
        image_url: "www.yeppers.com",
        isSold: false,
        onHold: false,
      });
      // test that the POST request was successful
      expect(res.statusCode).toEqual(201);
      expect(res.body).toHaveProperty("_id");
      // call the done() callback function, so that jest can proceed to the next test
      done();
    }),
    it("should update a bike", async (done) => {
      // create a PUT request with SuperTest using the projectId from the POST test
      const res = await request(app).put(`/api/bikes/${bikeId}`).send({
        model: "Karakoram",
        make: "GT",
        category: "Mountain",
        description: "bitchin' triple triangle",
        price: "$300",
        size: "60cm",
        image_url: "www.yeppers.com",
        isSold: false,
        onHold: false,
      });
      expect(res.statusCode).toEqual(200);
      expect(res.body).toHaveProperty("_id");
      done();
    }),
  it("should delete a bike", async (done) => {
    const res = await request(app).del(`/api/bikes/${bikeId}`);
    expect(res.statusCode).toEqual(200);
    expect(res.text).toEqual("Bicycle deleted, with extreme prejudice");
    done();
  });
});

afterAll(async () => {
  // after all tests are complete delete the test database
  await mongoose.connection.db.dropDatabase();
  // close the database connection
  await mongoose.connection.close();
});

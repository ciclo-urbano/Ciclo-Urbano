const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/user");
const db = require("../db/connection");


db.on("error", console.error.bind(console, "MongoDB connection error:"));

const SALT_ROUNDS = 11;
const TOKEN_KEY = process.env.TOKEN_KEY;

const signUp = async (req, res) => {
  try {
    const { email, password, firstName, lastName, admin } = req.body;
    const password_digest = await bcrypt.hash(password, SALT_ROUNDS);
    const user = new User({
      email,
      password_digest,
      firstName,
      lastName,
      admin,
    });

    await user.save();

    const payload = {
      username: user.username,
      email: user.email,
    };

    const token = jwt.sign(payload, TOKEN_KEY);
    res.status(201).json({ token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const signIn = async (credentials) => {
  try {
    const resp = await api.post("/sign-in", credentials);
    localStorage.setItem("token", resp.data.token);
    const user = jwtDecode(resp.data.token);
    return user;
  } catch (error) {
    throw error;
  }
};

const verify = async (req, res) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const payload = jwt.verify(token, TOKEN_KEY);
    if (payload) {
      res.json(payload);
    }
  } catch (e) {
    res.status(401).send("Not Authorized");
  }
};

// challenge mode
// const changePassword = async (req, res) => {};


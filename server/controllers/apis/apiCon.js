import User from "../../models/user.js";
import ENV from "../../config.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const getMethod = async (req, res) => {
    try {
        res.status(200).send({ message: "Welcome to API" });
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
}

export const register = async (req, res) => {
  try {
    const { email, password } = req.body;
    const name = email.split("@")[0];

    const existingUser = await User.findOne({ email });
    if (existingUser)
      return res.status(400).send({ message: "User already exists" });
    if (password) {
      bcrypt
        .hash(password, ENV.hashedPasswordLength)
        .then((hashedpassword) => {
          const newUser = new User({
            name,
            email,
            password: hashedpassword,
          });
          newUser
            .save()
            .then((result) => {
              const token = jwt.sign(
                {
                  userID: newUser._id,
                  name: newUser.name,
                },
                ENV.JWT_TOKEN
              );
              res
                .status(201)
                .send({ msg: "You has been register successfully", token });
            })
            .catch((error) => {
              res.status(500).send({ error });
            });
        })
        .catch((error) => {
          return res.send({ error: "unable to hashed passowrd" });
        });
    }
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const UserPresent = await User.findOne({ email });
    if (!UserPresent)
      return res.status(400).send({ message: "User does not exists" });
    else {
      bcrypt.compare(password, UserPresent.password).then((result) => {
        if (result) {
          const token = jwt.sign(
            {
              userID: UserPresent._id,
              name: UserPresent.name,
            },
            ENV.JWT_TOKEN
          );
          res
            .status(201)
            .send({ msg: "You has been login successfully", token });
        } else {
          res.status(500).send({ error: "unable to login" });
        }
      });
    }
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

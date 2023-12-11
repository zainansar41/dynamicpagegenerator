import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../../models/user.js";
import ENV from "../../config.js";

export async function GetLogin(req, res) {
  try {
    res.render("Login");
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
}

export async function PostSignup(req, res) {
  try {
    const { email, password } = req.body;
    const name = email.split("@")[0];

    const existingUser = await User.findOne({ email });
    if (existingUser)
      return res.status(200).send({ error: "User already exists" });

    if (password) {
      bcrypt.hash(password, 12).then(async (hashedpassword) => {
        const newUser = new User({
          name,
          email,
          role: 'admin',
          password: hashedpassword,
        });

        await newUser.save();

        // Set user session
        req.session.user = {
          userID: newUser._id,
          name: newUser.name,
        };

        res.status(201).send({
          message: "You have been registered successfully",
          user: req.session.user,
        });
      });
    }
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
}

export async function PostLogin(req, res) {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) return res.status(203).send({ message: "User does not exist" });

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (passwordMatch) {
      // Set user session
      req.session.user = {
        userID: user._id,
        name: user.name,
      };

      res.status(200).send({
        message: "You have been logged in successfully",
        user: req.session.user,
      });
    } else {
      res.status(203).send({ message: "Password does not match" });
    }
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
}

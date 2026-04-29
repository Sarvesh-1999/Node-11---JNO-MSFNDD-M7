import Users from "../models/user-model.js";
import bcrypt from "bcrypt";

export async function handleRegister(req, res) {
  if (!req.body) {
    return res.status(400).json({
      success: false,
      message: "input data is missing",
    });
  }

  let { username, email, password, role } = req.body;

  if (!username || !email || !password) {
    return res.status(400).json({
      success: false,
      message: "all input fields are required",
    });
  }

  try {
    let existingUser = await Users.findOne({ email });

    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: "user already exists",
      });
    }
    //! password hash using bcrypt
    let salt = await bcrypt.genSalt(10);
    let hashedPassword = await bcrypt.hash(password, salt);

    let newUser = await Users.create({
      username,
      email,
      password: hashedPassword,
      role,
    });

    if (!newUser) {
      return res.status(400).json({
        success: false,
        message: "unable to create",
      });
    }

    res.status(201).json({
      success: true,
      message: "user created",
      data: newUser,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "something went wrong",
    });
  }
}

export async function handleLogin(req, res) {}

const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const secretKey = "test";

const User = require("../model/user.model");

async function signin(req, res) {
  try {
    const { email, password } = req.body;

    const existingUser = await User.findOne({ email });

    if (!existingUser)
      return res
        .status(404)
        .json({ message: `User does'not exist with this email` });

    const isPasswordCorrect = await bcrypt.compare(
      password,
      existingUser.password
    );
    if (!isPasswordCorrect)
      return res.status(404).json({ message: `Invalid password` });

    const token = jwt.sign(
      { email: existingUser.email, id: existingUser._id },
      secretKey,
      { expiresIn: "1h" }
    );
    return res.status(200).json({ result: existingUser, token });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Server error" });
  }
}

async function signup(req, res) {
  try {
    const { email, password, firstName, lastName, confirmPassword } = req.body;

    const existingUser = await findOne({ email });
    if (existingUser)
      return res
        .status(400)
        .json({ message: "User Already exist with this email." });

    if (password !== confirmPassword)
      return res.status(400).json({ message: "Password do not match" });
     const hashPassword=bcrypt.hash(password,12);

     const result=User.create({email,password:hashPassword,name:`${firstName} ${lastName}`});

    const token= jwt.sign(
        { email: result.email, id:result._id },
        secretKey,
        { expiresIn: "1h" }
     )

     return res.status(200).json({ result, token });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Server error" });
  }
}

module.exports = {
  signin,
  signup,
};

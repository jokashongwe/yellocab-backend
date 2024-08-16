const User = require("../model/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const jwtSecret = require("../config/jwtSecret");

exports.loginUser = async (req, res, next) => {
  console.log("DEBUG loginUser");
  const { phone, password } = req.body;

  const user = await User.findOne({ phone: phone });

  if (user) {
    const isPasswordCorrect = await bcrypt.compare(password, user.password);
    if (isPasswordCorrect) {
      const token = jwt.sign(user.phone, jwtSecret);

      return res.json({ token: token });
    }
    return res.send(`Password does not match email ${v}`);
  }
  return res.send(`The phone ${phone} does not exist`);
};

exports.createUser = async (req, res, next) => {
  try {
    const { firstName, lastName, phone, password } = req.body;
    console.log("DEBUG: createUser - " + { firstName, lastName, phone });

    if (await User.findOne({ phone })) {
      const error = new Error(
        `An account with the phone ${phone} already exists`
      );
      error.statusCode = 409;
      throw error;
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    const user = new User({
      lastName,
      firstName,
      phone,
      password: hashedPassword,
    });
    const result = await user.save();
    res.send(result);
  } catch (err) {
    next(err);
  }
};

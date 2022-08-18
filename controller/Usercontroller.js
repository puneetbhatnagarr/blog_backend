const userModel = require("../models/user.js");
const bcrypt = require('bcrypt')
var jwt = require('jsonwebtoken');
class Usercontroller {
  static userregistration = async (req, res) => {
    const { name, email, password, password_confirmation } = req.body;
    const user = await userModel.findOne({ email: email });
    if (user) {
      res.send({ status: "failed", message: "ᴛʜɪꜱ ᴇᴍᴀɪʟ ɪꜱ ᴀʟʀᴇᴀᴅʏ ᴇxɪᴛꜱ" });
    } else {
      if (name && email && password && password_confirmation) {
        if (password === password_confirmation) {
          try {
            const salt = await bcrypt.genSalt(10);
            const hashPassword = await bcrypt.hash(password, salt);
            const doc = new userModel({
              name: name,
              email: email,
              password: hashPassword,
            });
            await doc.save();
            res
              .status(201)
              .send({
                status: "success",
                message: "Registration Successfully...",
              });
          } catch (error) {
            console.log(error);
          }
        } else {
          res.send({ status: "failed", message: "Password not matched" });
        }
      } else {
        res.send({ status: "failed", message: "All field are required" });
      }
    }
  };

  static user_login = async (req, res) => {
    // console.log(req.body)
    try {
      const { email, password } = req.body;
      if (email && password) {
        const user = await userModel.findOne({ email: email });
        console.log(user)
        if (user != null) {
          const isMatch = await bcrypt.compare(password, user.password);
          if (user.email === email && isMatch) {
            const token = jwt.sign({ userID: user._id }, process.env.JWT_SECRET_KEY, { expiresIn: '5d' })
            console.log(token)
            res.cookie('token',token)
           // console.log(user);
            res
            .status(201)
            .send({
              status: "success",
              message: "Login Successfully...",
              "Token":token
            });
          } else {
            res.send({
              status: "failed",
              meassage: "email and password does not match",
            });
          }
        } else {
          res.send({
            status: "failed",
            message: "You are not registered user",
          });
        }
      }
    } catch (error) {
      console.log(error);
    }
  };
}
module.exports = Usercontroller;
import User from "../models/User.js";

class UsersController {
  async index(req, res) {
    let users = await User.find({});
    return res.json(users);
  }

  show(req, res) {
    res.send("Show user " + req.params.id);
  }

  async insert(req, res) {
    try {
      let image = "";
      if (req.file) {
        image = req.file.filename;
      }
      let findUser = await User.findOne({ email: req.body.email });
      if (findUser) {
        return res.status(500).json({ email: "Email already exists" });
      }else{
      await User.create({ ...req.body, image: image });
      return res.status(201).json({ message: "User created successfully" });
      }
    } catch (err) {
      return res
        .status(500)
        .json({ message: "Error creating user", error: err.message });
    }
  }
  update(req, res) {
    res.send("Update user " + req.params.id);
  }

  delete(req, res) {
    res.send("Delete user " + req.params.id);
  }
}

export default UsersController;

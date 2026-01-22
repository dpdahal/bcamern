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
    let image="";
    if (req.file) {
      image = req.file.filename;
    }
    await User.create({...req.body,image:image});
    return res.status(201).json({ message: "User created successfully" });
  }
  update(req, res) {
    res.send("Update user " + req.params.id);
  }

  delete(req, res) {
    res.send("Delete user " + req.params.id);
  }
}

export default UsersController;

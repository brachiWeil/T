import UserModel from "../Models/UserModel.js";


const UsersController = {
  getUsers: async (req, res) => {
    try {
      const users = await UserModel.find();
      res.json(users);
    } catch (e) {
      res.status(400).json({ message: e.message });
    }
  },
  add: async (req, res) => {

    try {
      const user = new UserModel(req.body);
      const savedUser = await user.save();
      res.json(savedUser);
    } catch (e) {
      res.status(400).json({ message: e.message });
    }
  },

  update: async (req, res) => {
    const { id } = req.params;
    try {
      const updatedUser = await UserModel.findByIdAndUpdate(id, req.body, { new: true });//עדכון לפי מזהה
      res.json(updatedUser);
    } catch (e) {
      res.status(400).json({ message: e.message });
    }
  },
  getById: async (req, res) => {
    try {
      const user = await UserModel.findById(req.params.id);
      if (!user)
        return res.status(404).json({ message: 'User not found' });
      res.json(user);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },
  delete: async (req, res) => {
    const { id } = req.params;
    try {
      const deletedUser = await UserModel.findByIdAndDelete(id);//מחיקה לפי מזהה
      res.json(deletedUser);
    } catch (e) {
      res.status(400).json({ message: e.message });
    }
  },
};

export default UsersController;

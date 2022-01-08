import User from "../models/userModel.js";

export const getUser = async (req, res) => {
    try {
      const users = await User.find();
      if (!users) {
        res
          .status(400)
          .json({ message: "Nema u bazi" });
        return;
      }
      res.status(200).json(users);
    } catch (error) {
      res.status(400).json({ message: error.message });
      return;
    }
};

export const deleteUser = async (req, res) => {
    const userId = req.body.userId;
    try {
      const user = await User.findById(userId);
      if (!user) {
        res.status(400).json({message: "User ne postoji" });
        return;
      }
      await User.findByIdAndDelete(userId);
      res
        .status(200)
        .json({ message: "Obrisan user" });
    } catch (error) {
        res.status(400).json({message: error.messsage });
        return;
    }
};

export const banUser = async (req, res) => {
    const userId = req.body.userId;
    try {
      const user = await User.findById(userId);
      if (!user) {
        res
          .status(400).json({message: "User ne postoji"});
        return;
      }
      await User.findByIdAndUpdate(user._id, { isBanned: true });
      res.status(200).json({ message: "User je banovan"});
    } catch (error) {
      res.status(400).json({ message: error.message });
      return;
    }
};

export const unbanUser = async (req, res) => {
    const userId = req.body.userId;
    try {
      const user = await User.findById(userId);
      if (!user) {
        res
          .status(400).json({message: "User ne postoji"});
        return;
      }
      await User.findByIdAndUpdate(user._id, {isBanned: false });
      res.status(200).json({ message: "User je odbanovan"});
    } catch (error) {
      res.status(400).json({ message: error.message });
      return;
    }
};
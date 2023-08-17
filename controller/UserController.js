import User from "../models/UserModels.js";

export const getUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const getUserByName = async (req, res) => {
    const name = req.params.name;
    try {
        const user = await User.findOne({ name: name });
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        res.json(user);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

export const saveUser = async (req, res) => {
    const user = new User(req.body);
    try {
        const insertedUser = await user.save();
        res.status(201).json(insertedUser);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const deleteUser = async (req, res) => {
    const name = req.params.name;
    try {
        const deletedUser = await User.findOneAndDelete({ name: name });
        if (!deletedUser) {
            return res.status(404).json({ message: "User not found" });
        }
        res.json({ message: "User deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Other controller functions...

export const updateUser = async (req, res) => {
    const name = req.params.name;
    const updates = req.body;  // Updated user data

    try {
        const updatedUser = await User.findOneAndUpdate({ name: name }, updates, { new: true });
        
        if (!updatedUser) {
            return res.status(404).json({ message: "User not found" });
        }
        res.json(updatedUser);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

import bcrypt from "bcrypt";
import { generateToken } from "../config/token.js";
import { User } from "../models/index.js";

class UserService {
  static async addUser(data) {
    try {
      const user = await User.findOne({ where: { username: data.username } });

      if (user) throw new Error("User already exist");

      const userToCreate = await User.create(data);

      return { error: false, data: userToCreate };
    } catch (error) {
      return { error: true, data: { message: error.message } };
    }
  }

  static async updateUser(data) {
    const { id } = data;
    try {
      const user = await User.findByPk(id);

      if (!user) throw new Error("User not found");

      if (data.username) user.username = data.username;
      if (data.role) user.role = data.role;
      if (data.password) {
        user.password = bcrypt.hashSync(data.password, bcrypt.genSaltSync(10));
      }

      await user.save();

      const userUpdated = await User.findByPk(id);

      return { error: false, data: userUpdated };
    } catch (error) {
      return { error: true, data: { message: error.message } };
    }
  }

  static async getUsers() {
    try {
      const users = await User.findAll();
      return { error: false, data: users };
    } catch (error) {
      return { error: true, data: error };
    }
  }

  static async getUserById(id) {
    try {
      const user = await User.findByPk(id);

      if (!user) throw new Error("User not found");
      return { error: false, data: user };
    } catch (error) {
      return { error: true, data: { message: error.message } };
    }
  }

  static async deleteUser(id) {
    try {
      const user = await User.findByPk(id);

      if (!user) throw new Error("User not found");

      const userDeleted = await User.destroy({ where: { id } });
      return { error: false, data: { message: "User delete success" } };
    } catch (error) {
      return { error: true, data: { message: error.message } };
    }
  }

  static async loginUser(data) {
    const { username, password } = data;
    try {
      const user = await User.findOne({ where: { username } });

      if (!user) throw new Error("User not found");

      const validated = user.validatePassword(password);

      if (!validated) throw new Error("Password not found");

      const payload = {
        email: user.email,
        username: user.username,
        role: user.role,
      };

      const token = generateToken(payload);

      return { error: false, data: { token } };
    } catch (error) {
      return { error: true, data: { message: error.message } };
    }
  }

  static async me(username) {
    if (!username) throw new Error("Invalid username");
    try {
      const user = await User.findOne({ where: { username } });
      if (!user) throw new Error("User not found");
      return { error: false, data: user };
    } catch (error) {
      return { error: true, data: { message: error.message } };
    }
  }

  static async logoutUser(username) {
    try {
      const user = await User.findOne({ where: { username } });
      if (!user) throw new Error("User not found");

      return { error: false, data: { message: "Logout successs" } };
    } catch (error) {
      return { error: true, data: { message: error.message } };
    }
  }
}

export default UserService;

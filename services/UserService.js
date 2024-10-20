import bcrypt from "bcrypt";
import { generateToken } from "../config/token.js";
import { User } from "../models/index.js";

class UserService {
  static async addUser(data) {
    try {
      const user = await User.create(data);
      return { error: false, data: user };
    } catch (error) {
      return { error: true, data: error };
    }
  }

  static async updateUser(data) {
    const { id } = data;
    try {
      const user = await User.findByPk(id);

      if (data.username) user.username = data.username;
      if (data.role) user.role = data.role;
      if (data.password) {
        user.password = bcrypt.hashSync(data.password, bcrypt.genSaltSync(10));
      }

      await user.save();

      const userUpdated = await User.findByPk(id);

      return { error: false, data: userUpdated };
    } catch (error) {
      console.log(error);
      return { error: true, data: error };
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
      return { error: false, data: user };
    } catch (error) {
      return { error: true, data: error };
    }
  }

  static async deleteUser(id) {
    try {
      const userDeleted = await User.destroy({ where: { id } });
      return { error: false, data: { message: "User delete success" } };
    } catch (error) {
      return { error: true, data: error };
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
      return { error: true, data: error };
    }
  }
}

export default UserService;

import UserService from "../services/UserService.js";

class UserController {
  static async addUser(req, res) {
    const body = req.body;
    const { error, data } = await UserService.addUser(body);
    if (error) return res.status(400).json(data);

    return res.status(200).json(data);
  }

  static async updateUser(req, res) {
    const { id } = req.params;
    const body = req.body;
    const { error, data } = await UserService.updateUser({ ...body, id });
    if (error) return res.status(400).json(data);

    return res.status(200).json(data);
  }

  static async getUsers(req, res) {
    const { error, data } = await UserService.getUsers();
    if (error) return res.status(400).json(data);

    return res.status(200).json(data);
  }

  static async getUserById(req, res) {
    const { id } = req.params;
    const { error, data } = await UserService.getUserById(id);
    if (error) return res.status(400).json(data);

    return res.status(200).json(data);
  }

  static async deleteUser(req, res) {
    const { id } = req.params;
    const { error, data } = await UserService.deleteUser(id);
    if (error) return res.status(400).json(data);

    return res.status(200).json(data);
  }

  static async loginUser(req, res) {
    const body = req.body;

    const { error, data } = await UserService.loginUser(body);
    if (error) return res.status(400).json(data);
    res.cookie("token", data.token);
    return res.status(200).json(data);
  }

  static async me(req, res) {
    const { username } = req.user;
    const { error, data } = await UserService.me(username);
    if (error) return res.status(400).json(data);

    return res.status(200).json(data);
  }

  static async logoutUser(req, res) {
    const { username } = req.user;
    const { error, data } = await UserService.logoutUser(username);
    if (error) return res.status(400).json(data);

    res.clearCookie("token");
    return res.status(200).json(data);
  }
}

export default UserController;

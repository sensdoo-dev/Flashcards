const { User } = require('../db/models');

class UserService {
  async createUser(username) {
    return await User.create({ username });
  }

  async getAllUsers() {
    return await User.findAll();
  }

  async getUserById(id) {
    return await User.findByPk(id);
  }

  async updateUser(id, username) {
    const user = await this.getUserById(id);
    if (user) {
      user.username = username;
      await user.save();
      return user;
    }
    return null;
  }

  async deleteUser(id) {
    const user = await this.getUserById(id);
    if (user) {
      await user.destroy();
      return true;
    }
    return false;
  }
}

module.exports = new UserService();

const userService = require('../services/usersService');
const formatResponse = require('../utils/formatResponce'); 

class UserController {
  async register(req, res) {
    const { username } = req.body;
    try {
      const newUser = await userService.createUser(username);
      res
        .status(201)
        .json(formatResponse(201, 'Пользователь успешно зарегистрирован', newUser));
    } catch (error) {
      console.error('Ошибка при регистрации:', error);
      res
        .status(500)
        .json(
          formatResponse(500, 'Ошибка при регистрации пользователя', null, error.message),
        );
    }
  }

  async getAll(req, res) {
    try {
      const users = await userService.getAllUsers();
      res.json(formatResponse(200, 'Список пользователей получен', users));
    } catch (error) {
      res
        .status(500)
        .json(
          formatResponse(500, 'Ошибка при получении пользователей', null, error.message),
        );
    }
  }
}

module.exports = new UserController();

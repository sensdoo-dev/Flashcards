const TopicsService = require('../services/topicsService');
const formatResponse = require('../utils/formatResponce');

class TopicsController {
  static async getAllTopics(req, res) {
    try {
      const topics = await TopicsService.getAllTopic(); // Добавлено await

      if (!topics || topics.length === 0) {
        // Проверка на наличие тем
        return res.status(404).json(formatResponse(404, 'Темы не найдены'));
      }

      res.json(formatResponse(200, 'Темы успешно получены', topics)); // Форматированный ответ
    } catch (error) {
      console.error(error); // Логирование ошибки
      res.status(500).json(formatResponse(500, 'Ошибка сервера', null, error.message)); // Ответ с ошибкой
    }
  }

  static async getAllQuestionsByTopicId(req, res) {
    try {
      const { id } = req.params;

      if (id) {
        const questions = await TopicsService.getAllQuestionsByTopicId(id);
        console.log(questions);

        if (questions && questions.length > 0) {
          // Проверка на наличие вопросов
          return res.json(formatResponse(200, 'OK', questions));
        } else {
          return res.status(404).json(formatResponse(404, 'Вопросов не найдено')); // Возвращаем 404
        }
      } else {
        return res.status(400).json(formatResponse(400, 'ID темы не указан')); // Возвращаем 400 если ID не указан
      }
    } catch (error) {
      console.error(error); // Логирование ошибки
      res.status(500).json(formatResponse(500, 'Ошибка сервера', null, error.message)); // Ответ с ошибкой
    }
  }
}

module.exports = TopicsController;

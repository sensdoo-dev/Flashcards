const QuestistionService = require('../services/questionsService');
const formatResponse = require('../utils/formatResponce');

class QuestionController {
  static async getAllQuestionsByTopicId(req, res) {
    try {
      const { id } = req.params;
      if (id) {
        const questions = await QuestistionService.getAllQuestionsByTopicId(id);
        console.log(questions);

        if (questions && questions.length > 0) {
          // Проверка на наличие вопросов
          res.json(formatResponse(200, 'OK', questions));
        } else {
          res.status(404).json(formatResponse(404, 'Вопросов не найдено')); // Возвращаем 404
        }
      } else {
        res.status(400).json(formatResponse(400, 'ID темы не указан')); // Возвращаем 400 если ID не указан
      }
    } catch (error) {
      console.error(error); // Логирование ошибки
      res.status(500).json(formatResponse(500, 'Ошибка сервера', null, error.message)); // Ответ с ошибкой
    }
  }
}

module.exports = QuestionController;

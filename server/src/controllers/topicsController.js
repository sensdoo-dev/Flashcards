const TopicsService = require('../services/topicsService');
const formatResponse = require('../utils/formatResponce');

class TopicsController {
  static async getAllQuestionsByTopicId(req, res) {
    try {
      const { id } = req.params;
      if (id) {
        const questions = await TopicsService.getAllQuestionsByTopicId(id);
        console.log(questions);

        if (questions.length) {
          res.json(formatResponse(200, 'OK', questions));
          console.log('if');
        } else {
          console.log('else');
          res.json(formatResponse(400, 'Вопросов не найдено'));
        }
      }
    } catch (error) {
      formatResponse(500, 'Лежим, отдыхаем', null, error.message);
    }
  }
}

module.exports = TopicsController;

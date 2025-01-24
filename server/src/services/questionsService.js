const { Question, Topic } = require('../db/models');

class QuestionService {
  static async getAllQuestionsByTopicId(id) {
    const questions = await Question.findAll({
      where: { topic_id: id }, // Предполагаем, что у вас есть поле topic_id в модели Question
      include: [Topic], // Включаем информацию о теме
    });
    return questions;
  }
}

module.exports = QuestionService;

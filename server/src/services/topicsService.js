const { Topic, Question } = require('../db/models');

class TopicsService {
  static async getAllTopic() {
    const topics = await Topic.findAll();
    return topics;
  }

  static async getAllQuestionsByTopicId(id) {
    const questions = await Topic.findAll({
      where: {
        id,
      },
      include: [
        {
          model: Question,
        },
      ],
      // attributes: [],
    });

    return questions;
  }
}

module.exports = TopicsService;

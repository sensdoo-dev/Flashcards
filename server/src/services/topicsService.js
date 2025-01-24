const Topic = require('../db/models/topic');
const Question = require('../db/models/question');

class TopicsService {
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

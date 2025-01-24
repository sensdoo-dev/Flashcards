const { Question, Topic } = require('../db/models');

class QuestionService {
  static async getAllQuestionsByTopicId(id) {
    // const questions = await Topic.findAll({
    //   where: {
    //     id,
    //   },
    //   include: [
    //     {
    //       model: Question,
    //     },
    //   ],
    //   // attributes: [],
    // });
    const questions = Question.findAll({
      include: [
        {
          model: Topic,
          where: {
            id,
          },
        },
      ],
    });
    return questions;
  }
}

module.exports = QuestionService;

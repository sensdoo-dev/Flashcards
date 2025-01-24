const router = require('express').Router();
const QuestionController = require('../../controllers/questionsController');

// /api/users
router.route('/:topicId').get(QuestionController.getAllQuestionsByTopicId);

module.exports = router;

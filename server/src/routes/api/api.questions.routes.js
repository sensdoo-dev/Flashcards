const router = require('express').Router();
const QuestionController = require('../../controllers/questionsController');

// /api/topics/:id/questions
router.route('/:id').get(QuestionController.getAllQuestionsByTopicId); // Получение всех вопросов по ID темы

module.exports = router;

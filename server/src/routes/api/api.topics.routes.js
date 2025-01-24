const router = require('express').Router();
const TopicsController = require('../../controllers/topicsController');
const formatResponse = require('../../utils/formatResponce');

// /api/users
router
  .route('/:id/questions')
  // Create
  .get(TopicsController.getAllQuestionsByTopicId);

module.exports = router;

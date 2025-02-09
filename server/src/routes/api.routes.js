const router = require('express').Router();
const apiUserRouter = require('./api/api.user.routes');
const apiTopicRouter = require('./api/api.topics.routes');
const apiQuestionRouter = require('./api/api.questions.routes');

router.use('/user', apiUserRouter);
router.use('/topics', apiTopicRouter);
router.use('/questions', apiQuestionRouter);

module.exports = router;

const router = require('express').Router();
const formatResponse = require('../../utils/formatResponce');

// /api/users
router
  .route('/')
  // Create
  .post(async (req, res) => {
    try {
    } catch (error) {
      res.status(400).json(formatResponse(400, 'No created', null, error.message));
    }
  })
  // Read
  .get(async (req, res) => {
    try {
    } catch (error) {
      res.status(404).json(formatResponse(400, 'Error', null, error.message));
    }
  });

module.exports = router;

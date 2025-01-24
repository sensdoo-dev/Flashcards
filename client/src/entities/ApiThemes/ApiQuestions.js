const API_URL = 'http://localhost:3000';

export default class ApiQuestions {
  static async getAllQuestionsByTopicId(topicId) {
    const topics = await fetch(`${API_URL}/api/questions/${topicId}`);
    return topics;
  }
}

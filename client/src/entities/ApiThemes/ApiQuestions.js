const API_URL = 'http://localhost:3000';

export default class ApiQuestions {
  static async getAllQuestionsByTopicId(topicId) {
    const topics = await fetch(`${API_URL}/api/questions/${topicId}`);
    const result = await topics.json()
    console.log(result);
    
    return result;
  }
}

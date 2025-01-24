const API_URL = 'http://localhost:3000';

export default class ApiThemes {
  static async getQuestionByThemeId(id) {
    const questions = await fetch(`${API_URL}/api/topics/${id}/questions`);
    return questions;
  }

  static async getTopics() {
    const topics = await fetch(`${API_URL}/api/topics/`);
    return topics;
  }
}

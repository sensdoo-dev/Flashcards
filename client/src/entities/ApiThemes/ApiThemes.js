const API_URL = 'http://localhost:3000';

export default class ApiThemes {
  static async getQuestionByThemeId(id) {
    const questions = await fetch(`${API_URL}/api/topic/${id}/questions`);
    console.log(questions);
  }
}

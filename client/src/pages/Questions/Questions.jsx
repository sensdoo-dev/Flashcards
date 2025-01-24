import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ApiQuestions from "../../entities/ApiThemes/ApiQuestions"
import Question from "../../widgets/ui/Question/Question"

export default function Questions() {


  const { topicId } = useParams()
  const [questions, setQuestions] = useState([])

  async function questionsHandler() {
    const questions = await ApiQuestions.getAllQuestionsByTopicId(topicId)
    setQuestions(questions.data)
    console.log(questions.data);
    
  }

  useEffect(() => {
    questionsHandler()
  }, [topicId])

  return (
    <>
      <h1>{topicId}</h1>
      {questions.map((question) => (
        <Question key={question.id} question={question} />
      ))}
    </>
  );
}
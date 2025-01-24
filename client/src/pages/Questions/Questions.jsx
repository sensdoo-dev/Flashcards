import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ApiQuestions from "../../entities/ApiThemes/ApiQuestions"
import Question from "../../widgets/ui/Question/Question"

export default function Questions() {

  const mockQuestions = [
    {id: 1, title: 'aaa'},
    {id: 2, title: 'bbb'},
    {id: 3, title: 'ccc'},
    {id: 4, title: 'ddd'}
  ]

  const { topicId } = useParams()
  const [questions, setQuestions] = useState([])

  async function questionsHandler() {
    const questions = await ApiQuestions.getAllQuestionsByTopicId(topicId)
    setQuestions(questions)
  }

  useEffect(() => {
    questionsHandler()
  }, [topicId])

  return (
    <>
      <h1>{topicId}</h1>
      {mockQuestions.map(question => <Question key={question.id} question={question} />)}
    </>
  )
}
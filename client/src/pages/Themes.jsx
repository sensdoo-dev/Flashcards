import { useEffect, useState } from "react"
import Theme from "../widgets/ui/Theme/Theme"
import ApiThemes from "../entities/ApiThemes/ApiThemes"

export default function Themes() {

  async function topicsHandler() {
    const topics = await ApiThemes.getTopics()
    topics.console.log(topics);
    
    return topics
  }
  const mockArr = [
    {id: 1, title: 'Шутки за 300'},
    {id: 2, title: 'Я знаю React?'},
    {id: 3, title: 'Гарри Поттер'}
  ]
  const [topics, setTopics] = useState([])

  useEffect(() => {
    const topics = topicsHandler()
    setTopics(topics)
  }, [])

  return (
    <>
      <h1>Выберите тему:</h1>
      {mockArr.map(theme => <Theme key={theme.id} theme={theme} />)}
    </>
  )
}
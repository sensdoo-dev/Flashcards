import Theme from "../widgets/ui/Theme"

export default function Themes() {
  const mockArr = [
    {id: 1, title: 'Шутки за 300'},
    {id: 2, title: 'Я знаю React?'},
    {id: 3, title: 'Гарри Поттер'}
  ]

  return (
    <>
      <h1>Выберите тему:</h1>
      {mockArr.map(theme => <Theme key={theme.id} theme={theme} />)}
    </>
  )
}
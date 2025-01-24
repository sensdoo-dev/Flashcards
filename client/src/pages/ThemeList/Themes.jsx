import React, { useEffect, useState } from 'react';
import Theme from '../../widgets/ui/Theme/Theme';
import ApiThemes from '../../entities/ApiThemes/ApiThemes';

export default function Themes() {
  const [themes, setThemes] = useState([]); // Инициализация как пустой массив для тем
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchThemes = async () => {
      try {
        const response = await ApiThemes.getTopics(); // Получаем темы
        console.log(response); // Проверяем ответ

        // Проверяем формат ответа
        if (response.ok) {
          const data = await response.json(); // Преобразуем ответ в JSON
          setThemes(data.data); // Устанавливаем темы из поля data
        } else {
          setError('Ошибка при загрузке тем'); // Устанавливаем сообщение об ошибке
        }
      } catch (err) {
        setError('Ошибка при загрузке тем');
      } finally {
        setLoading(false);
      }
    };

    fetchThemes();
  }, []);

  if (loading) {
    return <h1>Загрузка...</h1>;
  }

  if (error) {
    return <h1>{error}</h1>;
  }

  if (!Array.isArray(themes) || themes.length === 0) {
    return <h1>Нет доступных тем</h1>; // Обработка случая, когда темы отсутствуют
  }

  return (
    <>
      <h1>Выберите тему:</h1>
      {themes.map((theme) => (
        <Theme key={theme.id} theme={theme} /> // Отображаем каждую тему
      ))}
    </>
  );
}

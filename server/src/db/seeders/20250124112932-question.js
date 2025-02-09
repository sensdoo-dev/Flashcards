const {Question}=require('../models')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   await Question.bulkCreate([
    {question: `Что означает слово “чушпан” согласно сериалу “Слово пацана”?,Опущенный,Человек не состоящий в группировке,Богатый,Неряшливый`,
      answer: 2,
      topic_id: 1},
    {question: `Как бы звали бы Хазбика если бы он жил в Древнем Риме?,Максимус,Минимус,Гектор,Херкулес`,
      answer: 2,
      topic_id: 1},
    {question: `Как правильно?,DBeaver курва,Docker курва,Postgre курва,Пропес курва`,
      answer: 1,
      topic_id: 1},
    {question: `Какими должны были быть правильные тяги?,Сахарные,Шелковые,Сочные,Бархатные`,
      answer: 4,
      topic_id: 1},
      {question: `Что сильнее всего по мнению Доминика Торетто?,Тачки,Деньги,Семья,Закладные`,
      answer: 3,
      topic_id: 1},
      
    {question: `Сколько лет длилась самая короткая война?,3 года 8 месяцев,38 минут,3 месяца 10 дней,3 дня 6 часов`,
      answer: 2,
      topic_id: 2},
       
    {question: `Что СССР обменял на пепси в 1989 году?,На 100 тысяч тонн хлопка,На 30 танкеров с нефтью,На 17 подводных лодок,На 30 танкеров с лучшей водкой`,
      answer: 3,
      topic_id: 2},
       
    {question: `В каком году был представлен iPhone?,2007,2008,2006,2009`,
      answer: 1,
      topic_id: 2},
       
    {question: `Какой французский монарх был известен тем что устраивал самые дикие вечеринки но умер танцуя?,Король Людовик XIV,Генрих III,Шарль VIII,Наполеон`,
      answer: 1,
      topic_id: 2},
       
    {question: `Какой классический музыкант написал песню Leck mich im Arsch или Целуй мою задницу?,Людвиг ван Бетховен,Джеймс Мэдисон,Фредерик Шопен,Вольфганг Амадей Моцарт`,
      answer: 4,
      topic_id: 2},
    {question: `Где установлен движок V8?,Урал-375Д,Ferrari Portofino,Google Chrome,Везде`,
      answer: 4,
      topic_id: 3},
         
    {question: `Когда появился первый полноценный компьютер?,1978,1951,1946,866`,
      answer: 3,
      topic_id: 3},
         
    {question: `Что из этого плохая идея?,Делать деплой в пятницу,Ставить винду на мак,Переписать все request'ы на import,Это все фигня какая-то`,
      answer: 4,
      topic_id: 3},
         
    {question: `Чем больше изучаешь JS тем?,Тем я больше уверен в своих силах!,Тем я больше понимаю как устроена современная веб-разработка,Тем я больше понимаю что ничего не понимаю.`,
      answer: 3,
      topic_id: 3},
         
    {question: `Кто является одним из основателей компании Яндекс?,Аркадий Волож,Сергей Брин,Евгений Касперский,Марк Цукерберг`,
      answer: 1,
      topic_id: 3}  
   ])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};

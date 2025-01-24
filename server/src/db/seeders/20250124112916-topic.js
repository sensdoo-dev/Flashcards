const { Topic } = require('../models');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await Topic.bulkCreate([
      { title: 'Мемчики', user_id: 1 },
      { title: 'История по сторис', user_id: 1 },
      { title: 'Типа программист', user_id: 1 },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};

'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
     await queryInterface.bulkInsert('Users', [{
          firstName: 'John Doe',
          lastName: 'jjj',
          email: '12222@qq.com',
          createdAt: '111222',
          updatedAt: '11122',
       },{
        firstName: 'John Doe',
        lastName: 'jjj',
        email: '12222@qq.com',
        createdAt: '111222',
        updatedAt: '11122',
     }], {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     await queryInterface.bulkDelete('Users', null, {});
  }
};

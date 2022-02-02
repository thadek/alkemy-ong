'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('activities', [
      {
      name: 'Actividad Test',
      content: 'Demo',
      image:'https://live.staticflickr.com/65535/49737580966_d7eb77f786_b.jpg'
    },{
      name: 'Actividad Test2',
      content: 'Demo2',
      image:'https://live.staticflickr.com/65535/49737580966_d7eb77f786_b.jpg'
    },{
      name: 'Actividad Test3',
      content: 'Demo3',
      image:'https://live.staticflickr.com/65535/49737580966_d7eb77f786_b.jpg'
    }
  ], {});

  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('activities', null, {});

  }
};

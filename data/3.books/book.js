const faker = require('faker')

const json = [
  {
    title: 'book1',
    ISBN: 'book1ISBN',
    stock: 3,
    author: 'book1author',
    description: 'book1description',
    category: 'book1category',
    createdAt: faker.date.past(),
    updatedAt: faker.date.recent()
  },
  {
    title: 'book2',
    ISBN: 'book1ISBN',
    stock: 3,
    author: 'book1author',
    description: 'book1description',
    category: 'book1category',
    createdAt: faker.date.past(),
    updatedAt: faker.date.recent()
  }
]

module.exports = json

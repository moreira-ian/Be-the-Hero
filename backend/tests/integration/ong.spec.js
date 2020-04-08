/* eslint-disable no-undef */
const request = require('supertest')
const app = require('../../src/app')
const connection = require('../../src/database/connection')

describe('ONG', () => {
  //cria migration
  beforeEach(async () => {
    await connection.migrate.rollback()
    await connection.migrate.latest()
  })
  //finaliza conexao com a Database
  afterAll(async () => {
    await connection.destroy()
  })

  it('should be able to create a new ONG', async () => {
    const response = await request(app).post('/ongs').send({
      name: 'APAD2',
      email: 'contato@apad.com.br',
      whatsapp: '4700000000',
      city: 'Rio de Janeiro',
      uf: 'RJ',
    })

    expect(response.body).toHaveProperty('id')
    expect(response.body.id).toHaveLength(8)
  })
})
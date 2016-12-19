/* eslint-env mocha */
import chai, { expect } from 'chai'
import chaiHttp from 'chai-http'
import app from '../src'

chai.use(chaiHttp)

import { version } from '../package.json'

describe('API', () => {
  it('should return API version on api GET', (done) => {
    chai.request(app.server)
      .get('/api/v0')
      .end((err, res) => {
        expect(res.status).to.equal(200)
        expect(res).to.be.json
        expect(res.text).to.be.an('string')
        expect(res.text).to.equal(JSON.stringify({ version }))
        done()
      })
  })
})

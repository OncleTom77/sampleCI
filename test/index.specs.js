var request = require('supertest')
var api = require('../index')

describe('contacts', function() {
	describe('GET /contacts', function() {
		it('should return the list of contacts', function() {
			return request(api).get('/contacts').send().expect(200)
		})
	})

	describe('POST /contacts/:name', function() {
		it('should return the contact', function() {
			return request(api).post('/contacts/toto').send().expect(200)
		})

		it('should not be authorized to create a new contact with an already registrated name', function() {
			return request(api).post('/contacts/exist').send().expect(403)
		})
	})

	describe('PUT /contacts/:name/:new', function() {
		it('should update contacts with the same name', function() {
			return request(api).put('/contacts/toto/tata').send().expect(200)
		})
	})

	describe('DELETE /contacts/:name', function() {
		it('should update contacts with the same name', function() {
			return request(api).delete('/contacts/toto').send().expect(200)
		})
	})
})

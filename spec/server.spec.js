const server = require("../backend/server");
const request = require('supertest');
const assert = require('assert')

describe("Testing API method",() => {
    it('postive 200 response code', function (done) {
        request(server)
            .get("/api/flickerFeed")
            .expect(200)
            .expect('Content-Type','application/json')
            .expect(function(res) {
                assert.ok(res.length>0);
            });
            done();

        });
    it('search with tags', function (done) {
        request(server)
            .get("/api/flickerFeed?tags=abcd")
            .expect(function(res) {
                assert.ok(res.length>0);
            });
            done();
        });
    });

import request from 'supertest';
import { expect } from 'chai';
import  app from '../app'; // Adjust the import path as necessary

describe('home route', function () { 
    it("/ responds with 200", function (done) {
        request(app).get("/").expect(200, done);
    });
});
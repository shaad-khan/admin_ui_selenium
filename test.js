'use strict';

const chai = require('chai');
const expect = require('chai').expect;
var request = require("request");
var encodedPat = encodePat('72cwherppis2lgz5gjcrahj6bunq5g5fhfdslkawzy6ie2lk24wa');
chai.use(require('chai-http'));
const app="http://jsonplaceholder.typicode.com";
//const app = require('../index.js'); // Our app

describe('API endpoint', function() {
  this.timeout(5000); // How long to wait for a response (ms)

  before(function() {

  });

  after(function() {

  });

  it('should return all values', function() {
    return chai.request(app)
      .get('/posts')
      .then(function(res) {
        try {
        expect(res).to.have.status(200);
        expect(res).to.be.json;
        expect(res.body).to.be.a('integer');
      }
      catch (err) {
  req(err.message);
  throw err
}
        //expect(res.body[0].id).to.be.an('integer');
      })
  });

  // GET - Invalid path
  it('should return Not Found', function() {
    return chai.request(app)
      .get('/INVALID_PATH')
      .then(function(res) {
        throw new Error('Path exists!');
      })
      .catch(function(err) {
        expect(err).to.have.status(404);
      });
  });

  // POST - Add new color
  /*it('should add new color', function() {
    return chai.request()
      .post('/colors')
      .send({
        color: 'YELLOW'
      })
      .then(function(res) {
        expect(res).to.have.status(201);
        expect(res).to.be.json;
        expect(res.body).to.be.an('object');
        expect(res.body.results).to.be.an('array').that.includes(
          'YELLOW');
      });
  });

  // POST - Bad Request
  it('should return Bad Request', function() {
    return chai.request()
      .post('/colors')
      .type('form')
      .send({
        color: 'YELLOW'
      })
      .then(function(res) {
        throw new Error('Invalid content type!');
      })
      .catch(function(err) {
        expect(err).to.have.status(400);
      });

  });*/


});


function req(x)
{
  var options = {
     method: 'PATCH',
     headers: { 'cache-control': 'no-cache', 'authorization': `Basic ${encodedPat}`,'Content-Type': 'application/json-patch+json'},
     url: "https://testshaad.visualstudio.com/defaultcollection/nodetest/_apis/wit/workitems/$Bug?api-version=1.0",
     body:  [{
      "op": "add",
      "path": "/fields/System.Title",
      "value": x,
    }],
    json:true
  };

  request(options, function (error, response, body) {
    if (error) throw new Error(error);

    console.log(body._links.html.href);
  });
}
function encodePat(pat) {
   var b = new Buffer(':' + pat);
   var s = b.toString('base64');

   return s;
}

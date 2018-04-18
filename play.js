/*72cwherppis2lgz5gjcrahj6bunq5g5fhfdslkawzy6ie2lk24wa*/


var request = require("request");
var encodedPat = encodePat('ptespah6ggnrwlsofomzxjlq4v6yzv6uubu6qmt4zuaolrwzx4na');
//ptespah6ggnrwlsofomzxjlq4v6yzv6uubu6qmt4zuaolrwzx4na

//mine:72cwherppis2lgz5gjcrahj6bunq5g5fhfdslkawzy6ie2lk24wa
/*var options = {
   method: 'GET',
   headers: { 'cache-control': 'no-cache', 'authorization': `Basic ${encodedPat}` },
   url: 'https://testshaad.visualstudio.com/defaultcollection/_apis/projects/nodetest',
   qs: { 'api-version': '1.0' }
};

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});*/
var options = {
   method: 'GET',
   headers: { 'cache-control': 'no-cache', 'authorization': `Basic ${encodedPat}`,'Content-Type': 'application/json-patch+json'},
   url: "https://ablcode.visualstudio.com/QualityAssurance/_apis/wit/workitems/139092?api-version=1.0",
  /* body:  [{
    "op": "add",
    "path": "/fields/System.Title",
    "value": "JavaScript implementation for Microsoft Account",
  }],*/
  json:true
};

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body.fields.["Microsoft.VSTS.TCM.Steps"]);
});

function encodePat(pat) {
   var b = new Buffer(':' + pat);
   var s = b.toString('base64');

   return s;
}

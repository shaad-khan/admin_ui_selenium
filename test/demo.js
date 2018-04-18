'use strict';
const {Builder, By, Key, until} = require('selenium-webdriver');
var chrome=require('chromedriver');
var sleep = require('sleep-promise');
var fs=require('fs');
const chai = require('chai');
const expect = require('chai').expect;
var _ = require('lodash');
const argv = require('yargs').argv;
var request = require("request");
//var encodedPat = encodePat('72cwherppis2lgz5gjcrahj6bunq5g5fhfdslkawzy6ie2lk24wa');
var decode = require('unescape');
var _ = require('lodash');

var striptags = require('striptags');
chai.use(require('chai-http'));
var to_json = require('xmljson').to_json;
//const app="https://admin.aspqa01us.acuitynext.io";
//const app = require('../index.js'); // Our app
var rcode;
var driver;
var encodedPat = encodePat(argv.secret);
//console.log(argv);
//console.log(argv.email);

describe('Admin Ui Testing', function() {
  this.timeout(600000); // How long to wait for a response (ms)

  before(async function example() {
  driver = await new Builder().forBrowser('chrome').build();
  await driver.get('https://admin.qa.atrius-iot.com/');
  await sleep(3000);
  await driver.findElement(By.name('loginfmt')).sendKeys(argv.email);
  await sleep(1000);
  await driver.findElement(By.xpath('//*[@id="idSIButton9"]')).click();
  await sleep(2000);
  await driver.findElement(By.xpath('//*[@id="i0118"]')).sendKeys("April@2018");
  await sleep(2000);
  await driver.findElement(By.xpath('//*[@id="idSIButton9"]')).click();
  await sleep(3000);
  await driver.findElement(By.xpath('//*[@id="idSIButton9"]')).click();
  await sleep(7000);

});


  after(function() {
driver.close();
  });

  it('Test For List elements for partner', async function(done) {

    await sleep(3000);
    if(argv.email=="testqa2@atgqa.onmicrosoft.com")
    {
    await driver.findElement(By.xpath("/html/body/compose[2]/div/div/form/div[1]/material-select/div/select")).findElement(By.xpath("/html/body/compose[2]/div/div/form/div[1]/material-select/div/select/option[5]")).click();
///html/body/compose[2]/div/div/form/div[1]/material-select/div/select
//html/body/compose[2]/div/div/form/div[1]/material-select/div/select/option[5]
   await sleep(2000);
   await driver.findElement(By.xpath("//*[@id='save']")).click();


 }
 else if(argv.email=="testqa3@atgqa.onmicrosoft.com")
 {
  //html/body/compose[2]/div/div/form/div[1]/material-select/div/select
  //html/body/compose[2]/div/div/form/div[1]/material-select/div/select/option[3]
   await driver.findElement(By.xpath("/html/body/compose[2]/div/div/form/div[1]/material-select/div/select")).findElement(By.xpath("/html/body/compose[2]/div/div/form/div[1]/material-select/div/select/option[3]")).click();
  await sleep(2000);
  await driver.findElement(By.xpath("//*[@id='save']")).click();

  await sleep(2000);
  await driver.findElement(By.xpath("//*[@id='save']")).click();
 }

   await sleep(7000);
  await driver.findElement(By.xpath("/html/body/section/nav-bar/nav/ul/li[3]/div/a")).click();
  await sleep(7000);
  await driver.findElement(By.xpath("/html/body/section/div/router-view/section/div[1]/ul/li[2]/a")).click();
///html/body/section/div/router-view/section/div[2]/router-view/div[1]/ul/li[3]/a


await sleep(4000);

       //console.log("here"+rcode);
        /*expect(res).to.have.status(rcode);
        expect(res).to.be.json;
        expect(res.body).to.be.a('Array');*/
      await  driver.takeScreenshot().then(
    function(image, err) {
        fs.writeFile('out.png', image, 'base64', function(err) {
            console.log(err);
        });
    }
);
        var query =await driver.findElements(By.xpath("/html/body/section/div/router-view/section/div[2]/router-view/div[1]/ul")).then(async (e)=>{
//  expect(e).to.include("partner");

          await  e.map(async function (elem) {
                  //  console.log(elem);


                var arr=await elem.getText().then((x)=>{

                      return x;                      //expect(y).to.contain.members(['partner']);


                    });
                    //var r=arr;
arr=arr.replace(/\n/g, ",");
 //console.log(y.toString());
 //console.log(typeof z);
 var id=await createrun().then((e)=>{
  return e;
 });
 //console.log(id);
 await upload(id);
 try{
   if(argv.type=="Partner")
   {
 expect(arr).to.equal('Site,Group,Organization,Partner');
 await success(id);
 await update(id);
 await update(id);
}
else if(argv.type=="Organization")
{
  expect(arr).to.equal('Site,Group,Organization');
  await success(id);
  await update(id);
  await update(id);
}
 done();
 driver.close();
}
catch(e)
{
  await failed(id,e.message);
  await update(id);
  await update(id);
done(e);
driver.close();
  //console.log(e);
}


          });


        });


});




});
async function createrun()
{
  //console.log("here");

var d = new Date();

    return await new Promise(function(resolve,reject){
      var options = {
         method: 'POST',
         headers: { 'cache-control': 'no-cache', 'authorization': `Basic ${encodedPat}`,'Content-Type': 'application/json'},
        // url: "https://testshaad.visualstudio.com/defaultcollection/nodetest/_apis/wit/workitems/$Bug?api-version=1.0",
      url: `${argv.vsts}/_apis/test/runs?api-version=5.0-preview.2`,
         body: {
           "name":"NEWTEST"+Date.now(),
      "state":"InProgress",
      "plan": {
      "id": argv.planid
      },
      "startedDate":d,
      "isAutomated": false,
      "comment": "Automating Admin UI Demo"
      },
        json:true
      };



  request(options, function (error, response, body) {

    if(error)
    {
      console.log(error);
      reject(error);
    }
    else{
      //console.log(response);
      resolve(body.id);
    }
  })

    })

}

async function success(id)
{
  //var encodedPat = encodePat('72cwherppis2lgz5gjcrahj6bunq5g5fhfdslkawzy6ie2lk24wa');

var d = new Date();
//console.log("here");
    return await new Promise(function(resolve,reject){
  //    console.log("inside success");
      var options = {
         method: 'POST',
         headers: { 'cache-control': 'no-cache', 'authorization': `Basic ${encodedPat}`,'Content-Type': 'application/json'},
        // url: "https://testshaad.visualstudio.com/defaultcollection/nodetest/_apis/wit/workitems/$Bug?api-version=1.0",
      url: `${argv.vsts}/_apis/test/runs/${id}/results?api-version=3.0-preview`,
         body: [{

      "testCase": {
      "id": argv.testid
      },"testPoint": {
      "id":argv.pointid
      },

      "priority": 2,
      "outcome": "Passed",
      "errorMessage": `Passed the test for user:${argv.email}`
      }],
        json:true
      };

  request(options, function (error, response, body) {
//console.log("inside request");
    if(error)
    {
      console.log(error);
      reject(error);
    }
    else{
  //    console.log(response);
      resolve("done");
    }
  })

    })


}
async function failed(id,e)
{
  //var encodedPat = encodePat('72cwherppis2lgz5gjcrahj6bunq5g5fhfdslkawzy6ie2lk24wa');

var d = new Date();
//console.log("here");
    return await new Promise(function(resolve,reject){
      console.log("inside success");
      var options = {
         method: 'POST',
         headers: { 'cache-control': 'no-cache', 'authorization': `Basic ${encodedPat}`,'Content-Type': 'application/json'},
        // url: "https://testshaad.visualstudio.com/defaultcollection/nodetest/_apis/wit/workitems/$Bug?api-version=1.0",
      url: `${argv.vsts}/_apis/test/runs/${id}/results?api-version=3.0-preview`,
         body: [{

      "testCase": {
      "id": argv.testid
      },"testPoint": {
      "id": argv.pointid
      },

      "priority": 2,
      "outcome": "Failed",
      "errorMessage": `${e} failed for ${argv.email}`
      }],
        json:true
      };

  request(options, function (error, response, body) {
//console.log("inside request");
    if(error)
    {
      console.log(error);
      reject(error);
    }
    else{
//      console.log(response);
      resolve("done");
    }
  })

    })


}
async  function update(id)
{
  //var encodedPat = encodePat('72cwherppis2lgz5gjcrahj6bunq5g5fhfdslkawzy6ie2lk24wa');
//var d = new Date();
//var d = new Date();

    return await new Promise(function(resolve,reject){
      var options = {
         method: 'PATCH',
         headers: { 'cache-control': 'no-cache', 'authorization': `Basic ${encodedPat}`,'Content-Type': 'application/json'},
        // url: "https://testshaad.visualstudio.com/defaultcollection/nodetest/_apis/wit/workitems/$Bug?api-version=1.0",
    url: `${argv.vsts}/_apis/test/runs/${id}?api-version=3.0-preview`,
         body: {"state":"Completed"},
        json:true
      };
  request(options, function (error, response, body) {

    if(error)
    {
      console.log(error);
      reject(error);
    }
    else{
    //  console.log(response);
      resolve("done");
    }
  })

    })


}
async  function upload(id)
{
  //var encodedPat = encodePat('72cwherppis2lgz5gjcrahj6bunq5g5fhfdslkawzy6ie2lk24wa');
//var d = new Date();
//var d = new Date();

    return await new Promise(function(resolve,reject){
      var x = base64_encode('out.png');
      var options = {
         method: 'POST',
         headers: { 'cache-control': 'no-cache', 'authorization': `Basic ${encodedPat}`,'Content-Type': 'application/json'},
        // url: "https://testshaad.visualstudio.com/defaultcollection/nodetest/_apis/wit/workitems/$Bug?api-version=1.0",
      url: `${argv.vsts}/_apis/test/runs/${id}/attachments?api-version=5.0-preview.1`,
         body: {
      "stream": x,
      "fileName": "out.png",
      "comment": "Test attachment upload",
      "attachmentType": "GeneralAttachment"
      },
        json:true
      };

  request(options, function (error, response, body) {

    if(error)
    {
      console.log(error);
      reject(error);
    }
    else{
//     console.log(response);
      resolve("done");
    }
  })

    })


}
function req(x)
{
var encodedPat = encodePat('ptespah6ggnrwlsofomzxjlq4v6yzv6uubu6qmt4zuaolrwzx4na');

  var options = {
     method: 'PATCH',
     headers: { 'cache-control': 'no-cache', 'authorization': `Basic ${encodedPat}`,'Content-Type': 'application/json-patch+json'},
    // url: "https://testshaad.visualstudio.com/defaultcollection/nodetest/_apis/wit/workitems/$Bug?api-version=1.0",
url: "https://ablcode.visualstudio.com/QualityAssurance/_apis/wit/workitems/$Bug?api-version=1.0",
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

function base64_encode(file) {
    // read binary data
    var bitmap = fs.readFileSync(file);
    // convert binary data to base64 encoded string
    return new Buffer(bitmap).toString('base64');
}

function getResponsecode()
{
  var encodedPat = encodePat('ptespah6ggnrwlsofomzxjlq4v6yzv6uubu6qmt4zuaolrwzx4na');
  var res="";
  var options = {
     method: 'GET',
     headers: { 'cache-control': 'no-cache', 'authorization': `Basic ${encodedPat}`,'Content-Type': 'application/json-patch+json'},
   //url:"https://testshaad.visualstudio.com/nodetest/_apis/wit/workitems/19?fields=Microsoft.VSTS.TCM.Steps&api-version=4.1-preview",
    url:"https://ablcode.visualstudio.com/QualityAssurance/_apis/wit/workitems/139092?fields=Microsoft.VSTS.TCM.Steps&api-version=4.1-preview",
     //url: "https://ablcode.visualstudio.com/QualityAssurance/_apis/wit/workitems/139092?api-version=1.0",
    /* body:  [{
      "op": "add",
      "path": "/fields/System.Title",
      "value": "JavaScript implementation for Microsoft Account",
    }],*/
    json:true
  };
 return new Promise(function(resolve, reject) {
  request(options, function (error, response, body) {
    if (error) throw new Error(error);
    var x=_.pick(body.fields,['Microsoft.VSTS.TCM.Steps']);
    x=x['Microsoft.VSTS.TCM.Steps'];
    x=decode(x);

    x=x.replace("<DIV>;",'');
    x=x.replace("</DIV>;",'');
    x=x.replace("<p>;",'');
    x=x.replace("</p>;",'');
    x=x.replace("&nbsp;",'');
    x=x.replace("<DIV><p>","");
    x=x.replace("</p></DIV>","");

  //  var y='<steps id="0" last="2"><step id="2" type="ActionStep"><parameterizedString isformatted="true">response:200</parameterizedString><parameterizedString isformatted="true"></parameterizedString><description/></step></steps>';
    resolve(x);
})
}).then((res)=>{
  return new Promise(function(resolve, reject) {
    to_json(res, function (error, data) {
    var  r=data.steps.step.parameterizedString[0].P;
    if(r==null)
  {
    r=data.steps.step.parameterizedString[0].DIV.P;
  }
      resolve(r);
    })
})
}).then((data)=>{
  return data;
})
}

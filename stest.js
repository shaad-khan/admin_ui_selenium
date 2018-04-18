

var fs=require('fs');
//var x=fs.createReadStream('out.png');
function base64_encode(file) {
    // read binary data
    var bitmap = fs.readFileSync(file);
    // convert binary data to base64 encoded string
    return new Buffer(bitmap).toString('base64');
}
var x = base64_encode('out.png');
console.log(x);

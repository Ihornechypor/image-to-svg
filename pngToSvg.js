const potrace = require('potrace');
const glob = require("glob");
const path = require('path');
const fs = require('fs-extra')

const toSVG = (item) => {
  potrace.trace(item, function(err, svg) {
    if (err) throw err;
    fs.outputFile(`./dist/${path.parse(item).name}.svg`, svg);
  });
}


glob("./src/*.{png,jpg}", {}, function (er, files) {
  files.forEach(item => {
    toSVG(item);
  })
})




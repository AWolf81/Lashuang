// run-less.js
var less = require('less'),
	args = process.argv.splice(2, process.argv.length),
	options = {};
	
// not working yet!!
/*
less.render(args, options)
    .then(function(output) {
        // output.css = string of css
        // output.map = string of sourcemap
        // output.imports = array of string filenames of the imports referenced
        return output.css;
    },
    function(error) {
    });*/
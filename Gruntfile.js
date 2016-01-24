var cml_converter = require('cml-html-converter');
module.exports = function(grunt) {
	grunt.initConfig({
		cml: {
			test: {
				src: 'test.txt',
				dest: 'result.html'
			}
		}
	});

	grunt.registerMultiTask('cml', function() {
		console.log(this);
	});
};

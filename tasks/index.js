module.exports = function(grunt) {

	grunt.registerMultiTask('cml', 'Grunt task for converting CML to HTML', function() {
		var cml_html_converter = require('cml-html-converter');

		// Merge task-specific and/or target-specific options with these defaults.
		var options = this.options({
			punctuation: '',
			separator: ''
		});

		// Iterate over all specified file groups.
		this.files.forEach(function(f) {
			// Concat specified files.
			var src = f.src.filter(function(filepath) {
				// Warn on and remove invalid source files (if nonull was set).
				if (!grunt.file.exists(filepath)) {
					grunt.log.warn('Source file "' + filepath + '" not found.');
					return false;
				} else {
					return true;
				}
			}).map(function(filepath) {
				// Read file source.
				return cml_html_converter(grunt.file.read(filepath));
			}).join(grunt.util.normalizelf(options.separator));

			// Handle options.
			src += options.punctuation;

			// Write the destination file.
			grunt.file.write(f.dest, src);

			// Print a success message.
			grunt.log.writeln('File "' + f.dest + '" created.');
		});

	});

};

# Grunt Task For Converting CML to HTML 

## Installation

`npm install grunt-contrib-cml-html-converter`

## What Does It Do?

This converts [cml](http://contextual-markup-language.org/) to HTML using [this npm package](https://www.npmjs.com/package/cml-html-converter)

## Example Gruntfiles

most basic:

```javascript
module.exports = function(grunt) {
	grunt.initConfig({
		cml: {
			onefile: {
				src: 'test.txt',
				dest: 'result.html'
			}
		}
	});
	grunt.loadNpmTasks('grunt-contrib-cml-html-converter');
};
```

using grunt-contrib-watch:

```javascript
module.exports = function(grunt) {
	grunt.initConfig({
		cml: {
			onefile: {
				src: 'test.txt',
				dest: 'result.html'
			}
		},
		watch: {
			options: {
				livereload: {
					port: 35729
				}
			},
			all: {
				files: ['test.txt'],
				tasks: ['cml']
			}
		}
	  });
	  grunt.loadNpmTasks('grunt-contrib-cml-html-converter');
	  grunt.loadNpmTasks('grunt-contrib-watch');
};
```

module.exports = function(grunt) {
	grunt.initConfig({
		cml: {
			test: {
				src: 'test.txt',
				dest: 'result.html'
			}
		}
	});
	grunt.loadTasks('tasks');
};

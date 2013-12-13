/*
 * @author Vojta Jina <vojta.jina@gmail.com>
 */
var traceur = require('traceur');

module.exports = function(grunt) {

  var DESC = 'Compile ES6 JavaScript with Traceur.';
  grunt.registerMultiTask('traceur', DESC, function() {
    var options = this.options({
      modules: 'requirejs'
    });

    this.files.forEach(function(file) {
      var outputDirectory = file.dest;
      var files = file.src.filter(function() {
        return true;
      });

      files.forEach(function(filePath) {
        var compiled = traceur.compile(grunt.file.read(filePath), options);
        var outputFilePath = outputDirectory + filePath;

        if (compiled.errors.length) {
          grunt.fail.warn('Cannot compile ' + filePath + '\n  ' + compiled.errors.join('\n  ') + '\n');
        } else {
          grunt.file.write(outputFilePath, compiled.js);
          grunt.log.ok(filePath + ' -> ' + outputFilePath);
        }
      });
    });
  });
};


module.exports = (grunt) ->
  grunt.initConfig
    traceur:
      test_foo:
        src: ['test/*.js']
        dest: 'compiled/'

    'npm-contributors':
      options:
        commitMessage: 'chore: update contributors'

  grunt.loadTasks 'tasks'
  grunt.loadNpmTasks 'grunt-npm'
  grunt.loadNpmTasks 'grunt-auto-release'

  grunt.registerTask 'test', ['traceur']
  grunt.registerTask 'release', 'Build, bump and publish to NPM.', (type) ->
    grunt.task.run [
      'npm-contributors',
      "bump:#{type||'patch'}",
      'npm-publish'
    ]


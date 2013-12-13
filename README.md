# grunt-tracer

**Compile future JavaScript using [Traceur].

## Installation

Install npm package, next to your project's `Gruntfile.js` file:

    npm install grunt-traceur --save-dev

Add this line to your project's `Gruntfile.js`:

    grunt.loadNpmTasks('grunt-traceur');


## Configuration

```js
traceur: {
  app: {
    src: ['src/**/*.js'],
    dest: 'src-compiled/'
  }
}
```

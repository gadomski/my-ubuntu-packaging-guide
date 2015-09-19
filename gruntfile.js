module.exports = function(grunt) {
  grunt.initConfig({
    "gh-pages": {
      options: {
        base: "_build/html"
      },
      src: ["**"]
    }
  });

  grunt.loadNpmTasks("grunt-gh-pages");
};

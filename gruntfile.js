module.exports = function(grunt) {
  grunt.initConfig({
    "gh-pages": {
      options: {
        base: "_build/html",
        dotfiles: true
      },
      src: ["**"]
    }
  });

  grunt.loadNpmTasks("grunt-gh-pages");
};

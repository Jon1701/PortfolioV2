var $ = require('jquery');
var Mustache = require('mustache');

$(document).ready(function() {

  // Select the template.
  var template = $("#template-aboutme-devicons").html();

  // Template data.
  var data = {

    // List of icon data.
    iconData : [
      {
        name: "HTML5",
        className: "devicons devicons-html5",
        iconName: "devicons-html5",
        description: "A markup language used for structuring and presenting content on the World Wide Web."
      },

      {
        name: "CSS3",
        className: "devicons devicons-css3",
        iconName: "devicons-css3",
        description: "A style sheet language used for describing the presentation of a document written in a markup language."
      },

      {
        name: "JavaScript",
        className: "devicons devicons-javascript_badge",
        iconName: "devicons-javascript_badge",
        description: "A high-level, dynamic, untyped, and interpreted programming language. Alongside HTML and CSS, it is one of the three core technologies of World Wide Web content production."
      },

      {
        name: "jQuery",
        className: "devicons devicons-jquery",
        iconName: "devicons-jquery",
        description: "A JavaScript library which makes HTML DOM traversal/manipulation, event handling, animation, and AJAX much simpler and easy to use."
      },

      {
        name: "JSX",
        className: "devicons devicons-javascript_badge",
        iconName: "devicons-javascript_badge",
        description: "JSX is a preprocessor step that adds XML syntax to JavaScript."
      },

      {
        name: "Bootstrap",
        className: "devicons devicons-bootstrap",
        iconName: "devicons-bootstrap",
        description: "A web framework for designing responsive websites. It contains HTML and CSS-based design templates for typography, forms, buttons, navigation and other interface components."
      },

      {
        name: "Materialize",
        className: "devicons devicons-materializecss",
        iconName: "devicons-materializecss",
        description: "A modern responsive front-end framework based on Material Design"
      },

      {
        name: "React",
        className: "devicons devicons-react",
        iconName: "devicons-react",
        description: "A JavaScript library used to provide a View for data rendered as HTML."
      },

      {
        name: "mustache.js",
        className: "devicons devicons-code",
        iconName: "devicons-code",
        description: "A logic-less HTML templating system."
      },

      // D3
      {
        name: "D3.js",
        className: "devicons devicons-code",
        iconName:"devicons-code",
        iconDescription: "A JavaScript library for manipulating documents based on data."
      },

      {
        name: "Atom",
        className: "devicons devicons-atom",
        iconName: "devicons-atom",
        description: "A free and open-source text and source code editor."
      },

      {
        name: "Git",
        className: "devicons devicons-git",
        iconName: "devicons-git",
        description: "A version control system used for software development."
      },

      {
        name: "GitHub",
        className: "devicons devicons-github_badge",
        iconName: "devicons-github_badge",
        description: "A web-based Git repository hosting service."
      },

      {
        name: "Gulp",
        className: "devicons devicons-gulp",
        iconName: "devicons-gulp",
        description: "A streaming build system used to automate and enhance your development workflow."
      },

      {
        name: "Webpack",
        className: "devicons devicons-codepen",
        iconName: "devicons-codepen",
        description: "A module bundler which takes modules with dependencies and generates static assets representing those modules."
      },

      {
        name: "Sass",
        className: "devicons devicons-sass",
        iconName: "devicons-sass",
        description: "A CSS pre-processor with syntax advancements."
      },

      {
        name: "Node.js",
        className: "devicons devicons-nodejs",
        iconName:"devicons-nodejs",
        iconDescription: "Node.js is an open-source, cross-platform runtime environment for developing server-side Web applications."
      },

      {
        name: "Express.js",
        className: "devicons devicons-code",
        iconName:"devicons-code",
        iconDescription: "Express.js is a Node.js web application framework for creating web and network applications."
      },

      {
        name: "Debian",
        className: "devicons devicons-debian",
        iconName: "devicons-debian",
        description: "A UNIX-like operating system composed of free software."
      },

      {
        name: "Ubuntu",
        className: "devicons devicons-ubuntu",
        iconName: "devicons-ubuntu",
        description: "A Debian-based Linux operating system."
      },

      {
        name: "Bash",
        className: "devicons devicons-terminal",
        iconName: "devicons-terminal",
        description: "A command interpreter for the GNU operating system."
      },

      {
        name: "MongoDB",
        className: "devicons devicons-mongodb",
        iconName: "devicons-mongodb",
        description: "A free and open-source document-oriented database."
      },

      {
        name: "Python",
        className: "devicons devicons-python",
        iconName: "devicons-python",
        description: "A general-purpose, interpreted programming language."
      },

      {
        name: "Flask",
        className: "devicons devicons-code",
        iconName: "devicons-code",
        description: "Flask is a micro web framework written in Python and based on the Werkzeug toolkit and Jinja2 template engine."
      },

    ]

  };

  // Parse template.
  Mustache.parse(template);

  // Render template.
  var rendered = Mustache.render(template, data);

  // Attach template.
  $("#template-target-aboutme-devicons").html(rendered);

});

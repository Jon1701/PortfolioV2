$(document).ready(function() {

  // Select the template.
  var template = $("#template-aboutme-devicons").html();

  // Template data.
  var data = {

    // List of icon data.
    iconData : [
      {
        className: "devicons devicons-html5",
        iconName: "devicons-html5",
        name: "HTML5",
        description: "A markup language used for structuring and presenting content on the World Wide Web"
      },

      {
        className: "devicons devicons-css3",
        iconName: "devicons-css3",
        name: "CSS3",
        description: "A style sheet language used for describing the presentation of a document written in a markup language"
      },

      {
        className: "devicons devicons-javascript_badge",
        iconName: "devicons-javascript_badge",
        name: "JavaScript",
        description: "A high-level, dynamic, untyped, and interpreted programming language. Alongside HTML and CSS, it is one of the three core technologies of World Wide Web content production"
      },

      {
        className: "devicons devicons-jquery",
        iconName: "devicons-jquery",
        name: "jQuery",
        description: "A JavaScript library which makes HTML DOM traversal/manipulation, event handling, animation, and AJAX much simpler and easy to use."
      },

      {
        className: "devicons devicons-bootstrap",
        iconName: "devicons-bootstrap",
        name: "Bootstrap",
        description: "A web framework for designing responsive websites. It contains HTML and CSS-based design templates for typography, forms, buttons, navigation and other interface components."
      },

      {
        className: "devicons devicons-react",
        iconName: "devicons-react",
        name: "React",
        description: "A JavaScript library used to provide a View for data rendered as HTML."
      },

      {
        className: "devicons devicons-code",
        iconName: "devicons-code",
        name: "mustache.js",
        description: "A logic-less HTML templating system."
      },


      {
        className: "devicons devicons-atom",
        iconName: "devicons-atom",
        name: "Atom",
        description: "A free and open-source text and source code editor."
      },

      {
        className: "devicons devicons-git",
        iconName: "devicons-git",
        name: "Git",
        description: "A version control system used for software development."
      },

      {
        className: "devicons devicons-github_badge",
        iconName: "devicons-github_badge",
        name: "GitHub",
        description: "A web-based Git repository hosting service."
      },

      {
        className: "devicons devicons-gulp",
        iconName: "devicons-gulp",
        name: "Gulp",
        description: "A streaming build system used to automate and enhance your development workflow."
      },

      {
        className: "devicons devicons-sass",
        iconName: "devicons-sass",
        name: "Sass",
        description: "A CSS pre-processor with syntax advancements."
      },

      {
        className: "devicons devicons-debian",
        iconName: "devicons-debian",
        name: "Debian",
        description: "A UNIX-like operating system composed of free software."
      },

      {
        className: "devicons devicons-ubuntu",
        iconName: "devicons-ubuntu",
        name: "Ubuntu",
        description: "A Debian-based Linux operating system."
      },

      {
        className: "devicons devicons-terminal",
        iconName: "devicons-terminal",
        name: "Bash",
        description: "A command interpreter for the GNU operating system."
      },

      {
        className: "devicons devicons-mongodb",
        iconName: "devicons-mongodb",
        name: "MongoDB",
        description: "A free and open-source document-oriented database."
      },

      {
        className: "devicons devicons-python",
        iconName: "devicons-python",
        name: "Python",
        description: "A general-purpose, interpreted programming language."
      }
    ]

  };

  // Parse template.
  Mustache.parse(template);

  // Render template.
  var rendered = Mustache.render(template, data);

  // Attach template.
  $("#template-target-aboutme-devicons").html(rendered);

});

$(document).ready(function() {

  // Select the template.
  var template = $("#template-aboutme-devicons").html();

  // Template data.
  var data = {

    // List of icon data.
    iconData : [
      {
        className: "devicons devicons-jquery",
        name: "jQuery"
      },

      {
        className: "devicons devicons-bootstrap",
        name: "Bootstrap"
      },

      {
        className: "devicons devicons-react",
        name: "React"
      },

      {
        className: "devicons devicons-atom",
        name: "Atom"
      },

      {
        className: "devicons devicons-github_full",
        name: "GitHub"
      },

      {
        className: "devicons devicons-gulp",
        name: "Gulp"
      },

      {
        className: "devicons devicons-sass",
        name: "Sass"
      },

      {
        className: "devicons devicons-debian",
        name: "Debian"
      },

      {
        className: "devicons devicons-mongodb",
        name: "MongoDB"
      },

      {
        className: "devicons devicons-python",
        name: "Python"
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

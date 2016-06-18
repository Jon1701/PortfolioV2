$(document).ready(function() {

  // Template script.
  var template = $("#template-portfolio-project").html();

  // Portfolio Project Data.
  var data = {
    projects: [

      {
        image: "images/placeholders/placeholder-portfolio-image.png",
        description: "Description",
        link: {
          github: "http://www.github.com",
          demo: "http://www.jonbalon.io"
        }
      },

      {
        image: "images/placeholders/placeholder-portfolio-image.png",
        description: "Description",
        link: {
          github: "http://www.github.com",
          demo: "http://www.jonbalon.io"
        }
      },

      {
        image: "images/placeholders/placeholder-portfolio-image.png",
        description: "Description",
        link: {
          github: "http://www.github.com",
          demo: "http://www.jonbalon.io"
        }
      }
    ]
  } // End data

  // Parse template.
  Mustache.parse(template);

  // Render template.
  var rendered = Mustache.render(template, data);

  // Fill in HTML.
  $("#portfolio-target").html(rendered);

});

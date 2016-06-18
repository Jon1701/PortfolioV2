$(document).ready(function() {

  // Template.
  var template = $("#template-portfolio-project").html();

  // Data.
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

  Mustache.parse(template);

  var rendered = Mustache.render(template, data);

  $("#target").html(rendered);

});

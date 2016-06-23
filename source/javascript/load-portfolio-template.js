$(document).ready(function() {

  // Template script.
  var template = $("#template-portfolio-project").html();

  // Portfolio Project Data.
  var data = {
    projects: [

      {
        image: "../images/portfolio/cover-quote-generator.png",
        description: "Life is Strange Quote Generator",
        link: {
          github: "https://github.com/Jon1701/LifeIsStrangeQuoteGenerator",
          demo: "../portfolio/LifeIsStrangeQuoteGenerator"
        }
      },

      {
        image: "../images/portfolio/cover-twitch-viewer.png",
        description: "TwitchViewer",
        link: {
          github: "https://github.com/Jon1701/TwitchViewer",
          demo: "../portfolio/TwitchViewer"
        }
      },

      {
        image: "images/placeholders/portfolio-image.png",
        description: "Sit sunt duis pariatur velit esse amet qui sint enim eiusmod incididunt fugiat ex.",
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

$(document).ready(function() {

  // Select the template.
  var template = $("#template-portfolio-project").html();

  // Portfolio Project Data.
  var data = {

    // List of prof=jects.
    projects: [

      {
        image: "../images/portfolio/cover-quote-generator.png",
        title: "Life is Strange Quote Generator",
        description: "Relive the horror here with quotes from the game",
        popover: {
          id: "popover-1"
        },
        components: ["jQuery"],
        link: {
          github: "https://github.com/Jon1701/LifeIsStrangeQuoteGenerator",
          demo: "../portfolio/LifeIsStrangeQuoteGenerator"
        }
      },

      {
        image: "../images/portfolio/cover-twitch-viewer.png",
        title: "TwitchViewer",
        description: "See your favourite streamers",
        popover: {
          id: "popover-2"
        },
        components: ["React.js", "jQuery"],
        link: {
          github: "https://github.com/Jon1701/TwitchViewer",
          demo: "../portfolio/TwitchViewer"
        }
      },

      {
        image: "../images/portfolio/cover-simongame.png",
        title: "Simon Game",
        description: "Simon Game",
        popover: {
          id: "popover-3"
        },
        components: ["jQuery"],
        link: {
          github: "https://github.com/Jon1701/SimonGame",
          demo: "../portfolio/SimonGame"
        }
      }
    ]// End list.
  } // End data

  // Parse template.
  Mustache.parse(template);

  // Render template.
  var rendered = Mustache.render(template, data);

  // Attach template.
  $("#portfolio-target").html(rendered);

});

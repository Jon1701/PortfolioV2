$(document).ready(function() {

  // Component: jQuery
  var cmptJquery = {
    name: "jQuery",
    img: "../images/logos/jQuery/jQuery-Logo.png"
  };

  // Component: React
  var cmptReact = {
    name: "React",
    img: "../images/logos/React/react-logo.png"
  };

  // Component: Sass
  var cmptSass = {
    name: "Sass",
    img: "../images/logos/Sass/color-1c4aab2b.png"
  }


  // Select the template.
  var template = $("#template-portfolio-project").html();

  // Portfolio Project Data.
  var data = {

    // List of prof=jects.
    projects: [

      {
        image: "../images/portfolio/cover-quote-generator.png",
        title: "Life is Strange Quote Generator",
        description: "Relive the horror here with quotes from the game.",
        popover: {
          id: "popover-1"
        },
        components: [cmptJquery],
        link: {
          github: "https://github.com/Jon1701/LifeIsStrangeQuoteGenerator",
          demo: "../portfolio/LifeIsStrangeQuoteGenerator"
        }
      },

      {
        image: "../images/portfolio/cover-twitch-viewer.png",
        title: "TwitchViewer",
        description: "See which of your favourite streamers are online and what they are playing.",
        popover: {
          id: "popover-2"
        },
        components: [cmptJquery, cmptReact, cmptSass],
        link: {
          github: "https://github.com/Jon1701/TwitchViewer",
          demo: "../portfolio/TwitchViewer"
        }
      },

      {
        image: "../images/portfolio/cover-simongame.png",
        title: "Simon Game",
        description: "A classic, rebuilt for modern times, and in HD",
        popover: {
          id: "popover-3"
        },
        components: [cmptJquery, cmptSass],
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

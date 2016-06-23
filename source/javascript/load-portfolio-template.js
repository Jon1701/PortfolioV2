$(document).ready(function() {

  // Template script.
  var template = $("#template-portfolio-project").html();

  // Portfolio Project Data.
  var data = {
    projects: [

      {
        image: "../images/portfolio/cover-quote-generator.png",
        description: "Life is Strange Quote Generator",
        popoverDescription: "Built with: <ul><li>jQuery</li></ul>",
        link: {
          github: "https://github.com/Jon1701/LifeIsStrangeQuoteGenerator",
          demo: "../portfolio/LifeIsStrangeQuoteGenerator"
        }
      },

      {
        image: "../images/portfolio/cover-twitch-viewer.png",
        description: "TwitchViewer",
        popoverDescription: "Built with: <ul><li>React.js</li></ul>",
        link: {
          github: "https://github.com/Jon1701/TwitchViewer",
          demo: "../portfolio/TwitchViewer"
        }
      },

      {
        image: "../images/portfolio/cover-simongame.png",
        description: "Simon Game",
        popoverDescription: "Built with: <ul><li>jQuery</li></ul>",
        link: {
          github: "https://github.com/Jon1701/SimonGame",
          demo: "../portfolio/SimonGame"
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

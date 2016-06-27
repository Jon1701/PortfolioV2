$(document).ready(function() {

  // Components
  var component = {

    // CSS3
    css3 : {
      name: "CSS3",
      className: "devicons devicons-css3"
    },

    // Bootstrap
    bootstrap : {
      name: "Bootstrap",
      className: "devicons devicons-bootstrap"
    },

    // HTML5
    html5 : {
      name: "HTML5",
      className: "devicons devicons-html5"
    },

    // jQuery
    jquery: {
      name: "jQuery",
      className: "devicons devicons-jquery"
    },

    // JavaScript
    javascript: {
      name: "JavaScript",
      className: "devicons devicons-javascript_badge"
    },

    // Mustache.js
    mustache: {
      name: "mustache.js",
      className: "devicons devicons-codepen visibility-hidden"

    },

    // React
    react: {
      name: "React",
      className: "devicons devicons-react"
    },

    // Sass
    sass: {
      name: "Sass",
      className: "devicons devicons-sass"
    }

  }

  // Select the template.
  var template = $("#template-portfolio-project").html();

  // Portfolio Project Data.
  var data = {

    // List of projects.
    projects: [

      {
        image: "../images/portfolio/cover-quote-generator.png",
        title: "Life is Strange Quote Generator",
        description: "Relive the horror here with quotes from the game",
        popover: {
          id: "popover-1"
        },
        components: [component.html5, component.css3, component.javascript, component.jquery],
        link: {
          github: "https://github.com/Jon1701/LifeIsStrangeQuoteGenerator",
          demo: "../portfolio/LifeIsStrangeQuoteGenerator"
        }
      },

      {
        image: "../images/portfolio/cover-pumpkindoro-timer.png",
        title: "Pumpkindoro Timer",
        description: "A variation of the world famous Pomodoro Timer, now made with real pumpkins.",
        popover: {
          id: "popover-5"
        },
        components: [component.html5, component.css3, component.javascript, component.jquery],
        link: {
          github: "https://github.com/Jon1701/PumpkindoroTimer",
          demo: "../portfolio/PumpkindoroTimer"
        }
      },

      {
        image: "../images/portfolio/cover-simongame.png",
        title: "Simon Game",
        description: "A classic, rebuilt for modern times, and in 4K. (Batteries not included)",
        popover: {
          id: "popover-3"
        },
        components: [component.html5, component.css3, component.javascript, component.jquery],
        link: {
          github: "https://github.com/Jon1701/SimonGame",
          demo: "../portfolio/SimonGame"
        }
      },

      {
        image: "../images/portfolio/cover-twitch-viewer.png",
        title: "TwitchViewer",
        description: "See what some of my favourite Twitch streamers are playing",
        popover: {
          id: "popover-2"
        },
        components: [component.html5, component.css3, component.javascript, component.jquery, component.react],
        link: {
          github: "https://github.com/Jon1701/TwitchViewer",
          demo: "../portfolio/TwitchViewer"
        }
      },

      {
        image: "../images/portfolio/cover-wikiviewer.png",
        title: "Wiki Viewer",
        description: "Search for Wikipedia using Wikipedia",
        popover: {
          id: "popover-4"
        },
        components: [component.html5, component.css3, component.javascript, component.jquery, component.mustache],
        link: {
          github: "https://github.com/Jon1701/WikiViewer",
          demo: "../portfolio/WikiViewer"
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

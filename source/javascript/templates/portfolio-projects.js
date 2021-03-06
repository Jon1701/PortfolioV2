var $ = require('jquery');
var Mustache = require('mustache');

$(document).ready(function() {

  // Components
  var component = {

    // CSS3
    css3 : {
      name: "CSS3",
      className: "devicons devicons-css3",
      iconName:"devicons-css3"
    },

    // Bootstrap
    bootstrap : {
      name: "Bootstrap",
      className: "devicons devicons-bootstrap",
      iconName:"devicons-bootstrap"
    },

    // HTML5
    html5 : {
      name: "HTML5",
      className: "devicons devicons-html5",
      iconName:"devicons-html5"
    },

    // jQuery
    jquery: {
      name: "jQuery",
      className: "devicons devicons-jquery",
      iconName:"devicons-jquery",
      iconDescription: "A JavaScript library used to provide a View for data rendered as HTML."
    },

    // JavaScript
    javascript: {
      name: "JavaScript",
      className: "devicons devicons-javascript_badge",
      iconName:"devicons-javascript_badge"
    },

    // Mustache.js
    mustache: {
      name: "mustache.js",
      className: "devicons devicons-code",
      iconName:"devicons-code",
      iconDescription: "A logic-less HTML templating system."
    },

    // React
    react: {
      name: "React",
      className: "devicons devicons-react",
      iconName:"devicons-react",
      iconDescription: "A JavaScript library used to provide a View for data rendered as HTML."
    },

    // Sass
    sass: {
      name: "Sass",
      className: "devicons devicons-sass",
      iconName:"devicons-sass",
      iconDescription: "A CSS pre-processor with syntax advancements."
    },

    // Materialize
    materialize: {
      name: "Materialize",
      className: "devicons devicons-materializecss",
      iconName: "devicons-materializecss",
      iconDescription: "A modern responsive front-end framework based on Material Design"
    },

    // D3
    d3: {
      name: "D3.js",
      className: "devicons devicons-code",
      iconName:"devicons-code",
      iconDescription: "A JavaScript library for manipulating documents based on data."
    },

    // Node
    nodejs: {
      name: "Node.js",
      className: "devicons devicons devicons-nodejs",
      iconName: "devicons-nodejs",
      iconDescription: "Node.js is an open-source, cross-platform runtime environment for developing server-side Web applications."
    },

    // Express
    expressjs: {
      name: "Express.js",
      className: "devicons devicons-code",
      iconName: "devicons-code",
      iconDescription: "Express.js is a Node.js web application framework for creating web and network applications."
    },


  }

  // Select the template.
  var template = $("#template-portfolio-project").html();

  // Portfolio Project Data.
  var data = {

    // List of projects.
    projects: [


      {
        image: "../images/portfolio/cover-timestamp-generator.png",
        title: "Timestamp Generator Microservice",
        description: "Simple Node.js/Express.js application to convert between Natural Dates and Unix Epoch Dates",
        popout: {
          id: "portfolio-project-13"
        },
        components: [component.html5, component.css3, component.react, component.nodejs, component.expressjs],
        link: {
          github: "https://github.com/Jon1701/MS-Timestamp",
          demo: "https://ms-timestamp-jon1701.c9users.io"
        }
      },


      {
        image: "../images/portfolio/cover-requestheaderparser.png",
        title: "Request Header Parser Microservice",
        description: "Simple Node.js/Express.js application to parse web browser HTTP request headers",
        popout: {
          id: "portfolio-project-12"
        },
        components: [component.html5, component.css3, component.react, component.nodejs, component.expressjs],
        link: {
          github: "https://github.com/Jon1701/MS-RequestHeaderParser",
          demo: "https://ms-request-header-parser-jon1701.c9users.io"
        }
      },


      {
        image: "../images/portfolio/cover-recipebox.png",
        title: "Recipe Box",
        description: "Simple web application built using React.js and Materialize to store recipes using a web browser's local storage",
        popout: {
          id: "portfolio-project-1"
        },
        components: [component.html5, component.css3, component.javascript, component.react, component.materialize],
        link: {
          github: "https://github.com/Jon1701/RecipeBox",
          demo: "../portfolio/RecipeBox"
        }
      },


      {
        image: "../images/portfolio/cover-dungeoncrawler.png",
        title: "Dungeon Crawler",
        description: "A simple dungeon crawler game",
        popout: {
          id: "portfolio-project-11"
        },
        components: [component.html5, component.css3, component.javascript, component.react],
        link: {
          github: "https://github.com/Jon1701/DungeonCrawler",
          demo: "../portfolio/DungeonCrawler"
        }
      },


      {
        image: "../images/portfolio/cover-gameoflife.png",
        title: "The Game of Life",
        description: "A simulation of Conway's Game of Life, built with React.js",
        popout: {
          id: "portfolio-project-10"
        },
        components: [component.html5, component.css3, component.javascript, component.react],
        link: {
          github: "https://github.com/Jon1701/GameOfLife",
          demo: "../portfolio/GameOfLife"
        }
      },


      {
        image: "../images/portfolio/cover-d3-projects.png",
        title: "FreeCodeCamp D3 Charts",
        description: "A collection of charts made in D3",
        popout: {
          id: "portfolio-project-9"
        },
        components: [component.html5, component.css3, component.javascript, component.d3],
        link: {
          github: "https://github.com/Jon1701/FCC-D3-Projects",
          demo: "../portfolio/D3Projects"
        }
      },


      {
        image: "../images/portfolio/cover-twitch-viewer.png",
        title: "TwitchViewer",
        description: "See what some of my favourite Twitch streamers are playing",
        popout: {
          id: "portfolio-project-4"
        },
        components: [component.html5, component.css3, component.javascript, component.jquery, component.react],
        link: {
          github: "https://github.com/Jon1701/TwitchViewer",
          demo: "../portfolio/TwitchViewer"
        }
      },


      {
        image: "../images/portfolio/cover-markdown-previewer.png",
        title: "Markdown Previewer",
        description: "Converts markdown into HTML markup",
        popout: {
          id: "portfolio-project-8"
        },
        components: [component.html5, component.css3, component.javascript, component.react],
        link: {
          github: "https://github.com/Jon1701/MarkdownPreviewer",
          demo: "../portfolio/MarkdownPreviewer"
        }
      },


      {
        image: "../images/portfolio/cover-simongame.png",
        title: "Simon Game",
        description: "A classic, rebuilt for modern times, and in 4K. (Batteries not included)",
        popout: {
          id: "portfolio-project-3"
        },
        components: [component.html5, component.css3, component.javascript, component.jquery],
        link: {
          github: "https://github.com/Jon1701/SimonGame",
          demo: "../portfolio/SimonGame"
        }
      },


      {
        image: "../images/portfolio/cover-wikiviewer.png",
        title: "Wiki Viewer",
        description: "Search for Wikipedia using Wikipedia",
        popout: {
          id: "portfolio-project-5"
        },
        components: [component.html5, component.css3, component.javascript, component.jquery, component.mustache],
        link: {
          github: "https://github.com/Jon1701/WikiViewer",
          demo: "../portfolio/WikiViewer"
        }
      },


      {
        image: "../images/portfolio/cover-pumpkindoro-timer.png",
        title: "Pumpkindoro Timer",
        description: "A variation of the world famous Pomodoro Timer, now made with real pumpkins.",
        popout: {
          id: "portfolio-project-2"
        },
        components: [component.html5, component.css3, component.javascript, component.jquery],
        link: {
          github: "https://github.com/Jon1701/PumpkindoroTimer",
          demo: "../portfolio/PumpkindoroTimer"
        }
      },


      {
        image: "../images/portfolio/cover-quote-generator.png",
        title: "Life is Strange Quote Generator",
        description: "Relive the horror here with quotes from the game",
        popout: {
          id: "portfolio-project-7"
        },
        components: [component.html5, component.css3, component.javascript, component.jquery],
        link: {
          github: "https://github.com/Jon1701/LifeIsStrangeQuoteGenerator",
          demo: "../portfolio/LifeIsStrangeQuoteGenerator"
        }
      },


    ]// End list.
  } // End data

  // Parse template.
  Mustache.parse(template);

  // Render template.
  var rendered = Mustache.render(template, data);

  // Attach template.
  $("#portfolio-target").html(rendered);

});

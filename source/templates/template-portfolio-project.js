// Portfolio Project container.
<div class="portfolio-panel container-fluid col-xs-6 col-md-3">

  // Portfolio Image.
  <a href="#">
    <img src="{{ image }}" alt="{{ description }}" class="img-responsive portfolio-image">
  </a>


  // Portfolio Buttons.
  <div class="portfolio-button-container">

    // GitHub button.
    <a href="{{ link.github }}" target="_blank">
      <div class="portfolio-button">
        <i class="fa fa-github-square fa-fw"></i>
        GitHub
      </div>
    </a>

    // Demo button.
    <a href="{{ link.demo }}" target="_blank">
      <div class="portfolio-button">
        <i class="fa fa-play-circle-o fa-fw"></i>
        Demo
      </div>
    </a>

    </div>

  // Portfolio Description.
  <div class="portfolio-description">
    {{ description }}
  </div>

</div>

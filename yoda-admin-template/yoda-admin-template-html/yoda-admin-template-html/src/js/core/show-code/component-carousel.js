const basicCarousel = `
<div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="..." class="d-block w-100" alt="...">
    </div>
    
    <div class="carousel-item">
      <img src="..." class="d-block w-100" alt="...">
    </div>
    
    <div class="carousel-item">
      <img src="..." class="d-block w-100" alt="...">
    </div>
  </div>
</div>

`;

const controls = `
<div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="..." class="d-block w-100" alt="...">
    </div>

    <div class="carousel-item">
      <img src="..." class="d-block w-100" alt="...">
    </div>

    <div class="carousel-item">
      <img src="..." class="d-block w-100" alt="...">
    </div>
  </div>

  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>

  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>

`;

const indicators = `
<div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>

  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="..." class="d-block w-100" alt="...">
    </div>

    <div class="carousel-item">
      <img src="..." class="d-block w-100" alt="...">
    </div>

    <div class="carousel-item">
      <img src="..." class="d-block w-100" alt="...">
    </div>
  </div>

  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>

  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>

`;

const captionsCarousel = `
<div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div>

    <div class="carousel-inner">
        <div class="carousel-item active">
            <img src="..." class="d-block w-100" alt="...">

            <div class="carousel-caption d-none d-md-block">
                <h5 class="text-white">First slide label</h5>
                <p>Some representative placeholder content for the first slide.</p>
            </div>
        </div>

        <div class="carousel-item">
            <img src="..." class="d-block w-100" alt="...">

            <div class="carousel-caption d-none d-md-block">
                <h5 class="text-white">Second slide label</h5>
                <p>Some representative placeholder content for the second slide.</p>
            </div>
        </div>

        <div class="carousel-item">
            <img src="..." class="d-block w-100" alt="...">

            <div class="carousel-caption d-none d-md-block">
                <h5 class="text-white">Third slide label</h5>
                <p>Some representative placeholder content for the third slide.</p>
            </div>
        </div>
    </div>

    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
    </button>

    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
    </button>
</div>

`;

const crossfade = `
<div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="..." class="d-block w-100" alt="...">
    </div>

    <div class="carousel-item">
      <img src="..." class="d-block w-100" alt="...">
    </div>

    <div class="carousel-item">
      <img src="..." class="d-block w-100" alt="...">
    </div>
  </div>

  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>

  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>

`;

const interval = `
<div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active" data-bs-interval="10000">
      <img src="..." class="d-block w-100" alt="...">
    </div>

    <div class="carousel-item" data-bs-interval="2000">
      <img src="..." class="d-block w-100" alt="...">
    </div>

    <div class="carousel-item">
      <img src="..." class="d-block w-100" alt="...">
    </div>
  </div>

  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>

  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>

`;

const touch = `
<div id="carouselExampleControlsNoTouching" class="carousel slide" data-bs-touch="false" data-bs-interval="false">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="..." class="d-block w-100" alt="...">
    </div>
    
    <div class="carousel-item">
      <img src="..." class="d-block w-100" alt="...">
    </div>
    
    <div class="carousel-item">
      <img src="..." class="d-block w-100" alt="...">
    </div>
  </div>
  
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>

`;

//--

$("pre code").each(function () {
    if ($(this).data("component") === "carousel") {
        $(this).text($.trim($(this).data("code")))

        if ($(this).data("code") === "basic") {
            $(this).text(basicCarousel)
        }
        
        if ($(this).data("code") === "controls") {
            $(this).text(controls)
        }

        if ($(this).data("code") === "indicators") {
            $(this).text(indicators)
        }

        if ($(this).data("code") === "captions") {
            $(this).text(captionsCarousel)
        }
        
        if ($(this).data("code") === "crossfade") {
            $(this).text(crossfade)
        }
        
        if ($(this).data("code") === "interval") {
            $(this).text(interval)
        }

        if ($(this).data("code") === "touch") {
            $(this).text(touch)
        }
    }
});

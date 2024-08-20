const basicAccordion = `
<div class="accordion" id="accordionExample">
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingOne">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        <div class="row align-items-center">
          <div class="col pe-16">
            <p class="d-flex align-items-center hp-p1-body mb-0">
              <span>Lorem Ipsum Collapse Title</span>
              <span class="badge bg-primary-4 border-primary text-primary ms-16">Tag</span>
            </p>
          </div>
        </div>
      </button>
    </h2>

    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <p class="hp-p1-body">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget eleifend lectus. Sed quis nisi lectus. Quisque vel leo diam. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer sit amet nisi eu nisi tincidunt facilisis. Sed mollis nisl dui, a sodales massa sodales sit amet. Sed nisl est, volutpat sed feugiat non, maximus id orci. Fusce placerat congue nulla, a consectetur massa hendrerit a.
        </p>
      </div>
    </div>
  </div>

  <div class="accordion-item">
    <h2 class="accordion-header" id="headingTwo">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        <div class="row align-items-center">
          <div class="col pe-16">
            <p class="d-flex align-items-center hp-p1-body mb-0">
              <span>Lorem Ipsum Collapse Title</span>
              <span class="badge bg-primary-4 border-primary text-primary ms-16">Tag</span>
            </p>
          </div>
        </div>
      </button>
    </h2>

    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <p class="hp-p1-body">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget eleifend lectus. Sed quis nisi lectus. Quisque vel leo diam. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer sit amet nisi eu nisi tincidunt facilisis. Sed mollis nisl dui, a sodales massa sodales sit amet. Sed nisl est, volutpat sed feugiat non, maximus id orci. Fusce placerat congue nulla, a consectetur massa hendrerit a.
        </p>
      </div>
    </div>
  </div>

  <div class="accordion-item">
    <h2 class="accordion-header" id="headingThree">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        <div class="row align-items-center">
          <div class="col pe-16">
            <p class="d-flex align-items-center hp-p1-body mb-0">
              <span>Lorem Ipsum Collapse Title</span>
              <span class="badge bg-primary-4 border-primary text-primary ms-16">Tag</span>
            </p>
          </div>
        </div>
      </button>
    </h2>

    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <p class="hp-p1-body">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget eleifend lectus. Sed quis nisi lectus. Quisque vel leo diam. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer sit amet nisi eu nisi tincidunt facilisis. Sed mollis nisl dui, a sodales massa sodales sit amet. Sed nisl est, volutpat sed feugiat non, maximus id orci. Fusce placerat congue nulla, a consectetur massa hendrerit a.
        </p>
      </div>
    </div>
  </div>
</div>

`;

const flushAccordion = `
<div class="accordion accordion-flush" id="accordionFlushExample">
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingOne">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
        <div class="row align-items-center">
          <div class="col pe-16">
            <p class="d-flex align-items-center hp-p1-body mb-0">
              <span>Lorem Ipsum Collapse Title</span>
              <span class="badge bg-primary-4 border-primary text-primary ms-16">Tag</span>
            </p>
          </div>
        </div>
      </button>
    </h2>

    <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">
        <p class="hp-p1-body">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget eleifend lectus. Sed quis nisi lectus. Quisque vel leo diam. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer sit amet nisi eu nisi tincidunt facilisis. Sed mollis nisl dui, a sodales massa sodales sit amet. Sed nisl est, volutpat sed feugiat non, maximus id orci. Fusce placerat congue nulla, a consectetur massa hendrerit a.
        </p>
      </div>
    </div>
  </div>

  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingTwo">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
        <div class="row align-items-center">
          <div class="col pe-16">
            <p class="d-flex align-items-center hp-p1-body mb-0">
              <span>Lorem Ipsum Collapse Title</span>
              <span class="badge bg-primary-4 border-primary text-primary ms-16">Tag</span>
            </p>
          </div>
        </div>
      </button>
    </h2>

    <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">
        <p class="hp-p1-body">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget eleifend lectus. Sed quis nisi lectus. Quisque vel leo diam. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer sit amet nisi eu nisi tincidunt facilisis. Sed mollis nisl dui, a sodales massa sodales sit amet. Sed nisl est, volutpat sed feugiat non, maximus id orci. Fusce placerat congue nulla, a consectetur massa hendrerit a.
        </p>
      </div>
    </div>
  </div>

  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingThree">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
        <div class="row align-items-center">
          <div class="col pe-16">
            <p class="d-flex align-items-center hp-p1-body mb-0">
              <span>Lorem Ipsum Collapse Title</span>
              <span class="badge bg-primary-4 border-primary text-primary ms-16">Tag</span>
            </p>
          </div>
        </div>
      </button>
    </h2>

    <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">
        <p class="hp-p1-body">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget eleifend lectus. Sed quis nisi lectus. Quisque vel leo diam. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer sit amet nisi eu nisi tincidunt facilisis. Sed mollis nisl dui, a sodales massa sodales sit amet. Sed nisl est, volutpat sed feugiat non, maximus id orci. Fusce placerat congue nulla, a consectetur massa hendrerit a.
        </p>
      </div>
    </div>
  </div>
</div>

`;

const openData = `
<div class="accordion" id="accordionPanelsStayOpenExample">
  <div class="accordion-item">
    <h2 class="accordion-header" id="panelsStayOpen-headingOne">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
        <div class="row align-items-center">
          <div class="col pe-16">
            <p class="d-flex align-items-center hp-p1-body mb-0">
              <span>Lorem Ipsum Collapse Title</span>
              <span class="badge bg-primary-4 border-primary text-primary ms-16">Tag</span>
            </p>
          </div>
        </div>
      </button>
    </h2>

    <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
      <div class="accordion-body">
        <p class="hp-p1-body">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget eleifend lectus. Sed quis nisi lectus. Quisque vel leo diam. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer sit amet nisi eu nisi tincidunt facilisis. Sed mollis nisl dui, a sodales massa sodales sit amet. Sed nisl est, volutpat sed feugiat non, maximus id orci. Fusce placerat congue nulla, a consectetur massa hendrerit a.
        </p>
      </div>
    </div>
  </div>

  <div class="accordion-item">
    <h2 class="accordion-header" id="panelsStayOpen-headingTwo">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
        <div class="row align-items-center">
          <div class="col pe-16">
            <p class="d-flex align-items-center hp-p1-body mb-0">
              <span>Lorem Ipsum Collapse Title</span>
              <span class="badge bg-primary-4 border-primary text-primary ms-16">Tag</span>
            </p>
          </div>
        </div>
      </button>
    </h2>

    <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
      <div class="accordion-body">
        <p class="hp-p1-body">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget eleifend lectus. Sed quis nisi lectus. Quisque vel leo diam. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer sit amet nisi eu nisi tincidunt facilisis. Sed mollis nisl dui, a sodales massa sodales sit amet. Sed nisl est, volutpat sed feugiat non, maximus id orci. Fusce placerat congue nulla, a consectetur massa hendrerit a.
        </p>
      </div>
    </div>
  </div>

  <div class="accordion-item">
    <h2 class="accordion-header" id="panelsStayOpen-headingThree">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
        <div class="row align-items-center">
          <div class="col pe-16">
            <p class="d-flex align-items-center hp-p1-body mb-0">
              <span>Lorem Ipsum Collapse Title</span>
              <span class="badge bg-primary-4 border-primary text-primary ms-16">Tag</span>
            </p>
          </div>
        </div>
      </button>
    </h2>

    <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
      <div class="accordion-body">
        <p class="hp-p1-body">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget eleifend lectus. Sed quis nisi lectus. Quisque vel leo diam. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer sit amet nisi eu nisi tincidunt facilisis. Sed mollis nisl dui, a sodales massa sodales sit amet. Sed nisl est, volutpat sed feugiat non, maximus id orci. Fusce placerat congue nulla, a consectetur massa hendrerit a.
        </p>
      </div>
    </div>
  </div>
</div>

`;

//--

$("pre code").each(function () {
  if ($(this).data("component") === "accordion") {
    $(this).text($.trim($(this).data("code")))

    if ($(this).data("code") === "example") {
      $(this).text(basicAccordion)
    }

    if ($(this).data("code") === "flush") {
      $(this).text(flushAccordion)
    }

    if ($(this).data("code") === "open") {
      $(this).text(openData)
    }
  }
});

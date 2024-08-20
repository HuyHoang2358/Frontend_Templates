const exampleCollapse = `
<a class="btn btn-primary" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
  Link with href
</a>

<button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
  Button with data-bs-target
</button>

<div class="collapse" id="collapseExample">
  <div class="card card-body mt-16">
    <p class="hp-p1-body mb-0">
      Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.
    </p>
  </div>
</div>

`;

const multipleCollapse = `
<a class="btn btn-primary" data-bs-toggle="collapse" href="#multiCollapseExample1" role="button" aria-expanded="false" aria-controls="multiCollapseExample1">Toggle first element</a>

<button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#multiCollapseExample2" aria-expanded="false" aria-controls="multiCollapseExample2">Toggle second element</button>

<button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target=".multi-collapse" aria-expanded="false" aria-controls="multiCollapseExample1 multiCollapseExample2">Toggle both elements</button>

<div class="row">
  <div class="col">
    <div class="collapse multi-collapse" id="multiCollapseExample1">
      <div class="card card-body mt-16">
        <p class="hp-p1-body mb-0">
          Some placeholder content for the first collapse component of this multi-collapse example. This panel is hidden by default but revealed when the user activates the relevant trigger.
        </p>
      </div>
    </div>
  </div>

  <div class="col">
    <div class="collapse multi-collapse" id="multiCollapseExample2">
      <div class="card card-body mt-16">
        <p class="hp-p1-body mb-0">
          Some placeholder content for the first collapse component of this multi-collapse example. This panel is hidden by default but revealed when the user activates the relevant trigger.
        </p>
      </div>
    </div>
  </div>
</div>

`;

//--

$("pre code").each(function () {
  if ($(this).data("component") === "collapse") {
    $(this).text($.trim($(this).data("code")))

    if ($(this).data("code") === "example") {
      $(this).text(exampleCollapse)
    }

    if ($(this).data("code") === "multiple") {
      $(this).text(multipleCollapse)
    }
  }
});

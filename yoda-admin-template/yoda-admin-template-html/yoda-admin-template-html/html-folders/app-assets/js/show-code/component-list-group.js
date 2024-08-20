const basicList = `
<ul class="list-group">
  <li class="list-group-item">An item</li>
  <li class="list-group-item">A second item</li>
  <li class="list-group-item">A third item</li>
  <li class="list-group-item">A fourth item</li>
  <li class="list-group-item">And a fifth one</li>
</ul>

`;

const activeItems = `
<ul class="list-group">
  <li class="list-group-item active" aria-current="true">An active item</li>
  <li class="list-group-item">A second item</li>
  <li class="list-group-item">A third item</li>
  <li class="list-group-item">A fourth item</li>
  <li class="list-group-item">And a fifth one</li>
</ul>

`;

const disabledList = `
<ul class="list-group">
  <li class="list-group-item disabled" aria-disabled="true">A disabled item</li>
  <li class="list-group-item">A second item</li>
  <li class="list-group-item">A third item</li>
  <li class="list-group-item">A fourth item</li>
  <li class="list-group-item">And a fifth one</li>
</ul>

`;

const linksAndButtons = `
<div class="list-group">
  <a href="#" class="list-group-item list-group-item-action active" aria-current="true">
    The current link item
  </a>
  <a href="#" class="list-group-item list-group-item-action">A second link item</a>
  <a href="#" class="list-group-item list-group-item-action">A third link item</a>
  <a href="#" class="list-group-item list-group-item-action">A fourth link item</a>
  <a href="#" class="list-group-item list-group-item-action disabled" tabindex="-1" aria-disabled="true">A disabled link item</a>
</div>

<div class="list-group">
  <button type="button" class="list-group-item list-group-item-action active" aria-current="true">
    The current button
  </button>
  <button type="button" class="list-group-item list-group-item-action">A second item</button>
  <button type="button" class="list-group-item list-group-item-action">A third button item</button>
  <button type="button" class="list-group-item list-group-item-action">A fourth button item</button>
  <button type="button" class="list-group-item list-group-item-action" disabled>A disabled button item</button>
</div>

`;

const flushList = `
<ul class="list-group list-group-flush">
  <li class="list-group-item">An item</li>
  <li class="list-group-item">A second item</li>
  <li class="list-group-item">A third item</li>
  <li class="list-group-item">A fourth item</li>
  <li class="list-group-item">And a fifth one</li>
</ul>

`;

const numbered = `
<ol class="list-group list-group-numbered">
  <li class="list-group-item">Cras justo odio</li>
  <li class="list-group-item">Cras justo odio</li>
  <li class="list-group-item">Cras justo odio</li>
</ol>

<ol class="list-group list-group-numbered">
  <li class="list-group-item d-flex justify-content-between align-items-start">
    <div class="ms-2 me-auto">
      <div class="fw-bold">Subheading</div>
      Cras justo odio
    </div>
    <span class="badge bg-primary rounded-pill">14</span>
  </li>

  <li class="list-group-item d-flex justify-content-between align-items-start">
    <div class="ms-2 me-auto">
      <div class="fw-bold">Subheading</div>
      Cras justo odio
    </div>
    <span class="badge bg-primary rounded-pill">14</span>
  </li>

  <li class="list-group-item d-flex justify-content-between align-items-start">
    <div class="ms-2 me-auto">
      <div class="fw-bold">Subheading</div>
      Cras justo odio
    </div>
    <span class="badge bg-primary rounded-pill">14</span>
  </li>
</ol>

`;

const horizontalList = `
<ul class="list-group list-group-horizontal">
  <li class="list-group-item">An item</li>
  <li class="list-group-item">A second item</li>
  <li class="list-group-item">A third item</li>
</ul>

<ul class="list-group list-group-horizontal-sm">
  <li class="list-group-item">An item</li>
  <li class="list-group-item">A second item</li>
  <li class="list-group-item">A third item</li>
</ul>

<ul class="list-group list-group-horizontal-md">
  <li class="list-group-item">An item</li>
  <li class="list-group-item">A second item</li>
  <li class="list-group-item">A third item</li>
</ul>

<ul class="list-group list-group-horizontal-lg">
  <li class="list-group-item">An item</li>
  <li class="list-group-item">A second item</li>
  <li class="list-group-item">A third item</li>
</ul>

<ul class="list-group list-group-horizontal-xl">
  <li class="list-group-item">An item</li>
  <li class="list-group-item">A second item</li>
  <li class="list-group-item">A third item</li>
</ul>

<ul class="list-group list-group-horizontal-xxl">
  <li class="list-group-item">An item</li>
  <li class="list-group-item">A second item</li>
  <li class="list-group-item">A third item</li>
</ul>

`;

const contextual = `
<ul class="list-group">
  <li class="list-group-item">A simple default list group item</li>

  <li class="list-group-item list-group-item-primary">A simple primary list group item</li>
  <li class="list-group-item list-group-item-secondary">A simple secondary list group item</li>
  <li class="list-group-item list-group-item-success">A simple success list group item</li>
  <li class="list-group-item list-group-item-danger">A simple danger list group item</li>
  <li class="list-group-item list-group-item-warning">A simple warning list group item</li>
  <li class="list-group-item list-group-item-info">A simple info list group item</li>
  <li class="list-group-item list-group-item-light">A simple light list group item</li>
  <li class="list-group-item list-group-item-dark">A simple dark list group item</li>
</ul>

<div class="list-group">
  <a href="#" class="list-group-item list-group-item-action">A simple default list group item</a>

  <a href="#" class="list-group-item list-group-item-action list-group-item-primary">A simple primary list group item</a>
  <a href="#" class="list-group-item list-group-item-action list-group-item-secondary">A simple secondary list group item</a>
  <a href="#" class="list-group-item list-group-item-action list-group-item-success">A simple success list group item</a>
  <a href="#" class="list-group-item list-group-item-action list-group-item-danger">A simple danger list group item</a>
  <a href="#" class="list-group-item list-group-item-action list-group-item-warning">A simple warning list group item</a>
  <a href="#" class="list-group-item list-group-item-action list-group-item-info">A simple info list group item</a>
  <a href="#" class="list-group-item list-group-item-action list-group-item-light">A simple light list group item</a>
  <a href="#" class="list-group-item list-group-item-action list-group-item-dark">A simple dark list group item</a>
</div>

`;

const badges = `
<ul class="list-group">
  <li class="list-group-item d-flex justify-content-between align-items-center">
    A list item
    <span class="badge bg-primary rounded-pill">14</span>
  </li>

  <li class="list-group-item d-flex justify-content-between align-items-center">
    A second list item
    <span class="badge bg-primary rounded-pill">2</span>
  </li>

  <li class="list-group-item d-flex justify-content-between align-items-center">
    A third list item
    <span class="badge bg-primary rounded-pill">1</span>
  </li>
</ul>

`;

const customContent = `
<div class="list-group">
  <a href="#" class="list-group-item list-group-item-action active" aria-current="true">
    <div class="d-flex w-100 justify-content-between">
      <h5 class="mb-1">List group item heading</h5>
      <small>3 days ago</small>
    </div>
    <p class="mb-1">Some placeholder content in a paragraph.</p>
    <small>And some small print.</small>
  </a>
  
  <a href="#" class="list-group-item list-group-item-action">
    <div class="d-flex w-100 justify-content-between">
      <h5 class="mb-1">List group item heading</h5>
      <small class="text-muted">3 days ago</small>
    </div>
    <p class="mb-1">Some placeholder content in a paragraph.</p>
    <small class="text-muted">And some muted small print.</small>
  </a>
  
  <a href="#" class="list-group-item list-group-item-action">
    <div class="d-flex w-100 justify-content-between">
      <h5 class="mb-1">List group item heading</h5>
      <small class="text-muted">3 days ago</small>
    </div>
    <p class="mb-1">Some placeholder content in a paragraph.</p>
    <small class="text-muted">And some muted small print.</small>
  </a>
</div>

`;

const checkboxesAndRadios = `
<ul class="list-group">
  <li class="list-group-item">
    <input class="form-check-input me-1" type="checkbox" value="" aria-label="...">
    First checkbox
  </li>

  <li class="list-group-item">
    <input class="form-check-input me-1" type="checkbox" value="" aria-label="...">
    Second checkbox
  </li>

  <li class="list-group-item">
    <input class="form-check-input me-1" type="checkbox" value="" aria-label="...">
    Third checkbox
  </li>

  <li class="list-group-item">
    <input class="form-check-input me-1" type="checkbox" value="" aria-label="...">
    Fourth checkbox
  </li>

  <li class="list-group-item">
    <input class="form-check-input me-1" type="checkbox" value="" aria-label="...">
    Fifth checkbox
  </li>
</ul>

<div class="list-group">
  <label class="list-group-item">
    <input class="form-check-input me-1" type="checkbox" value="">
    First checkbox
  </label>
  
  <label class="list-group-item">
    <input class="form-check-input me-1" type="checkbox" value="">
    Second checkbox
  </label>
  
  <label class="list-group-item">
    <input class="form-check-input me-1" type="checkbox" value="">
    Third checkbox
  </label>
  
  <label class="list-group-item">
    <input class="form-check-input me-1" type="checkbox" value="">
    Fourth checkbox
  </label>
  
  <label class="list-group-item">
    <input class="form-check-input me-1" type="checkbox" value="">
    Fifth checkbox
  </label>
</div>

`;

//--

$("pre code").each(function () {
  if ($(this).data("component") === "list") {
    $(this).text($.trim($(this).data("code")))

    if ($(this).data("code") === "basic") {
      $(this).text(basicList)
    }

    if ($(this).data("code") === "active-items") {
      $(this).text(activeItems)
    }

    if ($(this).data("code") === "disabled") {
      $(this).text(disabledList)
    }

    if ($(this).data("code") === "links-and-buttons") {
      $(this).text(linksAndButtons)
    }

    if ($(this).data("code") === "flush") {
      $(this).text(flushList)
    }

    if ($(this).data("code") === "numbered") {
      $(this).text(numbered)
    }

    if ($(this).data("code") === "horizontal") {
      $(this).text(horizontalList)
    }

    if ($(this).data("code") === "contextual") {
      $(this).text(contextual)
    }

    if ($(this).data("code") === "badges") {
      $(this).text(badges)
    }

    if ($(this).data("code") === "custom-content") {
      $(this).text(customContent)
    }

    if ($(this).data("code") === "checkboxes-and-radios") {
      $(this).text(checkboxesAndRadios)
    }
  }
});

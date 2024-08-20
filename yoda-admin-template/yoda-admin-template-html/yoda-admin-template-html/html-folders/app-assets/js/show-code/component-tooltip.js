const basicTooltip = `
<button type="button" class="btn btn-primary" data-bs-toggle="tooltip" title="Tooltip on top">
  Tooltip
</button>

<button type="button" class="btn btn-secondary" data-bs-toggle="tooltip" data-bs-html="true" title="<em>Tooltip</em> <u>with</u> <b>HTML</b>">
  Tooltip with HTML
</button>

`;

const direction = `
<button type="button" class="btn btn-primary" data-bs-toggle="tooltip" data-bs-placement="top" title="Tooltip on top">
  Tooltip on top
</button>

<button type="button" class="btn btn-primary" data-bs-toggle="tooltip" data-bs-placement="right" title="Tooltip on right">
  Tooltip on right
</button>

<button type="button" class="btn btn-primary" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Tooltip on bottom">
  Tooltip on bottom
</button>

<button type="button" class="btn btn-primary" data-bs-toggle="tooltip" data-bs-placement="left" title="Tooltip on left">
  Tooltip on left
</button>

`;

const svg = `
<div class="d-inline-block" data-bs-toggle="tooltip" data-bs-placement="top" title="Yoda">
  <img src="..." alt="...">
</div>

`;

//--

$("pre code").each(function () {
  if ($(this).data("component") === "tooltip") {
    $(this).text($.trim($(this).data("code")))

    if ($(this).data("code") === "basic") {
      $(this).text(basicTooltip)
    }

    if ($(this).data("code") === "direction") {
      $(this).text(direction)
    }

    if ($(this).data("code") === "svg") {
      $(this).text(svg)
    }
  }
});

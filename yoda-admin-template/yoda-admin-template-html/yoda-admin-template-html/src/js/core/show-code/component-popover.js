const basicPopover = `
<button type="button" class="btn btn-lg btn-primary" data-bs-toggle="popover" title="Popover title" data-bs-content="And here's some amazing content. It's very engaging. Right?">
  Click to toggle popover
</button>

`;

const directions = `
<button type="button" class="btn btn-primary" data-bs-container="body" data-bs-toggle="popover" data-bs-placement="top" data-bs-content="Top popover">
    Popover on top
</button>

<button type="button" class="btn btn-primary" data-bs-container="body" data-bs-toggle="popover" data-bs-placement="right" data-bs-content="Right popover">
    Popover on right
</button>

<button type="button" class="btn btn-primary" data-bs-container="body" data-bs-toggle="popover" data-bs-placement="bottom" data-bs-content="Bottom popover">
    Popover on bottom
</button>

<button type="button" class="btn btn-primary" data-bs-container="body" data-bs-toggle="popover" data-bs-placement="left" data-bs-content="Left popover">
    Popover on left
</button>

`;

const dismiss = `
<a tabindex="0" class="btn btn-primary" role="button" data-bs-toggle="popover" data-bs-trigger="focus" title="Dismissible popover" data-bs-content="And here's some amazing content. It's very engaging. Right?">
  Dismissible popover
</a>

`;

const disabledPopover = `
<span class="d-inline-block" tabindex="0" data-bs-toggle="popover" data-bs-trigger="hover focus" data-bs-content="Disabled popover">
  <button class="btn btn-primary" type="button" disabled>Disabled button</button>
</span>

`;

//--

$("pre code").each(function () {
  if ($(this).data("component") === "popover") {
    $(this).text($.trim($(this).data("code")))

    if ($(this).data("code") === "basic") {
      $(this).text(basicPopover)
    }

    if ($(this).data("code") === "directions") {
      $(this).text(directions)
    }

    if ($(this).data("code") === "dismiss") {
      $(this).text(dismiss)
    }

    if ($(this).data("code") === "disabled") {
      $(this).text(disabledPopover)
    }
  }
});

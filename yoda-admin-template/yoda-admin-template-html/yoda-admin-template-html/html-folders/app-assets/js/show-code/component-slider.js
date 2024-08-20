const basicSlider = `
<input type="range" class="form-range">

`;

const disabledSlider = `
<input type="range" class="form-range" disabled>

`;

const minAndMax = `
<input type="range" class="form-range" min="0" max="5">

`;

const step = `
<input type="range" class="form-range" min="0" max="5" step="0.5">

`;

//--

$("pre code").each(function () {
  if ($(this).data("component") === "slider") {
    $(this).text($.trim($(this).data("code")))

    if ($(this).data("code") === "basic") {
      $(this).text(basicSlider)
    }

    if ($(this).data("code") === "disabled") {
      $(this).text(disabledSlider)
    }

    if ($(this).data("code") === "min-and-max") {
      $(this).text(minAndMax)
    }

    if ($(this).data("code") === "step") {
      $(this).text(step)
    }
  }
});

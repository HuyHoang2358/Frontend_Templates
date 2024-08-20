const basicSwitch = `
<div class="form-check form-switch">
  <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault">
  <label class="form-check-label" for="flexSwitchCheckDefault">
    <span class="ms-12">Default switch checkbox input</span>
  </label>
</div>

<div class="form-check form-switch">
  <input class="form-check-input" type="checkbox" id="flexSwitchCheckChecked" checked>
  <label class="form-check-label" for="flexSwitchCheckChecked">
    <span class="ms-12">Checked switch checkbox input</span>
  </label>
</div>

<div class="form-check form-switch">
  <input class="form-check-input" type="checkbox" id="flexSwitchCheckDisabled" disabled>
  <label class="form-check-label" for="flexSwitchCheckDisabled">
    <span class="ms-12">Disabled switch checkbox input</span>
  </label>
</div>

<div class="form-check form-switch">
  <input class="form-check-input" type="checkbox" id="flexSwitchCheckCheckedDisabled" checked disabled>
  <label class="form-check-label" for="flexSwitchCheckCheckedDisabled">
    <span class="ms-12">Disabled checked switch checkbox input</span>
  </label>
</div>

`;

//--

$("pre code").each(function () {
  if ($(this).data("component") === "switch") {
    $(this).text($.trim($(this).data("code")))

    if ($(this).data("code") === "basic") {
      $(this).text(basicSwitch)
    }
  }
});

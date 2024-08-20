const basicRadio = `
<div class="form-check">
    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
    <label class="form-check-label" for="flexRadioDefault1">
        Default radio
    </label>
</div>

<div class="form-check">
    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked>
    <label class="form-check-label" for="flexRadioDefault2">
        Default checked radio
    </label>
</div>

`;

const disabledRadio = `
<div class="form-check">
    <input class="form-check-input" type="radio" name="flexRadioDisabled" id="flexRadioDisabled" disabled>
    <label class="form-check-label" for="flexRadioDisabled">
        Disabled radio
    </label>
</div>

<div class="form-check">
    <input class="form-check-input" type="radio" name="flexRadioDisabled" id="flexRadioCheckedDisabled" checked disabled>
    <label class="form-check-label" for="flexRadioCheckedDisabled">
        Disabled checked radio
    </label>
</div>

`;

const toggleButtons = `
<input type="radio" class="btn-check" name="options" id="option1" autocomplete="off" checked>
<label class="btn btn-primary" for="option1">Checked</label>

<input type="radio" class="btn-check" name="options" id="option2" autocomplete="off">
<label class="btn btn-primary" for="option2">Radio</label>

<input type="radio" class="btn-check" name="options" id="option3" autocomplete="off" disabled>
<label class="btn btn-primary" for="option3">Disabled</label>

<input type="radio" class="btn-check" name="options" id="option4" autocomplete="off">
<label class="btn btn-primary" for="option4">Radio</label>

`;

//--

$("pre code").each(function () {
    if ($(this).data("component") === "radio") {
        $(this).text($.trim($(this).data("code")))

        if ($(this).data("code") === "basic") {
            $(this).text(basicRadio)
        }

        if ($(this).data("code") === "disabled") {
            $(this).text(disabledRadio)
        }

        if ($(this).data("code") === "toggle-buttons") {
            $(this).text(toggleButtons)
        }
    }
});

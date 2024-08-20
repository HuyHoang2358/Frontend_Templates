const borderSpinner = `
<div class="spinner-border" role="status">
    <span class="visually-hidden">Loading...</span>
</div>

`;

const colors = `
<div class="spinner-border text-primary" role="status">
    <span class="visually-hidden">Loading...</span>
</div>

<div class="spinner-border text-secondary" role="status">
    <span class="visually-hidden">Loading...</span>
</div>

<div class="spinner-border text-success" role="status">
    <span class="visually-hidden">Loading...</span>
</div>

<div class="spinner-border text-danger" role="status">
    <span class="visually-hidden">Loading...</span>
</div>

<div class="spinner-border text-warning" role="status">
    <span class="visually-hidden">Loading...</span>
</div>

<div class="spinner-border text-info" role="status">
    <span class="visually-hidden">Loading...</span>
</div>

<div class="spinner-border text-light" role="status">
    <span class="visually-hidden">Loading...</span>
</div>

<div class="spinner-border text-dark" role="status">
    <span class="visually-hidden">Loading...</span>
</div>

`;

const growingSpinner = `
<div class="spinner-grow text-primary" role="status">
    <span class="visually-hidden">Loading...</span>
</div>

<div class="spinner-grow text-secondary" role="status">
    <span class="visually-hidden">Loading...</span>
</div>

<div class="spinner-grow text-success" role="status">
    <span class="visually-hidden">Loading...</span>
</div>

<div class="spinner-grow text-danger" role="status">
    <span class="visually-hidden">Loading...</span>
</div>

<div class="spinner-grow text-warning" role="status">
    <span class="visually-hidden">Loading...</span>
</div>

<div class="spinner-grow text-info" role="status">
    <span class="visually-hidden">Loading...</span>
</div>

<div class="spinner-grow text-light" role="status">
    <span class="visually-hidden">Loading...</span>
</div>

<div class="spinner-grow text-dark" role="status">
    <span class="visually-hidden">Loading...</span>
</div>

`;

const flex = `
<div class="d-flex justify-content-center">
    <div class="spinner-border" role="status">
        <span class="visually-hidden">Loading...</span>
    </div>
</div>

<div class="d-flex align-items-center">
    <strong>Loading...</strong>
    <div class="spinner-border ms-auto" role="status" aria-hidden="true"></div>
</div>

`;

const float = `
<div class="clearfix">
    <div class="spinner-border float-end" role="status">
        <span class="visually-hidden">Loading...</span>
    </div>
</div>

`;

const textAlign = `
<div class="text-center">
    <div class="spinner-border" role="status">
        <span class="visually-hidden">Loading...</span>
    </div>
</div>

`;

const size = `
<div class="spinner-border spinner-border-sm" role="status">
    <span class="visually-hidden">Loading...</span>
</div>

<div class="spinner-grow spinner-grow-sm" role="status">
    <span class="visually-hidden">Loading...</span>
</div>

<div class="spinner-border" style="width: 3rem; height: 3rem;" role="status">
    <span class="visually-hidden">Loading...</span>
</div>

<div class="spinner-grow" style="width: 3rem; height: 3rem;" role="status">
    <span class="visually-hidden">Loading...</span>
</div>

`;

const buttonSpinner = `
<button class="btn btn-primary" type="button" disabled>
    <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
    <span class="visually-hidden">Loading...</span>
</button>

<button class="btn btn-primary" type="button" disabled>
    <span class="spinner-border spinner-border-sm me-8" role="status" aria-hidden="true"></span>
    Loading...
</button>

<button class="btn btn-primary" type="button" disabled>
    <span class="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>
    <span class="visually-hidden">Loading...</span>
</button>

<button class="btn btn-primary" type="button" disabled>
    <span class="spinner-grow spinner-grow-sm me-8" role="status" aria-hidden="true"></span>
    Loading...
</button>

`;

//--

$("pre code").each(function () {
    if ($(this).data("component") === "spinner") {
        $(this).text($.trim($(this).data("code")))

        if ($(this).data("code") === "border-spinner") {
            $(this).text(borderSpinner)
        }

        if ($(this).data("code") === "colors") {
            $(this).text(colors)
        }

        if ($(this).data("code") === "growing-spinner") {
            $(this).text(growingSpinner)
        }

        if ($(this).data("code") === "flex") {
            $(this).text(flex)
        }

        if ($(this).data("code") === "float") {
            $(this).text(float)
        }

        if ($(this).data("code") === "text-align") {
            $(this).text(textAlign)
        }

        if ($(this).data("code") === "size") {
            $(this).text(size)
        }
        
        if ($(this).data("code") === "button-spinner") {
            $(this).text(buttonSpinner)
        }
    }
});

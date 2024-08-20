const defaultButtons = `
<button class="btn btn-primary">Primary</button>
<button class="btn btn-secondary">Secondary</button>
<button class="btn btn-danger">Danger</button>
<button class="btn btn-info">Info</button>
<button class="btn btn-success">Success</button>
<button class="btn btn-warning">Warning</button>
<button class="btn btn-dark">Dark</button>

`;

const largeButtons = `
<button class="btn btn-lg btn-primary">Primary</button>
<button class="btn btn-lg btn-secondary">Secondary</button>
<button class="btn btn-lg btn-danger">Danger</button>
<button class="btn btn-lg btn-info">Info</button>
<button class="btn btn-lg btn-success">Success</button>
<button class="btn btn-lg btn-warning">Warning</button>
<button class="btn btn-lg btn-dark">Dark</button>

`;

const smallButtons = `
<button class="btn btn-sm btn-primary">Primary</button>
<button class="btn btn-sm btn-secondary">Secondary</button>
<button class="btn btn-sm btn-danger">Danger</button>
<button class="btn btn-sm btn-info">Info</button>
<button class="btn btn-sm btn-success">Success</button>
<button class="btn btn-sm btn-warning">Warning</button>
<button class="btn btn-sm btn-dark">Dark</button>

`;

const textButtons = `
<button class="btn btn-text text-primary hp-hover-bg-primary-4 hp-hover-bg-dark-primary">Primary Button</button>
<button class="btn btn-text text-secondary hp-hover-bg-secondary-4 hp-hover-bg-dark-secondary">Secondary Button</button>
<button class="btn btn-text text-danger hp-hover-bg-danger-4 hp-hover-bg-dark-danger">Danger Button</button>
<button class="btn btn-text text-info hp-hover-bg-info-4 hp-hover-bg-dark-info">Info Button</button>
<button class="btn btn-text text-success hp-hover-bg-success-4 hp-hover-bg-dark-success">Success Button</button>
<button class="btn btn-text text-warning hp-hover-bg-warning-4 hp-hover-bg-dark-warning">Warning Button</button>
<button class="btn btn-text text-black-100 hp-hover-bg-black-10 hp-hover-bg-dark-80 hp-hover-text-color-dark-0">Dark Button</button>

`;

const linkButtons = `
<button class="btn btn-link text-primary hp-hover-text-color-primary-3">Primary Button</button>
<button class="btn btn-link text-secondary hp-hover-text-color-secondary-3">Secondary Button</button>
<button class="btn btn-link text-danger hp-hover-text-color-danger-3">Danger Button</button>
<button class="btn btn-link text-info hp-hover-text-color-info-3">Info Button</button>
<button class="btn btn-link text-success hp-hover-text-color-success-3">Success Button</button>
<button class="btn btn-link text-warning hp-hover-text-color-warning-3">Warning Button</button>
<button class="btn btn-link text-black-100 hp-hover-text-color-black-60">Dark Button</button>

`;

const dashedButtons = `
<button class="btn btn-dashed text-primary border-primary hp-hover-text-color-primary-2 hp-hover-border-color-primary-2">Primary Button</button>
<button class="btn btn-dashed text-secondary border-secondary hp-hover-text-color-secondary-2 hp-hover-border-color-secondary-2">Secondary Button</button>
<button class="btn btn-dashed text-danger border-danger hp-hover-text-color-danger-2 hp-hover-border-color-danger-2">Danger Button</button>
<button class="btn btn-dashed text-info border-info hp-hover-text-color-info-2 hp-hover-border-color-info-2">Info Button</button>
<button class="btn btn-dashed text-success border-success hp-hover-text-color-success-2 hp-hover-border-color-success-2">Success Button</button>
<button class="btn btn-dashed text-warning border-warning hp-hover-text-color-warning-2 hp-hover-border-color-warning-2">Warning Button</button>
<button class="btn btn-dashed text-black-100 border-black-100 hp-hover-text-color-black-80 hp-hover-border-color-black-80">Dark Button</button>

`;

const disabledButtons = `
<button class="btn btn-primary" disabled>Primary Button</button>

<button class="btn btn-primary" disabled>
    <i class="ri-arrow-right-s-line remix-icon"></i>
    <span>Primary Button</span>
</button>

<button class="btn btn-text" disabled>Text Button</button>

`;

const outlineButtons = `
<button class="btn btn-outline-primary">Primary Button</button>
<button class="btn btn-outline-secondary">Secondary Button</button>
<button class="btn btn-outline-danger">Danger Button</button>
<button class="btn btn-outline-info">Info Button</button>
<button class="btn btn-outline-success">Success Button</button>
<button class="btn btn-outline-warning">Warning Button</button>
<button class="btn btn-outline-black-100">Dark Button</button>

`;

const ghostButtons = `
<button class="btn btn-ghost btn-primary">Primary Button</button>
<button class="btn btn-ghost btn-secondary">Secondary Button</button>
<button class="btn btn-ghost btn-danger">Danger Button</button>
<button class="btn btn-ghost btn-info">Info Button</button>
<button class="btn btn-ghost btn-success">Success Button</button>
<button class="btn btn-ghost btn-warning">Warning Button</button>
<button class="btn btn-ghost btn-dark">Dark Button</button>

`;

const gradientButtons = `
<button class="btn btn-gradient btn-primary"><span>Primary Button</span></button>
<button class="btn btn-gradient btn-secondary"><span>Secondary Button</span></button>
<button class="btn btn-gradient btn-danger"><span>Danger Button</span></button>
<button class="btn btn-gradient btn-info"><span>Info Button</span></button>
<button class="btn btn-gradient btn-success"><span>Success Button</span></button>
<button class="btn btn-gradient btn-warning"><span>Warning Button</span></button>
<button class="btn btn-gradient btn-dark"><span>Dark Button</span></button>

`;

const iconButtons = `
<button class="btn btn-primary">
    <i class="ri-search-line remix-icon"></i>
    <span>Search</span>
</button>

<button class="btn btn-outline-primary">
    <i class="ri-search-line remix-icon"></i>
    <span>Search</span>
</button>

<button class="btn btn-dashed btn-dashed-primary">
    <i class="ri-search-line remix-icon"></i>
    <span>Search</span>
</button>

--

<button class="btn btn-secondary">
    <i class="ri-search-line remix-icon"></i>
    <span>Search</span>
</button>

<button class="btn btn-outline-secondary">
    <i class="ri-search-line remix-icon"></i>
    <span>Search</span>
</button>

<button class="btn btn-dashed btn-dashed-secondary">
    <i class="ri-search-line remix-icon"></i>
    <span>Search</span>
</button>

--

<button class="btn btn-danger">
    <i class="ri-search-line remix-icon"></i>
    <span>Search</span>
</button>

<button class="btn btn-outline-danger">
    <i class="ri-search-line remix-icon"></i>
    <span>Search</span>
</button>

<button class="btn btn-dashed btn-dashed-danger">
    <i class="ri-search-line remix-icon"></i>
    <span>Search</span>
</button>

--

<button class="btn btn-info">
    <i class="ri-search-line remix-icon"></i>
    <span>Search</span>
</button>

<button class="btn btn-outline-info">
    <i class="ri-search-line remix-icon"></i>
    <span>Search</span>
</button>

<button class="btn btn-dashed btn-dashed-info">
    <i class="ri-search-line remix-icon"></i>
    <span>Search</span>
</button>

--

<button class="btn btn-success">
    <i class="ri-search-line remix-icon"></i>
    <span>Search</span>
</button>

<button class="btn btn-outline-success">
    <i class="ri-search-line remix-icon"></i>
    <span>Search</span>
</button>

<button class="btn btn-dashed btn-dashed-success">
    <i class="ri-search-line remix-icon"></i>
    <span>Search</span>
</button>

--

<button class="btn btn-warning">
    <i class="ri-search-line remix-icon"></i>
    <span>Search</span>
</button>

<button class="btn btn-outline-warning">
    <i class="ri-search-line remix-icon"></i>
    <span>Search</span>
</button>

<button class="btn btn-dashed btn-dashed-warning">
    <i class="ri-search-line remix-icon"></i>
    <span>Search</span>
</button>

`;

const iconOnlyButtons = `
<button class="btn btn-icon-only rounded-circle btn-primary">
    <i class="ri-search-line remix-icon"></i>
</button>

<button class="btn btn-icon-only rounded-circle btn-primary">
    <span>Y</span>
</button>

<button class="btn btn-icon-only rounded-circle btn-outline-primary">
    <i class="ri-search-line remix-icon"></i>
</button>

<button class="btn btn-icon-only rounded-circle btn-dashed btn-dashed-primary">
    <i class="ri-search-line remix-icon"></i>
</button>

<button class="btn btn-icon-only btn-primary">
    <i class="ri-arrow-right-s-line remix-icon"></i>
</button>

<button class="btn btn-icon-only rounded-circle btn-primary">
    <i class="ri-arrow-right-s-line remix-icon"></i>
</button>

--

<button class="btn btn-icon-only rounded-circle btn-secondary">
    <i class="ri-search-line remix-icon"></i>
</button>

<button class="btn btn-icon-only rounded-circle btn-secondary">
    <span>Y</span>
</button>

<button class="btn btn-icon-only rounded-circle btn-outline-secondary">
    <i class="ri-search-line remix-icon"></i>
</button>

<button class="btn btn-icon-only rounded-circle btn-dashed btn-dashed-secondary">
    <i class="ri-search-line remix-icon"></i>
</button>

<button class="btn btn-icon-only btn-secondary">
    <i class="ri-arrow-right-s-line remix-icon"></i>
</button>

<button class="btn btn-icon-only rounded-circle btn-secondary">
    <i class="ri-arrow-right-s-line remix-icon"></i>
</button>

--

<button class="btn btn-icon-only rounded-circle btn-danger">
    <i class="ri-search-line remix-icon"></i>
</button>

<button class="btn btn-icon-only rounded-circle btn-danger">
    <span>Y</span>
</button>

<button class="btn btn-icon-only rounded-circle btn-outline-danger">
    <i class="ri-search-line remix-icon"></i>
</button>

<button class="btn btn-icon-only rounded-circle btn-dashed btn-dashed-danger">
    <i class="ri-search-line remix-icon"></i>
</button>

<button class="btn btn-icon-only btn-danger">
    <i class="ri-arrow-right-s-line remix-icon"></i>
</button>

<button class="btn btn-icon-only rounded-circle btn-danger">
    <i class="ri-arrow-right-s-line remix-icon"></i>
</button>

--

<button class="btn btn-icon-only rounded-circle btn-info">
    <i class="ri-search-line remix-icon"></i>
</button>

<button class="btn btn-icon-only rounded-circle btn-info">
    <span>Y</span>
</button>

<button class="btn btn-icon-only rounded-circle btn-outline-info">
    <i class="ri-search-line remix-icon"></i>
</button>

<button class="btn btn-icon-only rounded-circle btn-dashed btn-dashed-info">
    <i class="ri-search-line remix-icon"></i>
</button>

<button class="btn btn-icon-only btn-info">
    <i class="ri-arrow-right-s-line remix-icon"></i>
</button>

<button class="btn btn-icon-only rounded-circle btn-info">
    <i class="ri-arrow-right-s-line remix-icon"></i>
</button>

--

<button class="btn btn-icon-only rounded-circle btn-success">
    <i class="ri-search-line remix-icon"></i>
</button>

<button class="btn btn-icon-only rounded-circle btn-success">
    <span>Y</span>
</button>

<button class="btn btn-icon-only rounded-circle btn-outline-success">
    <i class="ri-search-line remix-icon"></i>
</button>

<button class="btn btn-icon-only rounded-circle btn-dashed btn-dashed-success">
    <i class="ri-search-line remix-icon"></i>
</button>

<button class="btn btn-icon-only btn-success">
    <i class="ri-arrow-right-s-line remix-icon"></i>
</button>

<button class="btn btn-icon-only rounded-circle btn-success">
    <i class="ri-arrow-right-s-line remix-icon"></i>
</button>
                
--

<button class="btn btn-icon-only rounded-circle btn-warning">
    <i class="ri-search-line remix-icon"></i>
</button>

<button class="btn btn-icon-only rounded-circle btn-warning">
    <span>Y</span>
</button>

<button class="btn btn-icon-only rounded-circle btn-outline-warning">
    <i class="ri-search-line remix-icon"></i>
</button>

<button class="btn btn-icon-only rounded-circle btn-dashed btn-dashed-warning">
    <i class="ri-search-line remix-icon"></i>
</button>

<button class="btn btn-icon-only btn-warning">
    <i class="ri-arrow-right-s-line remix-icon"></i>
</button>

<button class="btn btn-icon-only rounded-circle btn-warning">
    <i class="ri-arrow-right-s-line remix-icon"></i>
</button>

`;

//--

$("pre code").each(function () {
    if ($(this).data("component") === "buttons") {
        $(this).text($.trim($(this).data("code")))

        if ($(this).data("code") === "default-buttons") {
            $(this).text(defaultButtons)
        }

        if ($(this).data("code") === "large-buttons") {
            $(this).text(largeButtons)
        }

        if ($(this).data("code") === "small-buttons") {
            $(this).text(smallButtons)
        }

        if ($(this).data("code") === "text-buttons") {
            $(this).text(textButtons)
        }

        if ($(this).data("code") === "link-buttons") {
            $(this).text(linkButtons)
        }

        if ($(this).data("code") === "dashed-buttons") {
            $(this).text(dashedButtons)
        }

        if ($(this).data("code") === "disabled-buttons") {
            $(this).text(disabledButtons)
        }

        if ($(this).data("code") === "outline-buttons") {
            $(this).text(outlineButtons)
        }

        if ($(this).data("code") === "ghost-buttons") {
            $(this).text(ghostButtons)
        }

        if ($(this).data("code") === "gradient-buttons") {
            $(this).text(gradientButtons)
        }

        if ($(this).data("code") === "icon-buttons") {
            $(this).text(iconButtons)
        }

        if ($(this).data("code") === "icon-only-buttons") {
            $(this).text(iconOnlyButtons)
        }
    }
});

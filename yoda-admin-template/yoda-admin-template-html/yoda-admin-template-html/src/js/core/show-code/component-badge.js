const headings = `
<h1>Example heading <span class="badge bg-primary">New</span></h1>
<h2>Example heading <span class="badge bg-primary">New</span></h2>
<h3>Example heading <span class="badge bg-primary">New</span></h3>
<h4>Example heading <span class="badge bg-primary">New</span></h4>
<h5>Example heading <span class="badge bg-primary">New</span></h5>
<h6>Example heading <span class="badge bg-primary">New</span></h6>

`;

const buttons = `
<button type="button" class="btn btn-primary">
    Notifications <span class="badge text-white hp-bg-primary-2 hp-bg-dark-primary border-primary ms-8">4</span>
</button>

`;

const positioned = `
<button type="button" class="btn btn-primary position-relative me-24">
    Inbox
    <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
        99+
        <span class="visually-hidden">unread messages</span>
    </span>
</button>

<button type="button" class="btn btn-primary position-relative">
    Profile
    <span class="position-absolute top-0 start-100 translate-middle p-8 bg-danger border border-light rounded-circle">
        <span class="visually-hidden">New alerts</span>
    </span>
</button>

`;

const background = `
<span class="badge bg-primary">Primary</span>
<span class="badge bg-secondary">Secondary</span>
<span class="badge bg-success">Success</span>
<span class="badge bg-danger">Danger</span>
<span class="badge bg-warning text-dark">Warning</span>
<span class="badge bg-info text-dark">Info</span>
<span class="badge bg-light text-dark">Light</span>
<span class="badge bg-dark">Dark</span>

`;

const pillBadges = `
<span class="badge rounded-pill bg-primary">Primary</span>
<span class="badge rounded-pill bg-secondary">Secondary</span>
<span class="badge rounded-pill bg-success">Success</span>
<span class="badge rounded-pill bg-danger">Danger</span>
<span class="badge rounded-pill bg-warning text-dark">Warning</span>
<span class="badge rounded-pill bg-info text-dark">Info</span>
<span class="badge rounded-pill bg-light text-dark">Light</span>
<span class="badge rounded-pill bg-dark">Dark</span>

`;

//--

$("pre code").each(function () {
    if ($(this).data("component") === "badge") {
        $(this).text($.trim($(this).data("code")))

        if ($(this).data("code") === "headings") {
            $(this).text(headings)
        }

        if ($(this).data("code") === "buttons") {
            $(this).text(buttons)
        }

        if ($(this).data("code") === "positioned") {
            $(this).text(positioned)
        }

        if ($(this).data("code") === "background") {
            $(this).text(background)
        }

        if ($(this).data("code") === "pill-badges") {
            $(this).text(pillBadges)
        }
    }
});

const basicNotification = `
<div class="toast fade show" role="alert" aria-live="assertive" aria-atomic="true" data-bs-autohide="false">
    <div class="toast-header">
        <img class="me-8" src="..." alt="...">
        <strong class="me-auto">Yoda</strong>
        <small>11 mins ago</small>
        <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
    </div>

    <div class="toast-body">
        Hello, world! This is a toast message.
    </div>
</div>

`;

const live = `
<button type="button" class="btn btn-primary toast-btn" data-id="liveToast" id="liveToastBtn">Show live toast</button>

<div class="position-fixed bottom-0 end-0 p-16" style="z-index: 99">
    <div data-id="liveToast" class="toast" role="alert" aria-live="assertive" aria-atomic="true">
        <div class="toast-header">
            <img class="me-8" src="..." alt="...">
            <strong class="me-auto">Yoda</strong>
            <small>11 mins ago</small>
            <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
        </div>

        <div class="toast-body">
            Hello, world! This is a toast message.
        </div>
    </div>
</div>

`;

const translucent = `
<div class="hp-bg-black-100 hp-bg-dark-0 rounded p-32">
    <div class="toast fade show" role="alert" aria-live="assertive" aria-atomic="true">
        <div class="toast-header">
            <img class="me-8" src="..." alt="...">
            <strong class="me-auto">Yoda</strong>
            <small class="text-muted">11 mins ago</small>
            <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
        </div>

        <div class="toast-body">
            Hello, world! This is a toast message.
        </div>
    </div>
</div>

`;

const stacking = `
<button type="button" class="btn btn-primary toast-btn" data-id="stacking-1">Toast 1</button>

<button type="button" class="btn btn-primary toast-btn" data-id="stacking-2">Toast 2</button>

<div class="position-fixed top-0 end-0 p-16" style="z-index: 99">
    <div class="toast-container">
        <div data-id="stacking-1" class="toast fade hide" role="alert" aria-live="assertive" aria-atomic="true">
            <div class="toast-header">
                <img class="me-8" src="..." alt="...">
                <strong class="me-auto">Yoda</strong>
                <small class="text-muted">just now</small>
                <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
            </div>

            <div class="toast-body">
                See? Just like this.
            </div>
        </div>

        <div data-id="stacking-2" class="toast fade hide" role="alert" aria-live="assertive" aria-atomic="true">
            <div class="toast-header">
                <img class="me-8" src="..." alt="...">
                <strong class="me-auto">Yoda</strong>
                <small class="text-muted">2 seconds ago</small>
                <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
            </div>

            <div class="toast-body">
                Heads up, toasts will stack automatically
            </div>
        </div>
    </div>
</div>

`;

//--

$("pre code").each(function () {
  if ($(this).data("component") === "notification") {
    $(this).text($.trim($(this).data("code")))

    if ($(this).data("code") === "basic") {
      $(this).text(basicNotification)
    }

    if ($(this).data("code") === "live") {
      $(this).text(live)
    }

    if ($(this).data("code") === "translucent") {
      $(this).text(translucent)
    }

    if ($(this).data("code") === "stacking") {
      $(this).text(stacking)
    }
  }
});

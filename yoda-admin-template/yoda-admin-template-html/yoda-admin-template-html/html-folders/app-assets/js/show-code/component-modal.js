const demoModal = `
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
    Launch demo modal
</button>

<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>

            <div class="modal-body">
                ...
            </div>

            <div class="modal-footer">
                <button type="button" class="btn btn-text" data-bs-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary">Save changes</button>
            </div>
        </div>
    </div>
</div>

`;

const staticModal = `
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
    Launch static backdrop modal
</button>

<div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="staticBackdropLabel">Modal title</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>

            <div class="modal-body">
                ...
            </div>

            <div class="modal-footer">
                <button type="button" class="btn btn-text" data-bs-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary">Understood</button>
            </div>
        </div>
    </div>
</div>

`;

const scrolling = `
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#scrollableBackdrop">
    Launch demo modal
</button>

<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#scrollable2Backdrop">
    Launch demo modal
</button>

<div class="modal fade" id="scrollableBackdrop" tabindex="-1" aria-labelledby="scrollableBackdropLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="scrollableBackdropLabel">Modal title</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>

            <div class="modal-body">
                <p>This is some placeholder content to show the scrolling behavior for modals. We use repeated line breaks to demonstrate how content can exceed minimum inner height, thereby showing inner scrolling. When content becomes longer than the prefedined max-height of modal, content will be cropped and scrollable within the modal.</p>
                <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
                <p>This content should appear at the bottom after you scroll.</p>
            </div>

            <div class="modal-footer">
                <button type="button" class="btn btn-text" data-bs-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary">Understood</button>
            </div>
        </div>
    </div>
</div>

<div class="modal fade" id="scrollable2Backdrop" tabindex="-1" aria-labelledby="scrollable2BackdropLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-scrollable">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="scrollable2BackdropLabel">Modal title</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>

            <div class="modal-body">
                <p>This is some placeholder content to show the scrolling behavior for modals. We use repeated line breaks to demonstrate how content can exceed minimum inner height, thereby showing inner scrolling. When content becomes longer than the prefedined max-height of modal, content will be cropped and scrollable within the modal.</p>
                <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
                <p>This content should appear at the bottom after you scroll.</p>
            </div>

            <div class="modal-footer">
                <button type="button" class="btn btn-text" data-bs-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary">Understood</button>
            </div>
        </div>
    </div>
</div>

`;

const vertically = `
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#centeredBackdrop">
    Vertical centered modal
</button>

<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#centered2Backdrop">
    Vertical centered scrollable modal
</button>

<div class="modal fade" id="centeredBackdrop" tabindex="-1" aria-labelledby="centeredBackdropLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="centeredBackdropLabel">Modal title</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>

            <div class="modal-body">
                <p>This is a vertically centered modal.</p>
            </div>

            <div class="modal-footer">
                <button type="button" class="btn btn-text" data-bs-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary">Understood</button>
            </div>
        </div>
    </div>
</div>

<div class="modal fade" id="centered2Backdrop" tabindex="-1" aria-labelledby="centered2BackdropLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="centered2BackdropLabel">Modal title</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>

            <div class="modal-body">
                <p>This is some placeholder content to show the scrolling behavior for modals. We use repeated line breaks to demonstrate how content can exceed minimum inner height, thereby showing inner scrolling. When content becomes longer than the prefedined max-height of modal, content will be cropped and scrollable within the modal.</p>
                <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
                <p>This content should appear at the bottom after you scroll.</p>
            </div>

            <div class="modal-footer">
                <button type="button" class="btn btn-text" data-bs-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary">Understood</button>
            </div>
        </div>
    </div>
</div>

`;

const tooltipPopovers = `
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#tooltipPopoverBackdrop">
    Launch demo modal
</button>

<div class="modal fade" id="tooltipPopoverBackdrop" tabindex="-1" aria-labelledby="tooltipPopoverBackdropLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="tooltipPopoverBackdropLabel">Modal title</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>

            <div class="modal-body">
                <h5>Popover in a modal</h5>
                <p>This <a href="javascript:;" role="button" class="btn btn-primary popover-test" data-bs-toggle="popover" title="Popover title" data-bs-content="Popover body content is set in this attribute.">button</a> triggers a popover on click.</p>
                <div class="divider"></div>
                <h5>Tooltips in a modal</h5>
                <p>
                    <a href="javascript:;" class="tooltip-test" data-bs-toggle="tooltip" data-bs-placement="top" title="Tooltip">This link</a> and <a href="javascript:;" class="tooltip-test" data-bs-toggle="tooltip" data-bs-placement="top" title="Tooltip">that link</a> have tooltips on hover.
                </p>
            </div>

            <div class="modal-footer">
                <button type="button" class="btn btn-text" data-bs-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary">Understood</button>
            </div>
        </div>
    </div>
</div>

`;

const grid = `
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#gridBackdrop">
    Launch demo modal
</button>

<div class="modal fade" id="gridBackdrop" tabindex="-1" aria-labelledby="gridBackdropLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="gridBackdropLabel">Modal title</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>

            <div class="modal-body">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-md-4">.col-md-4</div>
                        <div class="col-md-4 ms-auto">.col-md-4 .ms-auto</div>
                    </div>

                    <div class="row">
                        <div class="col-md-3 ms-auto">.col-md-3 .ms-auto</div>
                        <div class="col-md-2 ms-auto">.col-md-2 .ms-auto</div>
                    </div>

                    <div class="row">
                        <div class="col-md-6 ms-auto">.col-md-6 .ms-auto</div>
                    </div>

                    <div class="row">
                        <div class="col-sm-9">
                            Level 1: .col-sm-9

                            <div class="row">
                                <div class="col-8 col-sm-6">
                                    Level 2: .col-8 .col-sm-6
                                </div>
                                <div class="col-4 col-sm-6">
                                    Level 2: .col-4 .col-sm-6
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="modal-footer">
                <button type="button" class="btn btn-text" data-bs-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary">Understood</button>
            </div>
        </div>
    </div>
</div>

`;

const varying = `
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#varyingModal" data-bs-whatever="@mdo">Open modal for @mdo</button>

<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#varyingModal" data-bs-whatever="@fat">Open modal for @fat</button>

<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#varyingModal" data-bs-whatever="@getbootstrap">Open modal for @getbootstrap</button>

<div class="modal fade" id="varyingModal" tabindex="-1" aria-labelledby="varyingModalLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="varyingModalLabel">New message</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <form>
                    <div class="mb-3">
                        <label for="recipient-name" class="col-form-label">Recipient:</label>
                        <input type="text" class="form-control" id="recipient-name">
                    </div>
                    <div class="mb-3">
                        <label for="message-text" class="col-form-label">Message:</label>
                        <textarea class="form-control" id="message-text"></textarea>
                    </div>
                </form>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-text" data-bs-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary">Send message</button>
            </div>
        </div>
    </div>
</div>

var varyingModal = document.getElementById('varyingModal')
if (varyingModal) {
    varyingModal.addEventListener('show.bs.modal', function (event) {
        // Button that triggered the modal
        var button = event.relatedTarget
        // Extract info from data-bs-* attributes
        var recipient = button.getAttribute('data-bs-whatever')
        // If necessary, you could initiate an AJAX request here
        // and then do the updating in a callback.
        //
        // Update the modal's content.
        var modalTitle = varyingModal.querySelector('.modal-title')
        var modalBodyInput = varyingModal.querySelector('.modal-body input')

        modalTitle.textContent = 'New message to ' + recipient
        modalBodyInput.value = recipient
    })
}

`;

const between = `
<a class="btn btn-primary" data-bs-toggle="modal" href="#exampleModalToggle" role="button">Open first modal</a>

<div class="modal fade" id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabindex="-1">
    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalToggleLabel">Modal 1</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                Show a second modal and hide this one with the button below.
            </div>
            <div class="modal-footer">
                <button class="btn btn-primary" data-bs-target="#exampleModalToggle2" data-bs-toggle="modal" data-bs-dismiss="modal">Open second modal</button>
            </div>
        </div>
    </div>
</div>

<div class="modal fade" id="exampleModalToggle2" aria-hidden="true" aria-labelledby="exampleModalToggleLabel2" tabindex="-1">
    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalToggleLabel2">Modal 2</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                Hide this modal and show the first with the button below.
            </div>
            <div class="modal-footer">
                <button class="btn btn-primary" data-bs-target="#exampleModalToggle" data-bs-toggle="modal" data-bs-dismiss="modal">Back to first</button>
            </div>
        </div>
    </div>
</div>

`;

const remove = `
<div class="modal" tabindex="-1" aria-labelledby="..." aria-hidden="true">
    ...
</div>

`;

const sizes = `
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#xlModal">
    Extra large modal
</button>

<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#lgModal">
    Large modal
</button>

<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#smModal">
    Small modal
</button>

<div class="modal fade" id="xlModal" tabindex="-1" aria-labelledby="xlModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-xl">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="xlModalLabel">Modal title</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>

            <div class="modal-body">
                ...
            </div>

            <div class="modal-footer">
                <button type="button" class="btn btn-text" data-bs-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary">Save changes</button>
            </div>
        </div>
    </div>
</div>

<div class="modal fade" id="lgModal" tabindex="-1" aria-labelledby="lgModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="lgModalLabel">Modal title</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>

            <div class="modal-body">
                ...
            </div>

            <div class="modal-footer">
                <button type="button" class="btn btn-text" data-bs-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary">Save changes</button>
            </div>
        </div>
    </div>
</div>

<div class="modal fade" id="smModal" tabindex="-1" aria-labelledby="smModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-sm">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="smModalLabel">Modal title</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>

            <div class="modal-body">
                ...
            </div>

            <div class="modal-footer">
                <button type="button" class="btn btn-text" data-bs-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary">Save changes</button>
            </div>
        </div>
    </div>
</div>

`;

const fullscreen = `
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#fullModal">
    Full screen
</button>

<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#smFullModal">
    Full screen below sm
</button>

<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#mdFullModal">
    Full screen below md
</button>

<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#lgFullModal">
    Full screen below lg
</button>

<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#xlFullModal">
    Full screen below xl
</button>

<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#xxlFullModal">
    Full screen below xxl
</button>

<div class="modal fade" id="fullModal" tabindex="-1" aria-labelledby="fullModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-fullscreen">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="fullModalLabel">Modal title</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>

            <div class="modal-body">
                ...
            </div>

            <div class="modal-footer">
                <button type="button" class="btn btn-text" data-bs-dismiss="modal">Close</button>
            </div>
        </div>
    </div>
</div>

<div class="modal fade" id="smFullModal" tabindex="-1" aria-labelledby="smFullModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-fullscreen-sm-down">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="smFullModalLabel">Modal title</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>

            <div class="modal-body">
                ...
            </div>

            <div class="modal-footer">
                <button type="button" class="btn btn-text" data-bs-dismiss="modal">Close</button>
            </div>
        </div>
    </div>
</div>

<div class="modal fade" id="mdFullModal" tabindex="-1" aria-labelledby="mdFullModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-fullscreen-md-down">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="mdFullModalLabel">Modal title</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>

            <div class="modal-body">
                ...
            </div>

            <div class="modal-footer">
                <button type="button" class="btn btn-text" data-bs-dismiss="modal">Close</button>
            </div>
        </div>
    </div>
</div>

<div class="modal fade" id="lgFullModal" tabindex="-1" aria-labelledby="lgFullModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-fullscreen-lg-down">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="lgFullModalLabel">Modal title</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>

            <div class="modal-body">
                ...
            </div>

            <div class="modal-footer">
                <button type="button" class="btn btn-text" data-bs-dismiss="modal">Close</button>
            </div>
        </div>
    </div>
</div>

<div class="modal fade" id="xlFullModal" tabindex="-1" aria-labelledby="xlFullModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-fullscreen-xl-down">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="xlFullModalLabel">Modal title</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>

            <div class="modal-body">
                ...
            </div>

            <div class="modal-footer">
                <button type="button" class="btn btn-text" data-bs-dismiss="modal">Close</button>
            </div>
        </div>
    </div>
</div>

<div class="modal fade" id="xxlFullModal" tabindex="-1" aria-labelledby="xxlFullModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-fullscreen-xxl-down">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="xxlFullModalLabel">Modal title</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>

            <div class="modal-body">
                ...
            </div>

            <div class="modal-footer">
                <button type="button" class="btn btn-text" data-bs-dismiss="modal">Close</button>
            </div>
        </div>
    </div>
</div>

`;

//--

$("pre code").each(function () {
  if ($(this).data("component") === "modal") {
    $(this).text($.trim($(this).data("code")))

    if ($(this).data("code") === "demo") {
      $(this).text(demoModal)
    }

    if ($(this).data("code") === "static") {
      $(this).text(staticModal)
    }

    if ($(this).data("code") === "scrolling") {
      $(this).text(scrolling)
    }

    if ($(this).data("code") === "vertically") {
      $(this).text(vertically)
    }

    if ($(this).data("code") === "tooltip-popovers") {
      $(this).text(tooltipPopovers)
    }

    if ($(this).data("code") === "grid") {
      $(this).text(grid)
    }

    if ($(this).data("code") === "varying") {
      $(this).text(varying)
    }

    if ($(this).data("code") === "between") {
      $(this).text(between)
    }

    if ($(this).data("code") === "remove") {
      $(this).text(remove)
    }

    if ($(this).data("code") === "sizes") {
      $(this).text(sizes)
    }

    if ($(this).data("code") === "fullscreen") {
      $(this).text(fullscreen)
    }
  }
});

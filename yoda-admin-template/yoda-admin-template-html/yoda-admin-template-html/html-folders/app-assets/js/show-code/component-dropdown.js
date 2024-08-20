const singleButton = `
<div class="dropdown">
  <button class="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
    Dropdown button
  </button>

  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
    <li><a class="dropdown-item active" aria-current="true" href="javascript:;">Action</a></li>
    <li><a class="dropdown-item disabled" href="javascript:;" tabindex="-1" aria-disabled="true">Another action</a></li>
    <li><a class="dropdown-item" href="javascript:;">Something else here</a></li>
  </ul>
</div>

<div class="dropdown">
  <a class="btn btn-primary dropdown-toggle" href="javascript:;" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
    Dropdown link
  </a>

  <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
    <li><a class="dropdown-item" href="javascript:;">Action</a></li>
    <li><a class="dropdown-item" href="javascript:;">Another action</a></li>
    <li><a class="dropdown-item" href="javascript:;">Something else here</a></li>
  </ul>
</div>

<div>
  <button type="button" class="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
    Action
  </button>

  <button type="button" class="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
    Action
  </button>
  
  <button type="button" class="btn btn-success dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
    Action
  </button>
  
  <button type="button" class="btn btn-info dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
    Action
  </button>

  <button type="button" class="btn btn-warning dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
    Action
  </button>
  
  <button type="button" class="btn btn-danger dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
    Action
  </button>

  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="javascript:;">Action</a></li>
    <li><a class="dropdown-item" href="javascript:;">Another action</a></li>
    <li><a class="dropdown-item" href="javascript:;">Something else here</a></li>
    <li><hr class="dropdown-divider"></li>
    <li><a class="dropdown-item" href="javascript:;">Separated link</a></li>
  </ul>
</div>

`;

const splitButton = `
<div class="btn-group">
  <button type="button" class="btn btn-danger">Action</button>
  <button type="button" class="btn btn-danger dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
    <span class="visually-hidden">Toggle Dropdown</span>
  </button>
  
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="javascript:;">Action</a></li>
    <li><a class="dropdown-item" href="javascript:;">Another action</a></li>
    <li><a class="dropdown-item" href="javascript:;">Something else here</a></li>
    <li><hr class="dropdown-divider"></li>
    <li><a class="dropdown-item" href="javascript:;">Separated link</a></li>
  </ul>
</div>

`;

const sizing = `
<div class="btn-group">
  <button class="btn btn-primary btn-lg dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Large button
  </button>

  <ul class="dropdown-menu">
    ...
  </ul>
</div>

<div class="btn-group">
  <button class="btn btn-primary btn-lg" type="button">
    Large split button
  </button>
  <button type="button" class="btn btn-lg btn-primary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
    <span class="visually-hidden">Toggle Dropdown</span>
  </button>

  <ul class="dropdown-menu">
    ...
  </ul>
</div>

<div class="btn-group">
  <button class="btn btn-primary btn-sm dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Small button
  </button>

  <ul class="dropdown-menu">
    ...
  </ul>
</div>

<div class="btn-group">
  <button class="btn btn-primary btn-sm" type="button">
    Small split button
  </button>
  <button type="button" class="btn btn-sm btn-primary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
    <span class="visually-hidden">Toggle Dropdown</span>
  </button>

  <ul class="dropdown-menu">
    ...
  </ul>
</div>

`;

const dropup = `
<div class="btn-group dropup">
  <button type="button" class="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
    Dropup
  </button>

  <ul class="dropdown-menu">
    <li>...</li>
  </ul>
</div>

<div class="btn-group dropup">
  <button type="button" class="btn btn-primary">
    Split dropup
  </button>

  <button type="button" class="btn btn-primary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
    <span class="visually-hidden">Toggle Dropdown</span>
  </button>

  <ul class="dropdown-menu">
    <li>...</li>
  </ul>
</div>

`;

const dropright = `
<div class="btn-group dropend">
  <button type="button" class="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
    Dropright
  </button>

  <ul class="dropdown-menu">
    <li>...</li>
  </ul>
</div>

<div class="btn-group dropend">
  <button type="button" class="btn btn-primary">
    Split dropend
  </button>
  <button type="button" class="btn btn-primary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
    <span class="visually-hidden">Toggle Dropright</span>
  </button>

  <ul class="dropdown-menu">
    <li>...</li>
  </ul>
</div>

`;

const dropleft = `
<div class="btn-group dropstart">
  <button type="button" class="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
    Dropleft
  </button>

  <ul class="dropdown-menu">
    <li>...</li>
  </ul>
</div>

<div class="btn-group dropstart">
  <button type="button" class="btn btn-primary">
    Split dropstart
  </button>
  <button type="button" class="btn btn-primary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
    <span class="visually-hidden">Toggle Dropleft</span>
  </button>

  <ul class="dropdown-menu">
    <li>...</li>
  </ul>
</div>

`;

const responsiveDropdown = `
<div class="btn-group">
  <button type="button" class="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" data-bs-display="static" aria-expanded="false">
    Left-aligned but right aligned when large screen
  </button>
  <ul class="dropdown-menu dropdown-menu-lg-end">
    <li><button class="dropdown-item" type="button">Action</button></li>
    <li><button class="dropdown-item" type="button">Another action</button></li>
    <li><button class="dropdown-item" type="button">Something else here</button></li>
  </ul>
</div>

<div class="btn-group">
  <button type="button" class="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" data-bs-display="static" aria-expanded="false">
    Right-aligned but left aligned when large screen
  </button>

  <ul class="dropdown-menu dropdown-menu-end dropdown-menu-lg-start">
    <li><button class="dropdown-item" type="button">Action</button></li>
    <li><button class="dropdown-item" type="button">Another action</button></li>
    <li><button class="dropdown-item" type="button">Something else here</button></li>
  </ul>
</div>

`;

const alignment = `
<div class="btn-group">
  <button type="button" class="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
    Right-aligned menu
  </button>
  <ul class="dropdown-menu dropdown-menu-end">
    <li><a class="dropdown-item" href="javascript:;">Menu item</a></li>
    <li><a class="dropdown-item" href="javascript:;">Menu item</a></li>
    <li><a class="dropdown-item" href="javascript:;">Menu item</a></li>
  </ul>
</div>

<div class="btn-group">
  <button type="button" class="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" data-bs-display="static" aria-expanded="false">
    Left-aligned, right-aligned lg
  </button>
  <ul class="dropdown-menu dropdown-menu-lg-end">
    <li><a class="dropdown-item" href="javascript:;">Menu item</a></li>
    <li><a class="dropdown-item" href="javascript:;">Menu item</a></li>
    <li><a class="dropdown-item" href="javascript:;">Menu item</a></li>
  </ul>
</div>

<div class="btn-group">
  <button type="button" class="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" data-bs-display="static" aria-expanded="false">
    Right-aligned, left-aligned lg
  </button>
  <ul class="dropdown-menu dropdown-menu-end dropdown-menu-lg-start">
    <li><a class="dropdown-item" href="javascript:;">Menu item</a></li>
    <li><a class="dropdown-item" href="javascript:;">Menu item</a></li>
    <li><a class="dropdown-item" href="javascript:;">Menu item</a></li>
  </ul>
</div>

<div class="btn-group dropstart">
  <button type="button" class="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
    Dropstart
  </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="javascript:;">Menu item</a></li>
    <li><a class="dropdown-item" href="javascript:;">Menu item</a></li>
    <li><a class="dropdown-item" href="javascript:;">Menu item</a></li>
  </ul>
</div>

<div class="btn-group dropend">
  <button type="button" class="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
    Dropend
  </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="javascript:;">Menu item</a></li>
    <li><a class="dropdown-item" href="javascript:;">Menu item</a></li>
    <li><a class="dropdown-item" href="javascript:;">Menu item</a></li>
  </ul>
</div>

<div class="btn-group dropup">
  <button type="button" class="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
    Dropup
  </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="javascript:;">Menu item</a></li>
    <li><a class="dropdown-item" href="javascript:;">Menu item</a></li>
    <li><a class="dropdown-item" href="javascript:;">Menu item</a></li>
  </ul>
</div>

`;

const dropdownOptions = `
<div class="dropdown">
  <button type="button" class="btn btn-primary dropdown-toggle" id="dropdownMenuOffset" data-bs-toggle="dropdown" aria-expanded="false" data-bs-offset="10,20">
    Offset
  </button>

  <ul class="dropdown-menu" aria-labelledby="dropdownMenuOffset">
    <li><a class="dropdown-item" href="javascript:;">Action</a></li>
    <li><a class="dropdown-item" href="javascript:;">Another action</a></li>
    <li><a class="dropdown-item" href="javascript:;">Something else here</a></li>
  </ul>
</div>

<div class="btn-group">
  <button type="button" class="btn btn-primary">Reference</button>
  <button type="button" class="btn btn-primary dropdown-toggle dropdown-toggle-split" id="dropdownMenuReference" data-bs-toggle="dropdown" aria-expanded="false" data-bs-reference="parent">
    <span class="visually-hidden">Toggle Dropdown</span>
  </button>

  <ul class="dropdown-menu" aria-labelledby="dropdownMenuReference">
    <li><a class="dropdown-item" href="javascript:;">Action</a></li>
    <li><a class="dropdown-item" href="javascript:;">Another action</a></li>
    <li><a class="dropdown-item" href="javascript:;">Something else here</a></li>
    <li><hr class="dropdown-divider"></li>
    <li><a class="dropdown-item" href="javascript:;">Separated link</a></li>
  </ul>
</div>

`;

const autoClose = `
<div class="btn-group">
  <button class="btn btn-primary dropdown-toggle" type="button" id="defaultDropdown" data-bs-toggle="dropdown" data-bs-auto-close="true" aria-expanded="false">
    Default dropdown
  </button>
  <ul class="dropdown-menu" aria-labelledby="defaultDropdown">
    <li><a class="dropdown-item" href="javascript:;">Menu item</a></li>
    <li><a class="dropdown-item" href="javascript:;">Menu item</a></li>
    <li><a class="dropdown-item" href="javascript:;">Menu item</a></li>
  </ul>
</div>

<div class="btn-group">
  <button class="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuClickableOutside" data-bs-toggle="dropdown" data-bs-auto-close="inside" aria-expanded="false">
    Clickable outside
  </button>
  <ul class="dropdown-menu" aria-labelledby="dropdownMenuClickableOutside">
    <li><a class="dropdown-item" href="javascript:;">Menu item</a></li>
    <li><a class="dropdown-item" href="javascript:;">Menu item</a></li>
    <li><a class="dropdown-item" href="javascript:;">Menu item</a></li>
  </ul>
</div>

<div class="btn-group">
  <button class="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuClickableInside" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false">
    Clickable inside
  </button>
  <ul class="dropdown-menu" aria-labelledby="dropdownMenuClickableInside">
    <li><a class="dropdown-item" href="javascript:;">Menu item</a></li>
    <li><a class="dropdown-item" href="javascript:;">Menu item</a></li>
    <li><a class="dropdown-item" href="javascript:;">Menu item</a></li>
  </ul>
</div>

<div class="btn-group">
  <button class="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuClickable" data-bs-toggle="dropdown" data-bs-auto-close="false" aria-expanded="false">
    Manual close
  </button>
  <ul class="dropdown-menu" aria-labelledby="dropdownMenuClickable">
    <li><a class="dropdown-item" href="javascript:;">Menu item</a></li>
    <li><a class="dropdown-item" href="javascript:;">Menu item</a></li>
    <li><a class="dropdown-item" href="javascript:;">Menu item</a></li>
  </ul>
</div>

`;

//--

$("pre code").each(function () {
  if ($(this).data("component") === "dropdown") {
    $(this).text($.trim($(this).data("code")))

    if ($(this).data("code") === "single-button") {
      $(this).text(singleButton)
    }

    if ($(this).data("code") === "split-button") {
      $(this).text(splitButton)
    }

    if ($(this).data("code") === "sizing") {
      $(this).text(sizing)
    }

    if ($(this).data("code") === "dropup") {
      $(this).text(dropup)
    }
    
    if ($(this).data("code") === "dropright") {
      $(this).text(dropright)
    }
    
    if ($(this).data("code") === "dropleft") {
      $(this).text(dropleft)
    }
    
    if ($(this).data("code") === "responsive") {
      $(this).text(responsiveDropdown)
    }
    
    if ($(this).data("code") === "alignment") {
      $(this).text(alignment)
    }
    
    if ($(this).data("code") === "dropdown-options") {
      $(this).text(dropdownOptions)
    }
    
    if ($(this).data("code") === "auto-close") {
      $(this).text(autoClose)
    }
  }
});

const supportedContent = `
<nav class="navbar navbar-expand-lg navbar-light hp-bg-black-10 rounded">
  <div class="container-fluid">
    <a class="navbar-brand me-8" href="javascript:;">
      <img src="..." alt="...">
    </a>

    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mb-16 mb-lg-0 me-auto">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="javascript:;">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="javascript:;">Link</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="javascript:;" id="navbarDropdown" role="button"
            data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>

          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li>
              <a class="dropdown-item" href="javascript:;">Action</a>
            </li>
            <li>
              <a class="dropdown-item" href="javascript:;">Another action</a>
            </li>
            <li>
              <hr class="dropdown-divider">
            </li>
            <li>
              <a class="dropdown-item" href="javascript:;">Something else here</a>
            </li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" href="javascript:;" tabindex="-1" aria-disabled="true">Disabled</a>
        </li>
      </ul>

      <form class="d-flex mb-8 mb-lg-0">
        <input class="form-control me-8" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-primary" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>

`;

const textMenu = `
<nav class="navbar navbar-light hp-bg-black-10 rounded">
  <div class="container-fluid">
    <a class="navbar-brand" href="javascript:;">Yoda</a>
  </div>
</nav>

<nav class="navbar navbar-light hp-bg-black-10 rounded">
  <div class="container-fluid">
    <span class="navbar-brand mb-0 h1">Yoda</span>
  </div>
</nav>

`;

const imageMenu = `
<nav class="navbar navbar-light hp-bg-black-10 rounded">
  <div class="container">
    <a class="navbar-brand" href="javascript:;">
      <img src="..." alt="...">
    </a>
  </div>
</nav>

`;

const navMenu = `
<nav class="navbar navbar-expand-lg navbar-light hp-bg-black-10 rounded">
  <div class="container-fluid">
    <a class="navbar-brand me-8" href="javascript:;">
      <img src="..." alt="...">
    </a>

    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
      aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="javascript:;">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="javascript:;">Features</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="javascript:;">Pricing</a>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" href="javascript:;" tabindex="-1" aria-disabled="true">Disabled</a>
        </li>
      </ul>
    </div>
  </div>
</nav>

<nav class="navbar navbar-expand-lg navbar-light hp-bg-black-10 rounded">
  <div class="container-fluid">
    <a class="navbar-brand me-8" href="javascript:;">
      <img src="..." alt="...">
    </a>

    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown"
      aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="javascript:;">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="javascript:;">Features</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="javascript:;">Pricing</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="javascript:;" id="navbarDropdownMenuLink" role="button"
            data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown link
          </a>

          <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <li>
              <a class="dropdown-item" href="javascript:;">Action</a>
            </li>
            <li>
              <a class="dropdown-item" href="javascript:;">Another action</a>
            </li>
            <li>
              <a class="dropdown-item" href="javascript:;">Something else here</a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>

`;

const colorSchemeMenu = `
<nav class="navbar navbar-expand-lg navbar-dark bg-dark rounded">
  <div class="container-fluid">
    <a class="navbar-brand me-8" href="javascript:;">
      <img src="..." alt="...">
    </a>

    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColorScheme1"
      aria-controls="navbarColorScheme1" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarColorScheme1">
      <ul class="navbar-nav me-auto mb-16 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="javascript:;">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="javascript:;">Link</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="javascript:;" id="navbarDropdown" role="button"
            data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>

          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li>
              <a class="dropdown-item" href="javascript:;">Action</a>
            </li>
            <li>
              <a class="dropdown-item" href="javascript:;">Another action</a>
            </li>
            <li>
              <hr class="dropdown-divider">
            </li>
            <li>
              <a class="dropdown-item" href="javascript:;">Something else here</a>
            </li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" href="javascript:;" tabindex="-1" aria-disabled="true">Disabled</a>
        </li>
      </ul>

      <form class="d-flex">
        <input class="form-control me-8" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-primary-3" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>

<nav class="navbar navbar-expand-lg navbar-dark hp-bg-primary-3 rounded">
  <div class="container-fluid">
    <a class="navbar-brand me-8" href="javascript:;">
      <img src="..." alt="...">
    </a>

    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColorScheme2"
      aria-controls="navbarColorScheme2" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarColorScheme2">
      <ul class="navbar-nav me-auto mb-16 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="javascript:;">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="javascript:;">Link</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="javascript:;" id="navbarDropdown" role="button"
            data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>

          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li>
              <a class="dropdown-item" href="javascript:;">Action</a>
            </li>
            <li>
              <a class="dropdown-item" href="javascript:;">Another action</a>
            </li>
            <li>
              <hr class="dropdown-divider">
            </li>
            <li>
              <a class="dropdown-item" href="javascript:;">Something else here</a>
            </li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" href="javascript:;" tabindex="-1" aria-disabled="true">Disabled</a>
        </li>
      </ul>

      <form class="d-flex">
        <input class="form-control me-8" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-primary" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>

`;

const scrollingMenu = `
<nav class="navbar navbar-expand-lg navbar-light bg-light rounded">
  <div class="container-fluid">
    <a class="navbar-brand me-8" href="javascript:;">
      <img src="..." alt="...">
    </a>

    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll"
      aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarScroll">
      <ul class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" style="--bs-scroll-height: 100px;">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="javascript:;">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="javascript:;">Link</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="javascript:;" id="navbarScrollingDropdown" role="button"
            data-bs-toggle="dropdown" aria-expanded="false">
            Link
          </a>

          <ul class="dropdown-menu" aria-labelledby="navbarScrollingDropdown">
            <li>
              <a class="dropdown-item" href="javascript:;">Action</a>
            </li>
            <li>
              <a class="dropdown-item" href="javascript:;">Another action</a>
            </li>
            <li>
              <hr class="dropdown-divider">
            </li>
            <li>
              <a class="dropdown-item" href="javascript:;">Something else here</a>
            </li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" href="javascript:;" tabindex="-1" aria-disabled="true">Link</a>
        </li>
      </ul>

      <form class="d-flex mt-24 mt-lg-0">
        <input class="form-control me-8" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-primary" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>

`;

const toggler = `
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01"
      aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse mt-8 mt-lg-0" id="navbarTogglerDemo01">
      <a class="navbar-brand me-8" href="javascript:;">
        <img src="..." alt="...">
      </a>

      <ul class="navbar-nav me-auto mb-16 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="javascript:;">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="javascript:;">Link</a>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" href="javascript:;" tabindex="-1" aria-disabled="true">Disabled</a>
        </li>
      </ul>

      <form class="d-flex">
        <input class="form-control me-8" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-primary" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>

<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand me-8" href="javascript:;">
      <img src="..." alt="...">
    </a>

    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02"
      aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
      <ul class="navbar-nav me-auto mb-16 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="javascript:;">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="javascript:;">Link</a>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" href="javascript:;" tabindex="-1" aria-disabled="true">Disabled</a>
        </li>
      </ul>

      <form class="d-flex">
        <input class="form-control me-8" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-primary" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>

<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03"
      aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <a class="navbar-brand me-8" href="javascript:;">
      <img src="..." alt="...">
    </a>

    <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
      <ul class="navbar-nav me-auto mb-16 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="javascript:;">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="javascript:;">Link</a>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" href="javascript:;" tabindex="-1" aria-disabled="true">Disabled</a>
        </li>
      </ul>

      <form class="d-flex">
        <input class="form-control me-8" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-primary" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>

`;

const externalContent = `
<nav class="navbar navbar-dark bg-dark rounded">
  <div class="collapse" id="navbarToggleExternalContent">
    <div class="bg-dark pt-16 px-24 pb-32">
      <h5 class="text-white h4">Collapsed content</h5>
      <span class="text-muted hp-p1-body">Toggleable via the navbar brand.</span>
    </div>
  </div>

  <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent"
      aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
  </div>
</nav>

`;

//--

$("pre code").each(function () {
    if ($(this).data("component") === "menu") {
        $(this).text($.trim($(this).data("code")))

        if ($(this).data("code") === "supported-content") {
            $(this).text(supportedContent)
        }

        if ($(this).data("code") === "text-menu") {
            $(this).text(textMenu)
        }

        if ($(this).data("code") === "image-menu") {
            $(this).text(imageMenu)
        }

        if ($(this).data("code") === "nav-menu") {
            $(this).text(navMenu)
        }

        if ($(this).data("code") === "color-scheme-menu") {
            $(this).text(colorSchemeMenu)
        }

        if ($(this).data("code") === "scrolling-menu") {
            $(this).text(scrollingMenu)
        }

        if ($(this).data("code") === "toggler") {
            $(this).text(toggler)
        }

        if ($(this).data("code") === "external-content") {
            $(this).text(externalContent)
        }
    }
});

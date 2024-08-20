const exampleCard = `
<div class="card" style="max-width: 18rem;">
    <img src="..." class="card-img-top" alt="...">

    <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text hp-p1-body">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
</div>

`;

const bodyCard = `
<div class="card">
    <div class="card-body">
        This is some text within a card body.
    </div>
</div>

`;

const titlesTextLinks = `
<div class="card" style="max-width: 18rem;">
    <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <h6 class="card-subtitle mb-16 text-muted">Card subtitle</h6>
        <p class="card-text hp-p1-body">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" class="card-link">Card link</a>
        <a href="#" class="card-link">Another link</a>
    </div>
</div>

`;

const imagesCard = `
<div class="card" style="max-width: 18rem;">
  <img src="..." class="card-img-top" alt="...">

  <div class="card-body">
      <p class="card-text hp-p1-body">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>

`;

const listGroups = `
<div class="card" style="max-width: 18rem;">
    <ul class="list-group list-group-flush">
        <li class="list-group-item">An item</li>
        <li class="list-group-item">A second item</li>
        <li class="list-group-item">A third item</li>
    </ul>
</div>

<div class="card" style="width: 18rem;">
    <div class="card-header">
        Featured
    </div>
    <ul class="list-group list-group-flush">
        <li class="list-group-item">An item</li>
        <li class="list-group-item">A second item</li>
        <li class="list-group-item">A third item</li>
    </ul>
</div>

<div class="card" style="width: 18rem;">
    <ul class="list-group list-group-flush">
        <li class="list-group-item">An item</li>
        <li class="list-group-item">A second item</li>
        <li class="list-group-item">A third item</li>
    </ul>
    <div class="card-footer">
        Card footer
    </div>
</div>

`;

const kitchenSink = `
<div class="card" style="max-width: 18rem;">
  <img src="..." class="card-img-top" alt="...">

  <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text hp-p1-body">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>

  <ul class="list-group list-group-flush">
      <li class="list-group-item">An item</li>
      <li class="list-group-item">A second item</li>
      <li class="list-group-item">A third item</li>
  </ul>

  <div class="card-body">
      <a href="#" class="card-link">Card link</a>
      <a href="#" class="card-link">Another link</a>
  </div>
</div>

`;

const headerAndFooter = `
<div class="card">
    <div class="card-header">
        Featured
    </div>

    <div class="card-body">
        <h5 class="card-title">Special title treatment</h5>
        <p class="card-text hp-p1-body">With supporting text below as a natural lead-in to additional content.</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
</div>

<div class="card text-center">
    <div class="card-header">
        Featured
    </div>

    <div class="card-body">
        <h5 class="card-title">Special title treatment</h5>
        <p class="card-text hp-p1-body">With supporting text below as a natural lead-in to additional content.</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>

    <div class="card-footer text-muted">
        2 days ago
    </div>
</div>

`;

const navigation = `
<div class="card text-center">
    <div class="card-header">
        <ul class="nav nav-tabs card-header-tabs">
            <li class="nav-item">
                <a class="nav-link active" aria-current="true" href="#">Active</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Link</a>
            </li>
            <li class="nav-item">
                <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
            </li>
        </ul>
    </div>

    <div class="card-body">
        <h5 class="card-title">Special title treatment</h5>
        <p class="card-text hp-p1-body">With supporting text below as a natural lead-in to additional content.</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
</div>

<div class="card text-center">
    <div class="card-header">
        <ul class="nav nav-pills card-header-pills">
            <li class="nav-item">
                <a class="nav-link active" href="#">Active</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Link</a>
            </li>
            <li class="nav-item">
                <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
            </li>
        </ul>
    </div>

    <div class="card-body">
        <h5 class="card-title">Special title treatment</h5>
        <p class="card-text hp-p1-body">With supporting text below as a natural lead-in to additional content.</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
</div>

`;

const imageCaps = `
<div class="card mb-3">
  <img src="..." class="card-img-top" alt="...">

  <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text hp-p1-body">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      <p class="card-text">
          <small class="text-muted">Last updated 3 mins ago</small>
      </p>
  </div>
</div>

<div class="card">
  <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text hp-p1-body">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      <p class="card-text">
          <small class="text-muted">Last updated 3 mins ago</small>
      </p>
  </div>

  <img src="..." class="card-img-bottom" alt="...">
</div>

`;

const imageOverlay = `
<div class="card bg-dark text-white">
  <img src="..." class="card-img" alt="...">

  <div class="card-img-overlay">
      <h5 class="card-title text-white">Card title</h5>
      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      <p class="card-text">Last updated 3 mins ago</p>
  </div>
</div>

`;

const horizontalCard = `
<div class="card" style="max-width: 540px;">
  <div class="row g-0">
    <div class="col-md-4">
      <img src="..." class="img-fluid rounded-start" alt="...">
    </div>

    <div class="col-md-8">
        <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text hp-p1-body">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            <p class="card-text">
                <small class="text-muted">Last updated 3 mins ago</small>
            </p>
        </div>
    </div>
  </div>
</div>

`;

const backgroundColor = `
<div class="card text-white bg-primary" style="max-width: 18rem;">
    <div class="card-header">Header</div>
    <div class="card-body">
        <h5 class="card-title text-white">Primary card title</h5>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    </div>
</div>

<div class="card text-white bg-secondary" style="max-width: 18rem;">
    <div class="card-header">Header</div>
    <div class="card-body">
        <h5 class="card-title text-white">Secondary card title</h5>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    </div>
</div>

<div class="card text-white bg-success" style="max-width: 18rem;">
    <div class="card-header">Header</div>
    <div class="card-body">
        <h5 class="card-title text-white">Success card title</h5>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    </div>
</div>

<div class="card text-white bg-danger" style="max-width: 18rem;">
    <div class="card-header">Header</div>
    <div class="card-body">
        <h5 class="card-title text-white">Danger card title</h5>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    </div>
</div>

<div class="card text-dark bg-warning" style="max-width: 18rem;">
    <div class="card-header">Header</div>
    <div class="card-body">
        <h5 class="card-title">Warning card title</h5>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    </div>
</div>

<div class="card text-dark bg-info" style="max-width: 18rem;">
    <div class="card-header">Header</div>
    <div class="card-body">
        <h5 class="card-title">Info card title</h5>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    </div>
</div>

<div class="card text-dark bg-light" style="max-width: 18rem;">
    <div class="card-header">Header</div>
    <div class="card-body">
        <h5 class="card-title">Light card title</h5>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    </div>
</div>

<div class="card text-white bg-dark" style="max-width: 18rem;">
    <div class="card-header">Header</div>
    <div class="card-body">
        <h5 class="card-title text-white">Dark card title</h5>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    </div>
</div>

`;

const cardBorder = `
<div class="card border-primary" style="max-width: 18rem;">
    <div class="card-header">Header</div>
    <div class="card-body text-primary">
        <h5 class="card-title text-primary">Primary card title</h5>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    </div>
</div>

<div class="card border-secondary" style="max-width: 18rem;">
    <div class="card-header">Header</div>
    <div class="card-body text-secondary">
        <h5 class="card-title text-secondary">Secondary card title</h5>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    </div>
</div>

<div class="card border-success" style="max-width: 18rem;">
    <div class="card-header">Header</div>
    <div class="card-body text-success">
        <h5 class="card-title text-success">Success card title</h5>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    </div>
</div>

<div class="card border-danger" style="max-width: 18rem;">
    <div class="card-header">Header</div>
    <div class="card-body text-danger">
        <h5 class="card-title text-danger">Danger card title</h5>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    </div>
</div>

<div class="card border-warning" style="max-width: 18rem;">
    <div class="card-header">Header</div>
    <div class="card-body">
        <h5 class="card-title">Warning card title</h5>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    </div>
</div>

<div class="card border-info" style="max-width: 18rem;">
    <div class="card-header">Header</div>
    <div class="card-body">
        <h5 class="card-title">Info card title</h5>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    </div>
</div>

<div class="card border-light" style="max-width: 18rem;">
    <div class="card-header">Header</div>
    <div class="card-body">
        <h5 class="card-title">Light card title</h5>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    </div>
</div>

<div class="card border-dark" style="max-width: 18rem;">
    <div class="card-header">Header</div>
    <div class="card-body text-dark">
        <h5 class="card-title">Dark card title</h5>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    </div>
</div>

`;

const cardGroups = `
<div class="card-group">
  <div class="card">
      <img src="..." class="card-img-top" alt="...">

      <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text hp-p1-body">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
          <p class="card-text">
              <small class="text-muted">Last updated 3 mins ago</small>
          </p>
      </div>
  </div>

  <div class="card">
      <img src="..." class="card-img-top" alt="...">

      <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text hp-p1-body">This card has supporting text below as a natural lead-in to additional content.</p>
          <p class="card-text">
              <small class="text-muted">Last updated 3 mins ago</small>
          </p>
      </div>
  </div>

  <div class="card">
      <img src="..." class="card-img-top" alt="...">

      <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text hp-p1-body">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
          <p class="card-text">
              <small class="text-muted">Last updated 3 mins ago</small>
          </p>
      </div>
  </div>
</div>

<div class="card-group">
  <div class="card">
      <img src="..." class="card-img-top" alt="...">

      <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text hp-p1-body">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
      <div class="card-footer">
          <small class="text-muted">Last updated 3 mins ago</small>
      </div>
  </div>

  <div class="card">
      <img src="..." class="card-img-top" alt="...">

      <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text hp-p1-body">This card has supporting text below as a natural lead-in to additional content.</p>
      </div>
      <div class="card-footer">
          <small class="text-muted">Last updated 3 mins ago</small>
      </div>
  </div>

  <div class="card">
      <img src="..." class="card-img-top" alt="...">

      <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text hp-p1-body">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action. This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
      </div>
      <div class="card-footer">
          <small class="text-muted">Last updated 3 mins ago</small>
      </div>
  </div>
</div>

`;

const cardGrid = `
  <div class="row row-cols-1 row-cols-md-2 g-16">
    <div class="col">
        <div class="card h-100">
            <img src="..." class="card-img-top" alt="...">

            <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text hp-p1-body">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            </div>
        </div>
    </div>

    <div class="col">
        <div class="card h-100">
            <img src="..." class="card-img-top" alt="...">

            <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text hp-p1-body">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer. This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer. This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            </div>
        </div>
    </div>

    <div class="col">
        <div class="card h-100">
            <img src="..." class="card-img-top" alt="...">

            <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text hp-p1-body">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
            </div>
        </div>
    </div>

    <div class="col">
        <div class="card h-100">
            <img src="..." class="card-img-top" alt="...">

            <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text hp-p1-body">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            </div>
        </div>
    </div>
  </div>

`;

//--

$("pre code").each(function () {
  if ($(this).data("component") === "card") {
    $(this).text($.trim($(this).data("code")))

    if ($(this).data("code") === "example") {
      $(this).text(exampleCard)
    }

    if ($(this).data("code") === "body") {
      $(this).text(bodyCard)
    }

    if ($(this).data("code") === "titles-text-links") {
      $(this).text(titlesTextLinks)
    }

    if ($(this).data("code") === "images") {
      $(this).text(imagesCard)
    }

    if ($(this).data("code") === "list-groups") {
      $(this).text(listGroups)
    }

    if ($(this).data("code") === "kitchen-sink") {
      $(this).text(kitchenSink)
    }

    if ($(this).data("code") === "header-and-footer") {
      $(this).text(headerAndFooter)
    }

    if ($(this).data("code") === "navigation") {
      $(this).text(navigation)
    }

    if ($(this).data("code") === "image-caps") {
      $(this).text(imageCaps)
    }

    if ($(this).data("code") === "image-overlay") {
      $(this).text(imageOverlay)
    }

    if ($(this).data("code") === "horizontal") {
      $(this).text(horizontalCard)
    }

    if ($(this).data("code") === "background-color") {
      $(this).text(backgroundColor)
    }

    if ($(this).data("code") === "card-border") {
      $(this).text(cardBorder)
    }

    if ($(this).data("code") === "card-groups") {
      $(this).text(cardGroups)
    }

    if ($(this).data("code") === "card-grid") {
      $(this).text(cardGrid)
    }
  }
});

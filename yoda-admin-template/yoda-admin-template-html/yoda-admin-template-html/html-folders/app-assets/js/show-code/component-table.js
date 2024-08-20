const overview = `
<table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td colspan="2">Larry the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>

`;

const variants = `
<!-- On tables -->
<table class="table-primary">...</table>
<table class="table-secondary">...</table>
<table class="table-success">...</table>
<table class="table-danger">...</table>
<table class="table-warning">...</table>
<table class="table-info">...</table>
<table class="table-light">...</table>
<table class="table-dark">...</table>

<!-- On rows -->
<tr class="table-primary">...</tr>
<tr class="table-secondary">...</tr>
<tr class="table-success">...</tr>
<tr class="table-danger">...</tr>
<tr class="table-warning">...</tr>
<tr class="table-info">...</tr>
<tr class="table-light">...</tr>
<tr class="table-dark">...</tr>

<!-- On cells ('td' or 'th') -->
<tr>
  <td class="table-primary">...</td>
  <td class="table-secondary">...</td>
  <td class="table-success">...</td>
  <td class="table-danger">...</td>
  <td class="table-warning">...</td>
  <td class="table-info">...</td>
  <td class="table-light">...</td>
  <td class="table-dark">...</td>
</tr>

<table class="table table-dark">
  <thead>
      ...
  </thead>
  <tbody>
      ...
  </tbody>
</table>

`;

const stripedRows = `
<table class="table table-striped">
  ...
</table>

`;

const hoverableRows = `
<table class="table table-hover">
  ...
</table>

`;

const activeTables = `
<table class="table">
  <thead>
    ...
  </thead>
  <tbody>
    <tr class="table-active">
      ...
    </tr>
    <tr>
      ...
    </tr>
    <tr>
      <th scope="row">3</th>
      <td colspan="2" class="table-active">Larry the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>

`;

const bordered = `
<table class="table table-bordered">
  ...
</table>

<table class="table table-bordered border-primary">
  ...
</table>

`;

const borderless = `
<table class="table table-borderless">
  ...
</table>

`;

const smallTables = `
<table class="table table-sm">
  ...
</table>

`;

const nesting = `
<table class="table table-striped">
  <thead>
    ...
  </thead>
  <tbody>
    ...
    <tr>
      <td colspan="4">
        <table class="table mb-0">
          ...
        </table>
      </td>
    </tr>
    ...
  </tbody>
</table>

`;

const foot = `
<table class="table">
  <thead>
    ...
  </thead>
  <tbody>
    ...
  </tbody>
  <tfoot>
    ...
  </tfoot>
</table>

`;

const captionsTable = `
<table class="table table-sm">
  <caption>List of users</caption>
  <thead>
    ...
  </thead>
  <tbody>
    ...
  </tbody>
</table>

<table class="table caption-top">
  <caption>List of users</caption>
  <thead>
    ...
  </thead>
  <tbody>
    ...
  </tbody>
</table>

`;

const responsiveTable = `
<div class="table-responsive">
  <table class="table">
    ...
  </table>
</div>

`;

const breakpoint = `
<div class="table-responsive">
  <table class="table">
    ...
  </table>
</div>

<div class="table-responsive-sm">
  <table class="table">
    ...
  </table>
</div>

<div class="table-responsive-md">
  <table class="table">
    ...
  </table>
</div>

<div class="table-responsive-lg">
  <table class="table">
    ...
  </table>
</div>

<div class="table-responsive-xl">
  <table class="table">
    ...
  </table>
</div>

<div class="table-responsive-xxl">
  <table class="table">
    ...
  </table>
</div>

`;

//--

$("pre code").each(function () {
  if ($(this).data("component") === "table") {
    $(this).text($.trim($(this).data("code")))

    if ($(this).data("code") === "overview") {
      $(this).text(overview)
    }

    if ($(this).data("code") === "variants") {
      $(this).text(variants)
    }

    if ($(this).data("code") === "striped-rows") {
      $(this).text(stripedRows)
    }

    if ($(this).data("code") === "active-tables") {
      $(this).text(activeTables)
    }

    if ($(this).data("code") === "bordered") {
      $(this).text(bordered)
    }

    if ($(this).data("code") === "borderless") {
      $(this).text(borderless)
    }

    if ($(this).data("code") === "small-tables") {
      $(this).text(smallTables)
    }

    if ($(this).data("code") === "nesting") {
      $(this).text(nesting)
    }

    if ($(this).data("code") === "foot") {
      $(this).text(foot)
    }

    if ($(this).data("code") === "captions") {
      $(this).text(captionsTable)
    }

    if ($(this).data("code") === "responsive") {
      $(this).text(responsiveTable)
    }

    if ($(this).data("code") === "breakpoint") {
      $(this).text(breakpoint)
    }
  }
});

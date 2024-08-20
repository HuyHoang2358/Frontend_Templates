const basicPagination = `
<nav aria-label="Page navigation example">
  <ul class="pagination">
    <li class="page-item"><a class="page-link" href="javascript:;">Previous</a></li>
    <li class="page-item"><a class="page-link" href="javascript:;">1</a></li>
    <li class="page-item"><a class="page-link" href="javascript:;">2</a></li>
    <li class="page-item"><a class="page-link" href="javascript:;">3</a></li>
    <li class="page-item"><a class="page-link" href="javascript:;">Next</a></li>
  </ul>
</nav>

`;

const iconsPagination = `
<nav aria-label="Page navigation example">
  <ul class="pagination">
    <li class="page-item">
      <a class="page-link" href="javascript:;" aria-label="Previous">
        <span aria-hidden="true">&laquo;</span>
      </a>
    </li>
    <li class="page-item"><a class="page-link" href="javascript:;">1</a></li>
    <li class="page-item"><a class="page-link" href="javascript:;">2</a></li>
    <li class="page-item"><a class="page-link" href="javascript:;">3</a></li>
    <li class="page-item">
      <a class="page-link" href="javascript:;" aria-label="Next">
        <span aria-hidden="true">&raquo;</span>
      </a>
    </li>
  </ul>
</nav>

`;

const disabledActive = `
<nav aria-label="...">
  <ul class="pagination">
    <li class="page-item disabled">
      <a class="page-link" href="javascript:;" tabindex="-1" aria-disabled="true">Previous</a>
    </li>
    <li class="page-item"><a class="page-link" href="javascript:;">1</a></li>
    <li class="page-item active" aria-current="page">
      <a class="page-link" href="javascript:;">2</a>
    </li>
    <li class="page-item"><a class="page-link" href="javascript:;">3</a></li>
    <li class="page-item">
      <a class="page-link" href="javascript:;">Next</a>
    </li>
  </ul>
</nav>

`;

const sizingPagination = `
<nav aria-label="...">
  <ul class="pagination pagination-lg">
    <li class="page-item active" aria-current="page">
      <span class="page-link">1</span>
    </li>
    <li class="page-item"><a class="page-link" href="javascript:;">2</a></li>
    <li class="page-item"><a class="page-link" href="javascript:;">3</a></li>
  </ul>
</nav>

<nav aria-label="...">
  <ul class="pagination pagination-sm">
    <li class="page-item active" aria-current="page">
      <span class="page-link">1</span>
    </li>
    <li class="page-item"><a class="page-link" href="javascript:;">2</a></li>
    <li class="page-item"><a class="page-link" href="javascript:;">3</a></li>
  </ul>
</nav>

`;

//--

$("pre code").each(function () {
    if ($(this).data("component") === "pagination") {
        $(this).text($.trim($(this).data("code")))

        if ($(this).data("code") === "basic") {
            $(this).text(basicPagination)
        }

        if ($(this).data("code") === "icons") {
            $(this).text(iconsPagination)
        }

        if ($(this).data("code") === "disabled-active") {
            $(this).text(disabledActive)
        }

        if ($(this).data("code") === "sizing") {
            $(this).text(sizingPagination)
        }
    }
});

const basicInputNumber = `
<div class="input-number">
    <div class="input-number-handler-wrap">
        <span class="input-number-handler input-number-handler-up">
            <span class="input-number-handler-up-inner">
                <svg viewBox="64 64 896 896" width="1em" height="1em" fill="currentColor">
                    <path d="M890.5 755.3L537.9 269.2c-12.8-17.6-39-17.6-51.7 0L133.5 755.3A8 8 0 00140 768h75c5.1 0 9.9-2.5 12.9-6.6L512 369.8l284.1 391.6c3 4.1 7.8 6.6 12.9 6.6h75c6.5 0 10.3-7.4 6.5-12.7z"></path>
                </svg>
            </span>
        </span>

        <span class="input-number-handler input-number-handler-down input-number-handler-down-disabled">
            <span class="input-number-handler-down-inner">
                <svg viewBox="64 64 896 896" width="1em" height="1em" fill="currentColor">
                    <path d="M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z"></path>
                </svg>
            </span>
        </span>
    </div>

    <div class="input-number-input-wrap">
        <input class="input-number-input" type="number" min="1" max="10" value="1">
    </div>
</div>

`;

const disabledInputNumber = `
<div class="input-number input-number-disabled">
    <div class="input-number-handler-wrap">
        <span class="input-number-handler input-number-handler-up">
            <span class="input-number-handler-up-inner">
                <svg viewBox="64 64 896 896" width="1em" height="1em" fill="currentColor">
                    <path d="M890.5 755.3L537.9 269.2c-12.8-17.6-39-17.6-51.7 0L133.5 755.3A8 8 0 00140 768h75c5.1 0 9.9-2.5 12.9-6.6L512 369.8l284.1 391.6c3 4.1 7.8 6.6 12.9 6.6h75c6.5 0 10.3-7.4 6.5-12.7z"></path>
                </svg>
            </span>
        </span>

        <span class="input-number-handler input-number-handler-down input-number-handler-down-disabled">
            <span class="input-number-handler-down-inner">
                <svg viewBox="64 64 896 896" width="1em" height="1em" fill="currentColor">
                    <path d="M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z"></path>
                </svg>
            </span>
        </span>
    </div>

    <div class="input-number-input-wrap">
        <input class="input-number-input" type="number" min="1" max="10" value="1" disabled>
    </div>
</div>

`;

const sizesInputNumber = `
<div class="input-number input-number-lg">
  <div class="input-number-handler-wrap">
      <span class="input-number-handler input-number-handler-up">
          <span class="input-number-handler-up-inner">
              <svg viewBox="64 64 896 896" width="1em" height="1em" fill="currentColor">
                  <path d="M890.5 755.3L537.9 269.2c-12.8-17.6-39-17.6-51.7 0L133.5 755.3A8 8 0 00140 768h75c5.1 0 9.9-2.5 12.9-6.6L512 369.8l284.1 391.6c3 4.1 7.8 6.6 12.9 6.6h75c6.5 0 10.3-7.4 6.5-12.7z"></path>
              </svg>
          </span>
      </span>

      <span class="input-number-handler input-number-handler-down input-number-handler-down-disabled">
          <span class="input-number-handler-down-inner">
              <svg viewBox="64 64 896 896" width="1em" height="1em" fill="currentColor">
                  <path d="M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z"></path>
              </svg>
          </span>
      </span>
  </div>

  <div class="input-number-input-wrap">
      <input class="input-number-input" type="number" min="1" max="10" value="1">
  </div>
</div>

<div class="input-number">
  <div class="input-number-handler-wrap">
      <span class="input-number-handler input-number-handler-up">
          <span class="input-number-handler-up-inner">
              <svg viewBox="64 64 896 896" width="1em" height="1em" fill="currentColor">
                  <path d="M890.5 755.3L537.9 269.2c-12.8-17.6-39-17.6-51.7 0L133.5 755.3A8 8 0 00140 768h75c5.1 0 9.9-2.5 12.9-6.6L512 369.8l284.1 391.6c3 4.1 7.8 6.6 12.9 6.6h75c6.5 0 10.3-7.4 6.5-12.7z"></path>
              </svg>
          </span>
      </span>

      <span class="input-number-handler input-number-handler-down input-number-handler-down-disabled">
          <span class="input-number-handler-down-inner">
              <svg viewBox="64 64 896 896" width="1em" height="1em" fill="currentColor">
                  <path d="M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z"></path>
              </svg>
          </span>
      </span>
  </div>

  <div class="input-number-input-wrap">
      <input class="input-number-input" type="number" min="1" max="10" value="1">
  </div>
</div>

<div class="input-number input-number-sm">
  <div class="input-number-handler-wrap">
      <span class="input-number-handler input-number-handler-up">
          <span class="input-number-handler-up-inner">
              <svg viewBox="64 64 896 896" width="1em" height="1em" fill="currentColor">
                  <path d="M890.5 755.3L537.9 269.2c-12.8-17.6-39-17.6-51.7 0L133.5 755.3A8 8 0 00140 768h75c5.1 0 9.9-2.5 12.9-6.6L512 369.8l284.1 391.6c3 4.1 7.8 6.6 12.9 6.6h75c6.5 0 10.3-7.4 6.5-12.7z"></path>
              </svg>
          </span>
      </span>

      <span class="input-number-handler input-number-handler-down input-number-handler-down-disabled">
          <span class="input-number-handler-down-inner">
              <svg viewBox="64 64 896 896" width="1em" height="1em" fill="currentColor">
                  <path d="M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z"></path>
              </svg>
          </span>
      </span>
  </div>

  <div class="input-number-input-wrap">
      <input class="input-number-input" type="number" min="1" max="10" value="1">
  </div>
</div>

`;

//--

$("pre code").each(function () {
  if ($(this).data("component") === "input-number") {
    $(this).text($.trim($(this).data("code")))

    if ($(this).data("code") === "basic") {
      $(this).text(basicInputNumber)
    }

    if ($(this).data("code") === "disabled") {
      $(this).text(disabledInputNumber)
    }

    if ($(this).data("code") === "sizes") {
      $(this).text(sizesInputNumber)
    }
  }
});

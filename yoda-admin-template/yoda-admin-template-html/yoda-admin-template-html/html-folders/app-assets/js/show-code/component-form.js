const basicForm = `
<form>
  <div class="mb-24">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>

  <div class="mb-24">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1">
  </div>

  <div class="mb-24 form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1">
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>

  <button type="submit" class="btn btn-primary">Submit</button>
</form>

`;

const disabledForm = `
<form>
  <div class="mb-24">
    <label for="disabledTextInput" class="form-label">Disabled input</label>
    <input type="text" id="disabledTextInput" class="form-control" placeholder="Disabled input" disabled>
  </div>

  <div class="mb-24">
    <label for="disabledSelect" class="form-label">Disabled select menu</label>
    <select id="disabledSelect" class="form-select" disabled>
      <option>Disabled select</option>
    </select>
  </div>

  <div class="mb-24">
    <div class="form-check">
      <input class="form-check-input" type="checkbox" id="disabledFieldsetCheck" disabled>
      <label class="form-check-label" for="disabledFieldsetCheck">
        Can't check this
      </label>
    </div>
  </div>

  <button type="submit" class="btn btn-primary" disabled>Submit</button>
</form>

`;

//--

$("pre code").each(function () {
  if ($(this).data("component") === "form") {
    $(this).text($.trim($(this).data("code")))

    if ($(this).data("code") === "basic") {
      $(this).text(basicForm)
    }

    if ($(this).data("code") === "disabled") {
      $(this).text(disabledForm)
    }
  }
});

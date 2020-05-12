<script>
  import CreditCard from "../src";

  let number = "";
  let name = "";
  let cvc = "";
  let expiry = "";
</script>

<div>
  <label for="number">Number</label>
  <input bind:value={number} name="number" id="number" />
</div>
<br />
<div>
  <label for="name">Name</label>
  <input bind:value={name} name="name" id="name" />

</div>
<br />
<div>
  <label for="cvc">CVC</label>
  <input bind:value={cvc} name="cvc" id="cvc" maxlength="3" />
</div>
<br />
<div>
  <label for="expiry">Exp.</label>
  <input bind:value={expiry} name="expiry" id="expiry" maxlength="4" />
</div>
<br />
<div
  style="height: 300px; display: flex; align-items: center; justify-content:
  center; border: 1px solid gray;">
  <CreditCard {number} {name} {cvc} {expiry} preview={true} />
</div>

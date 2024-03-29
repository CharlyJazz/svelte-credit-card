# Svelte Credit Card

[![npm version](https://badge.fury.io/js/svelte-credit-cards.svg)](https://badge.fury.io/js/svelte-credit-cards)
![Codecov](https://img.shields.io/codecov/c/github/charlyjazz/svelte-credit-card?label=%20&logo=codecov&logoColor=orange&style=flat-square)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)


[![Credit-card-svelte-test.gif](https://i.postimg.cc/FK2ngjbz/Credit-card-svelte-test.gif)](https://postimg.cc/GBxQbT5n)

A component to render a credit card preview, useful for ecommerces.

Based in [react-credit-cards](https://github.com/amarofashion/react-credit-cards) A react component with beautiful credit cards for your payment forms.

### Prerequisites

You need svelte-loader or a rollup svelte configuration

### Installing

With NPM:

```bash
$ npm install svelte-credit-cards
```

With Yarn:

```bash
$ yarn add svelte-credit-cards
```

## Example

You can create inputs and send the values as props to the CreditCard component

```javascript
<script>
  import CreditCard from "svelte-credit-cards"; let number = ""; let name = "";
  let cvc = ""; let expiry = "";
</script>
```

```html
<div>
  <label for="number">Number</label>
  <input bind:value="{number}" name="number" id="number" />
</div>
<div>
  <label for="name">Name</label>
  <input bind:value="{name}" name="name" id="name" />
</div>
<div>
  <label for="cvc">CVC</label>
  <input bind:value="{cvc}" name="cvc" id="cvc" maxlength="3" />
</div>
<div>
  <label for="expiry">Exp.</label>
  <input bind:value="{expiry}" name="expiry" id="expiry" maxlength="4" />
</div>
<CreditCard {number} {name} {cvc} {expiry} preview="{true}" />
```

## Built With

[react-credit-cards](https://github.com/amarofashion/react-credit-cards) - A react component with beautiful credit cards for your payment forms.

[Svelte Component Template](https://github.com/sveltejs/component-template) - A base for building shareable Svelte components.

[Payment](https://github.com/jessepollak/payment) - A jQuery-free general purpose library for building credit card forms, validating inputs and formatting numbers.

## Contributing

Please read [CONTRIBUTING](CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details

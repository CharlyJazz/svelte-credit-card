import CreditCard from "../src/CreditCard.svelte";
import { render } from "@testing-library/svelte";

const props = {
  cvc: "123",
  name: "Charly Garcia",
  number: "1234123412341234",
  expiry: "12/23",
  locale: {
    valid: "EXP",
  },
};

it("Render Credit Card", async () => {
  const { getByTestId } = render(CreditCard, {
    props,
  });
  const cvc = getByTestId("cvc");
  const name = getByTestId("name");
  const number = getByTestId("number");
  const expiry = getByTestId("expiry");
  const locale_valid = getByTestId("locale_valid");

  expect(cvc.textContent).toBe(props.cvc);
  expect(name.textContent).toBe(props.name);
  expect(number.textContent).toBe("1234 1234 1234 1234");
  expect(expiry.textContent).toBe(props.expiry);
  expect(locale_valid.textContent).toBe(props.locale.valid);
});

import CreditCard from "./CreditCard.svelte";

export default {
    title: "Credit Card",
    component: CreditCard
};

export const CreditCardNumber = () => ({
    Component: CreditCard,
    props: { number: "5300" }
});

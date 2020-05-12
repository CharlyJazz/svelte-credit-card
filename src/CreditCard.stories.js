import CreditCard from "./CreditCard.svelte";

export default {
    title: "Credit Card",
    component: CreditCard
};

export const HandleCustomPlaceholderAndLocale = () => ({
    Component: CreditCard,
    props: {
        placeholders: {
            name: '------------',
        },
        locale: {
            valid: 'EXP',
        }
    }
});

export const FocusedCVC = () => ({
    Component: CreditCard,
    props: {
        focused: 'cvc',
        cvc: '123',
        issuer: 'mastercard'
    }
});

export const AmericanExpress = () => ({
    Component: CreditCard,
    props: {
        number: '378282246310005',
        focused: 'number',
    }
});


export const Dankort = () => ({
    Component: CreditCard,
    props: {
        number: '5019717010103742',
        focused: 'number',
    }
});

export const Diners = () => ({
    Component: CreditCard,
    props: {
        number: '30569309025904',
        focused: 'number',
    }
});

export const Discover = () => ({
    Component: CreditCard,
    props: {
        number: '6011111111111117',
        focused: 'number',
    }
});

export const Elo = () => ({
    Component: CreditCard,
    props: {
        number: '6362970000457013',
        focused: 'number',
    }
});

export const Hipercard = () => ({
    Component: CreditCard,
    props: {
        number: '3841005899088180330',
        focused: 'number',
    }
});

export const JCB = () => ({
    Component: CreditCard,
    props: {
        number: '3530111333300000',
        focused: 'number',
    }
});

export const Laser = () => ({
    Component: CreditCard,
    props: {
        number: '6709359636227382',
        focused: 'number',
    }
});

export const Maestro = () => ({
    Component: CreditCard,
    props: {
        number: '6304414232839699',
        focused: 'number',
    }
});

export const Mastercard = () => ({
    Component: CreditCard,
    props: {
        number: '5105105105105100',
        focused: 'number',
    }
});

export const Unionpay = () => ({
    Component: CreditCard,
    props: {
        number: '6240008631401148',
        focused: 'number',
    }
})

export const Visa = () => ({
    Component: CreditCard,
    props: {
        number: '4012888888881881',
        focused: 'number',
    }
});
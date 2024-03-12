const isEmpty = (x) => x === undefined || x === null;

const Maybe = (x) => ({
    map: (f) => (isEmpty(x) ? Maybe(null) : Maybe(f(x))),
    inspect: () => `Maybe(${x})`,
    valueOf: () => x,
});

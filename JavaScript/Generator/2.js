function* gen() {
    yield* [1, 2, 3]
}
let it = gen()
console.log(it.next())

function* generatorFnA() {
    for (const x of [1, 2, 3]) {
        yield x
    }
}
let itA = generatorFnA()
console.log(itA.next())
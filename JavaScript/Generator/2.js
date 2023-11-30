function* gen() {
    yield* "hello"
}
let it = gen()
for (let ietm of it) {
    console.log(ietm)
    // h
    // e
    // l
    // l
    // o
}

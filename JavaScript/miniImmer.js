function produce(base, recipe) {
    let copy;
    const baseHandler = {
        set(obj, key, val) {
            if (!copy) copy = { ...base };
            copy[key] = val;
            return true;
        },
    };

    const draft = new Proxy(base, baseHandler);
    recipe(draft);
    return Object.freeze(copy || base);
}

const baseObj = {
    a: 1,
    b: {
        name: "xxx",
    },
};

const changeA = (draft) => {
    draft.a = 2;
};
const doNothing = (draft) => {
    console.log("do nothing", draft);
};
const changedObjA = produce(baseObj, changeA);
// 借助 produce，对源对象应用读操作
const doNothingObj = produce(baseObj, doNothing);
// 顺序输出3个对象，确认写操作确实生效了
console.log(baseObj);
console.log(changedObjA);
console.log(doNothingObj);

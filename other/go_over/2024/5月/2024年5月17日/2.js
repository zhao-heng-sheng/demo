function onlyOne(a, b, c) {
    return !!((a && !b && !c) || (!a && b && !c) || (!a && !b && c));
}
var a = true;
var b = false;
onlyOne(a, b, b); // true
onlyOne(b, a, b); // true
onlyOne(a, b, a); // false

//true false

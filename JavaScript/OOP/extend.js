function SuperType() {
    this.property = true
}

SuperType.prototype.getSuperValue = function () {
    return this.property
}
function SubType() {
    this.subproperty = false
}
SubType.prototype = new SuperType()
console.log(SubType)
SubType.prototype.getSubValue = function () {
    return this.subproperty
}
let instance = new SubType()
console.log(instance)

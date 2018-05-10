function object(o) {
  function F() {}
  F.prototype = o
  return new F()
}

function Person() {
  this.name = 'Adam'
}

Person.prototype.getName = function() {
  return this.name
}

const kid = object(Person.prototype)

console.log(typeof kid.getName)
console.log(typeof kid.name)
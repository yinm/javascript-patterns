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

const papa = new Person()

const kid = object(papa)
console.log(kid.getName())
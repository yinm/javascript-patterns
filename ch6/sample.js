function object(o) {
  function F() {}
  F.prototype = o
  return new F()
}

const parent = {
  name: 'Papa',
}

const child = object(parent)
console.log(child.name)
function mix() {
  let child = {}

  for (let arg = 0; arg < arguments.length; arg += 1) {
    for (let prop in arguments[arg]) {
      if (arguments[arg].hasOwnProperty(prop)) {
        child[prop] = arguments[arg][prop]
      }
    }
  }

  return child
}

const cake = mix(
  {eggs: 2, large: true},
  {butter: 1, salted: true},
  {flour: "3 cups"},
  {sugar: "sure!"},
)
console.log(cake)
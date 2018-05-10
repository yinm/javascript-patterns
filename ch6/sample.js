function extend(parent, child) {
  child = child || {}
  for (let i in parent) {
    if (parent.hasOwnProperty(i)) {
      child[i] = parent[i]
    }
  }

  return child
}

const dad = {name: 'Adam'}
const kid = extend(dad)
console.log(kid.name)
function extendDeep(parent, child) {
  const
    toStr = Object.prototype.toString,
    astr = '[object Array]'

  child = child || {}

  for (let i in parent) {
    if (parent.hasOwnProperty(i)) {
      if (typeof parent[i] === 'object') {
        child[i] = (toStr.call(parent[i]) === astr) ? [] : {}
        extendDeep(parent[i], child[i])
      } else {
        child[i] = parent[i]
      }
    }
  }

  return child
}

const dad = {
  counts: [1, 2, 3],
  reads: {paper: true}
}
let kid = extendDeep(dad)

kid.counts.push(4)
console.log(kid.counts.toString())
console.log(dad.counts.toString())

console.log(kid.reads.paper)
console.log(dad.reads === kid.reads)
kid.reads.paper = false
kid.reads.web = true
console.log(dad.reads.paper)

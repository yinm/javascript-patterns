function extend(parent, child) {
  child = child || {}
  for (let i in parent) {
    if (parent.hasOwnProperty(i)) {
      child[i] = parent[i]
    }
  }

  return child
}

const dad = {
  counts: [1, 2, 3],
  reads: {paper: true}
}

let kid = extend(dad)
kid.counts.push(4)
console.log(dad.counts.toString())
console.log(dad.reads === kid.reads)
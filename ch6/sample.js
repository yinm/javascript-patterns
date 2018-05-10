const parent = {
  name: 'Papa'
}

const child = Object.create(parent, {
  age: { value: 2 }
})

console.log(child.name)
console.log(child.hasOwnProperty('age'))
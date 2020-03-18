let array = [6, 3, 2, 10, 32, 5, 0, 12, 1]

function search (target) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === target) return i
  }
  return -1
}

console.log(search(6));
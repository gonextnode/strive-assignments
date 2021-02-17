function deleteOne (s, b) {
  if (b === true) {
    const result = s.substring(1)
    return result
  } else {
    const result = s.slice(0, -1)
    return result
  }
}
console.log(deleteOne('Carlo', true))

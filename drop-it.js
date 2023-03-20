function dropElements(arr, func) {
  let idx = arr.findIndex(func);
  return idx !== -1 ? arr.slice(idx) : [];
}

console.log(dropElements([1, 2, 3, 4], function(n) {return n > 5;}));

// Week 6, Day 3

// Tugas 1

var transformArrToLowerCase = arr => {
  // Ubah setiap element array menjadi lowercase!
  return arr.map(isiArray => {
    return isiArray.toLowerCase();
  });
  /*
  //Cara lain:

  let arrLowerCase = arr.map(isiArray => {
    return isiArray.toLowerCase();
  });
  return arrLowerCase;
  */
};

console.log(transformArrToLowerCase(['BUDI', 'MArNi', 'mukIDi'])); // ['budi', 'marni', 'mukidi']

// Tugas 2

var filterArrUnder10 = arr => {
  // Filter setiap element array yang nilainya dibawah 10, sisakan yang 10 ke atas!
  return arr.filter(isiArray => {
    return isiArray > 10;
  });
};

console.log(filterArrUnder10([1, 5, 12, 15, 20])); // [12, 15, 20]

// Tugas 3

var reduceFindMaximum = arr => {
  // kembalikan sebuah nilai yang mengandung angka terbesar dengan reduce!
    return arr.reduce((result, currentValue) => {
    // result menampung the previously returned value of the function
    return Math.max(result, currentValue);
  }, 0);
}
console.log(reduceFindMaximum([5, 12, 7, 26, 9])); // 26

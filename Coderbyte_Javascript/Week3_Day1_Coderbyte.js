// Recursive
function fungsi1_loop(angka1) {
  if (angka1 == 1) {
    return 1;
  }
  else {
    return angka1 * fungsi1_loop(angka1-1);
  }
}
console.log(fungsi1_loop(5));

function fungsi2_loop(angka1, angka2) {
  if ((angka1 - angka2) <= 0) {
    return angka1;
  }
  else {
    return angka1 * fungsi2_loop((angka1-angka2), angka2);
  }
}
console.log(fungsi2_loop(12, 5));

// Loop
function fungsi1_rec(angka1) {
  var sum = 1;
  for(var i = angka1; i > 0; i--) {
    sum *= i;
  }
  return sum;
}
console.log(fungsi1_rec(5));

function fungsi2_rec(angka1, angka2) {
  var sum = 1;
  for(var i = angka1; i > 0; i -= angka2) {
    sum *= i;
  }
  return sum;
}
console.log(fungsi2_rec(12, 5));

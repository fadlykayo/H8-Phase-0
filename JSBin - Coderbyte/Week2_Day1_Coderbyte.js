// For loop

for(var i = 1; i <= 20; i++) {
  console.log(i + " - " + "I love coding");
}

for(var j = 20; j >= 1; j--) {
  console.log(j + " - " + "I will become fullstack developer");
}

// Ganjil Genap

  for (var i = 1; i <= 100; i++) {
  if (i % 2 == 1) {
    console.log(i + ' GANJIL');
  }
  else {
    console.log(i + ' GENAP');
  }
}

for (var j = 1; j <= 100; j+=2) {
  if ((j % 3 == 0) && (j < 100)) {
    console.log(j + " KELIPATAN 3");
  }
  else {
    //console.log('');
  }
}

for (var j = 1; j <= 100; j+=5) {
  if ((j % 6 == 0) && (j < 100)) {
    console.log(j + " KELIPATAN 6");
  }
  else {
    //console.log('');
  }
}

for (var j = 1; j <= 100; j+=9) {
  if ((j % 10 == 0) && (j <= 100)) {
    console.log(j + " KELIPATAN 10");
  }
  else {
    //console.log('');
  }
}

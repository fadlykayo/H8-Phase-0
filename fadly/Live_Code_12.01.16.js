function deretBilangan(number) {
  let tam = [];
  let res = [];
  for (let i = 3; i <= number*3; i += 3) {
    tam.push(i);
  }
  console.log(tam);
  for (let j = 0; j < tam.length; j++) {
    if (tam[j] % 6 === 0 && tam[j] % 5 === 0) {
      res.push("KASKUS");
    }
    else if (tam[j] % 5 === 0 && tam[j] % 6 !== 0) {
      res.push("KAS")
    }
    else if (tam[j] % 6 === 0 && tam[j] % 5 !== 0) {
      res.push("KUS")
    }
    else {
      res.push(tam[j])
    }
  }
  return res;
}

console.log(deretBilangan(10));


function solvePola(string) {
  let angka = [1,2,3,4,5,6,7,8,9]
  let stringArr = string.split(" ");
  let var1 = [];
  let var2 = [];
  let hasilKali = [];
  let var1_next = [];
  let hasilKali_next = [];
  let res = [];

  var1 = stringArr[0].split("")
  var2 = Number(stringArr[2]);
  hasilKali = stringArr[4].split("")

  indexOf1 = 0;
  indexOf2 = 0;
  for (let i = 0; i < var1.length; i++) {
    indexOf1 = var1.indexOf("#");
  }
  for (let j = 0; j < hasilKali.length; j++) {
    indexOf2 = hasilKali.indexOf("#");
  }
  for (let i = 0; i < var1.length; i++) {
    var1[i] = Number(var1[i]);
  }
  for (let i = 0; i < hasilKali.length; i++) {
    hasilKali[i] = Number(hasilKali[i]);
  }


  for(let j = 0; j < angka.length; j++) {
    for (let k = 0; k < angka.length; k++) {
      var1.splice(indexOf1, 1, angka[j]);
      hasilKali.splice(indexOf2, 1, angka[k]);
      var1_next = Number(var1.join(""));
      hasilKali_next = Number(hasilKali.join(""));
      if (var1_next * var2 == hasilKali_next) {
        res.push(angka[j])
        res.push(angka[k])
        break;
      }
    }
  }


  //   for (let i = 0, i < var1.length; i++) {
//     for (let j = 0; j < angka.length; j++) {
//       if (var1[i] )
//       var1.splice(indexOf1, 1, angka[j])
//       var

//     }
//   }

//   for (let j = 0; j < angka.length; j++) {
//       if ()
//       var1[indexOf1] = angka[j];
//     }

//   console.log(var1_next, hasilKali_next);
  return res;
}

console.log(solvePola("42#3 * 188 = 80#204"));
console.log(solvePola("8#61 * 895 = 78410#5"));

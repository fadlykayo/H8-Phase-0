// Coderbyte Week 4, Day 4

function SimpleMode(arr) {
  var med = [], res = "", count = 1, arrComp = [], arrCount = [];
  for (var k = 0; k < arr.length; k++) {
    if (arrComp.indexOf(arr[k]) == -1) {
      // arrComp.indexOf(1), arrComp.indexOf(2), arrComp.indexOf(3), arrComp.indexOf(0), arrComp.indexOf(3)
      arrComp.push(arr[k]);
      arrCount.push(count);
    }
    else {
      arrCount[arrComp.indexOf(arr[k])] += count;
    }
  }
  console.log("arr: " + arr);
  console.log("arrComp: " + arrComp);
  console.log("arrCount: " + arrCount);
  var tam = 0, index = 0;
  // arrComp == arr tidak bisa
  // arrComp[p] == arr[p] kurang disarankan, karena
  // statement dari loop nya adalah res = -1,
  // res = -1 akan terus keluar berulang hingga arrComp[p] != arr[p]
  // lalu pindah ke else dan me-return res
  if (arrComp.length == arr.length) {
    res = -1;
    console.log("Tidak ada angka terbanyak. Res = " + res);
    return res;
  }
  else {
    for (var n = 0; n < arrCount.length; n++) {
      if (arrCount[n] > tam) {
        tam = arrCount[n];
      }
    }
    index = arrCount.indexOf(tam);
    res = arrComp[index];
    console.log("Angka terbanyak: " + res);
    // jangan masukin return di dalam for loop
    return res;
  }
}

var arr = [1,2,3,0,3];
SimpleMode(arr);

/*
// Cara lain menghitung arrCount

  for (var m = 0; m < arrComp.length; m++) {
    arrCount[m] = 0;
  }
  for (var i = 0; i < arrComp.length; i++) {
    for (var j = 0; j < arr.length; j++) {
      if (arrComp[i] == arr[j]) {
        arrCount[i] += count;
        // perbandingan ini boleh dipakai, karena
        // statement dari loop nya menghitung sesuatu
      }
    }
  }

// Cara lain SimpleMode (@meetup)

function SimpleMode(arr) {
  var contentValues = [], valuesCount = [];
  for (var i = 0; i < arr.length; i++) {
    if(contentValues.indexOf(arr[i]) === -1) {
      contentValues.push(arr[i]);
      valuesCount.push(1);
    }
    else {
      valuesCount[contentValues.indexOf(arr[i])] += 1;
    }
  }
  console.log(arr);
  console.log(contentValues);
  console.log(valuesCount);
  var newArray = valuesCount.slice();
  var highest = newArray.sort((a,b) => (b-a))[0];
  if(highest !== 1) return contentValues[valuesCount.indexOf(highest)]; else return -1;
}

// keep this function call here
console.log(SimpleMode([10, 4, 5, 2, 4]));
console.log(SimpleMode([5, 10, 6, 6, 5]));
console.log(SimpleMode([3, 4, 1, 6, 10]));
*/

function PrimeTime(num) {
  var div = [2], med = [], res = ""; //inisialisasi index 0 dengan 2
  for (var j = 3; j < Math.pow(2,6); j+=2) {
    div.push(j);
  }
  console.log("Num: " + num);
  if (num == 2) {
    res = "true";
    console.log(num + " " + res);
    return res;
  }
  for (var i = 0; i < div.length; i++) {
    if (num > div [i]) { // tidak >= karena habis dibagi dirinya sendiri tidak boleh jadi syarat
      console.log(div[i]);
      if (num % div [i] !== 0) {
        res = "true";
        console.log(num + " tidak habis dibagi " + div[i] + ". " + res);
      }
      else {
        res = "false";
        console.log(num + " habis dibagi " + div[i] + ". " + res);
        return res;
      }
    }
  }
  return res;
}

var num = 55;
PrimeTime(num);

function Division(num1, num2) {
  var div = [], med = [], med2 = [], res = [];
  for (var m = 1; m <= 1000; m++) {
    div.push(m);
  }
  for (var i = 0; i < div.length; i++) {
    if (num1 % div[i] === 0) {
      med.push(num1 / div[i]);
    }
    if (num2 % div[i] === 0) {
      med2.push(num2 / div[i]);
    }
  }
  console.log(med);
  console.log(med2);
  for (var j = 0; j < med.length; j++) {
    for (var k = 0; k < med2.length; k++) {
      if (med[j] == med2[k]) {
        res.push(med[j]);
      }
    }
  }
  console.log(res);
  console.log(res[0]);
  return res[0];
}

var num1 = 1024, num2 = 824;
Division(num1,num2);

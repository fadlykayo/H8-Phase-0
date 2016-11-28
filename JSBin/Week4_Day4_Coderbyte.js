// Coderbyte Week 4, Day 4

function SimpleMode(arr) {
  var med = [], res = "", count = 1, arrComp = [], arrCount = [];
  for (var k = 0; k < arr.length; k++) {
    if (k === 0) {
      arrComp.push(arr[0]);
    }
    else if (arrComp.indexOf(arr[k]) == -1) {
      arrComp.push(arr[k]);
    }
  }
  for (var m = 0; m < arrComp.length; m++) {
    arrCount[m] = 0;
  }
  for (var i = 0; i < arrComp.length; i++) {
    for (var j = 0; j < arr.length; j++) {
      if (arrComp[i] == arr[j]) {
        arrCount[i] += count;
      }
    }
  }
  console.log(arr);
  console.log(arrComp);
  console.log(arrCount);
  var tam = 0, index = 0, bool = false;
  for (var p = 0; p < arr.length; p++) {
    if (arrComp[p] == arr[p]) {
      res = -1;
      console.log(res);
    }
    else {
      for (var n = 0; n < arrCount.length; n++) {
        if (arrCount[n] > tam) {
          tam = arrCount[n];
        }
      }
      index = arrCount.indexOf(tam);
      res = arrComp[index];
    }
  }
  console.log("Tam = " + tam);
  console.log("Res = " + res);
  return res;
}

var arr = [0,1,0,2];
SimpleMode(arr);

function PrimeTime(num) {
  var div = [2], med = [], res = ""; //inisialisasi index 0 dengan 2
  for (var j = 3; j < Math.pow(2,16); j+=2) {
    div.push(j);
  }
  if (num == 2) {
    res = "true";
    console.log(num + " " + res);
    return res;
  }
  for (var i = 0; i < div.length; i++) {
    if (num > div [i]) {
      if (num % div [i] !== 0) {
        res = "true";
      }
      else {
        console.log(num + " false");
        return "false";
      }
    }
  }
  console.log(num + " " + res);
  return res;
}

var num = 53;
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
  

// Coderbyte Week 4, Day 3

function LetterCountI(str) {
  var comp = [], comp2 = [], med = [], med2 = [],  countArr = [], countArr2 = [], countArr3 = [], count = 1, res = "";
  var tam = 0, index = 0;
  med = str.split(" ");
  for (var i = 0; i < med.length; i++) {
    countArr.push([]); // mendeklarasikan array 2 dimensi [[],[],[]] yg panjangnya sesuai med.length
    comp[i] = ""; // untuk men-solved undefined of comp[i]
//     countArr[i] = [];
    for (var j = 0; j < med[i].length; j++) {
      if (comp[i].indexOf(med[i][j]) == -1) {
        comp[i] += med[i][j];
//     dengan push count:
//         countArr[i].push(count);
      }
//       else {
//         countArr[i][comp[i].indexOf(med[i][j])] += count;
//       }
    }
//     dengan beda length:
//     countArr.push(med[i].length - comp[i].length);
  }
//   dengan menggunakan looping:
  for (var k = 0; k < med.length; k++) {
    med2.push(med[k].split(""));
    comp2[k] = comp[k].split("");
    for (var n = 0; n < comp2[k].length ; n++) {
      countArr[k].push(0); //mengisi array 2 dimensi dengan 0 [[0, 0], [0, 0, 0, 0, 0], [0, 0, 0]] yg panjangnya sesuai comp2[k].length
      for (var o = 0; o < med2[k].length ; o++) {
        if (comp2[k][n] == med2[k][o]) {
          countArr[k][n] += 1;
        }
      }
    }
    countArr2.push(countArr[k].filter(isiArray => {
      return isiArray > 1;
    }));
    countArr3.push(countArr2[k].reduce((result, isiArray) => {
      return result + isiArray;
    }));
  }
  console.log(med2);
  console.log(comp2);
//   console.log(med);
//   console.log(comp);
  console.log(countArr);
//   console.log(countArr2);
  console.log(countArr3);
  for (var l = 0; l < countArr3.length; l++) {
    if (countArr3[l] > tam) {
      tam = countArr3[l];
    }
    index = countArr3.indexOf(tam);
  }
//   console.log(tam);
//   console.log(index);
  res = med[index];
  countArr.sort(function(a,b) {return b - a;});
  if (countArr[0] === 0) {
    res = "-1";
    console.log(res);
    return res;
  }
  console.log(res);
  return res;
}

var str = "noo worddss hereee";
LetterCountI(str);

function LetterChanges(str) {
  var alph = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  console.log(alph);
  var med = [], med2 = [], res = "";
  med = str.split(""); //str dengan array sama? sama, tapi parameter itu immutable
  console.log(med); // dengan push? udah bisa. dengan indexof atau regex? belum
  for (var i = 0; i < med.length; i++) {
    for (var j = 0; j < alph.length; j++) {
      if (med[i] === alph[j]) { //kalo diganti med[i] jadi str[i], tidak perlu break;
        med[i] = alph[j+1];
        break;
      }
      //butuh break; karena biasanya pakai return;
      //setelah di break, dia akan melooping index setelahnya
//       if (med[i] === alph[j]) {
//         med2.push(alph[j+1]);
//       }
//       else if (med[i] !== alph[j] && /\W/.test(med[i])) {
//         //jika tidak sama dan merupakan special char
//         med2.push(med[i]);
//         break;
//       }
    }
  }
  console.log(med);
  //console.log(med2);
  for (var k = 0; k < med.length; k++) {
     if (/[aiueo]/.test(med[k])) {
       med[k] = med[k].toUpperCase();
     }
  }
  res = med.join("");
  console.log(res);
  return res;
}

var str = "hello world!";
LetterChanges(str);

function DashInsert(str) {
  console.log(str);
  var med = [], med2 = [], res = "";
  med = str.toString().split(""); // Angka harus dirubah ke string dlu baru bisa di split
  console.log(med);
  for (var i = 0; i < med.length; i++) {
    med2.push(parseInt(med[i]));
  }
  console.log(med2);
  console.log(med2.length);
  for (var j = 0; j < med2.length; j++) {
    if (med2[j] % 2 !== 0 && med2[j+1] % 2 !== 0 && j != med2.length-1) {
      res += med2[j] + "-";
    }
    else {
      res += med2[j];
    }
  }
  console.log(res);
  return res;
}

var str = 99895653451;
DashInsert(str);

function LetterCapitalize(str) {
  var a = str.split(" ");
  var b = [], c = [], d = [], e = "";
  for(var i = 0; i < a.length; i++) {
    b[i] = a[i].split("");
    c.push(b[i][0].toUpperCase());
    b[i][0] = c[i];
    d.push(b[i].join(""));
    e = d.join(" ");
  }
  console.log(a);
  console.log(d);
  console.log(e);
  return e;
}

var str = "hello world yo ya";
LetterCapitalize(str);

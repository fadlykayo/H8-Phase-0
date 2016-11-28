// Coderbyte Week 4, Day 3

function LetterCountI(str) {
  var comp = [], comp2 = [], med = [], med2 = [], count = 1, res = "", countArr = [];
  med = str.split(" ");
  for (var i = 0; i < med.length; i++) {
    med2.push(med[i].split(""));
    //countArr[i] = 0;
    comp[i] = "";
    for (var m = 0; m < med[i].length; m++) {
      if (m === 0) {
        comp[i] += med[i][0];
      }
      else if (comp[i].indexOf(med[i][m]) == -1) {
        comp[i] += med[i][m];
      }
      comp2[i] = comp[i].split("");
    }
  }

  //pelajari lagi cara bandingin gmn
  for (var n = 0; n < med.length; n++) {
    countArr.push(med2[n].length - comp[n].length);
  }
  console.log(med);
  console.log(comp);
  console.log(med2);
  console.log(comp2);
  console.log(countArr);
  var tam = 0, tam2 = 0;
  for (var l = 0; l < countArr.length; l++) {
    if (countArr[l] > tam) {
      tam = countArr[l];
    }
  }
  tam2 = countArr.indexOf(tam);
  res = med[tam2];
  countArr.sort(function(a,b) {return b - a;});
  if (countArr[0] === 0) {
    res = "-1";
    console.log("-1");
    return res;
  }
  console.log(res);
  return res;
}

var str = "noo wordos herre";
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

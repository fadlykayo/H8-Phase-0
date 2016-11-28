// Codeshare

function analyzeDyingMessage(code) {
  var res = [], med = [], indexOf = [], med2 = [], med3 = [], med4 = [], med5 = [];
  med = code.split("");
  var codeC = med.indexOf("C"), codeO = med.indexOf("O", codeC), codeD = med.indexOf("D", codeO), codeE = med.indexOf("E", codeD);
  if (code.match(/[C](.+)?[O](.+)?[D](.+)?[E](.+)?/)) {
    indexOf.push(med.indexOf("C"));
    indexOf.push(med.indexOf("O", codeC));
    indexOf.push(med.indexOf("D", codeO));
    indexOf.push(med.indexOf("E", codeD));
  }
  else {
    res = "CODE INVALID!";
    return res;
  }
  if (med.indexOf("C") !== 0) {
    for (var q = 0; q < 5; q++) {
      med2[q] = "";
      med4[q] = "";
      med5[q] = "";
    }
    for (var i = 0; i < codeC; i++) {
      med2[0] += med[i];
    }
    for (var k = codeC; k < codeO; k++) {
      med2[1] += med[k];
    }
    for (var l = codeO; l < codeD; l++) {
      med2[2] += med[l];
    }
    for (var m = codeD; m < codeE; m++) {
      med2[3] += med[m];
    }
    for (var n = codeE; n < med.length; n++) {
      med2[4] += med[n];
    }
  }
  else {
    for (var j = 0; j < 4; j++) {
      med2[j] = "";
      med4[j] = "";
      med5[j] = "";
    }
    for (var r = codeC; r < codeO; r++) {
      med2[0] += med[r];
    }
    for (var s = codeO; s < codeD; s++) {
      med2[1] += med[s];
    }
    for (var t = codeD; t < codeE; t++) {
      med2[2] += med[t];
    }
    for (var u = codeE; u < med.length; u++) {
      med2[3] += med[u];
    }
  }
  for (var o = 0; o < med2.length; o++) {
    med3[o] = med2[o].split("");
    for (var p = 1 ; p < med2[o].length; p++) {
      med4[o] += med3[o][p].toLowerCase();
    }
    med5[o] += med3[o][0] + med4[o];
  }
  res = med5.join(" ");
  return res;
}

console.log(analyzeDyingMessage("CHARLESOXDONEULER")); // "Charles Ox Don Euler"
console.log(analyzeDyingMessage("CODIMARIJAMO")); // false
console.log(analyzeDyingMessage("CODE")); // "C O D E"
console.log(analyzeDyingMessage("CODING")); // false
console.log(analyzeDyingMessage("CHAMICAELOTNIELDAN")); // false
console.log(analyzeDyingMessage("CHAMICAELOTNIELDANELLAINE")); // "Chamicael Otniel Dan Ellaine"
console.log(analyzeDyingMessage("MARIAHCHARLIEOZIEDELEANOR")); // "Mariah Charlie Ozie D Eleanor"

function evaluateSlotMachine(diceResultArr) {
  var res = "", cash = 0, comp = [];
  for (var i = 0; i < diceResultArr.length; i++) {
    if (i === 0) {
      comp.push(diceResultArr[0]);
    }
    else if (comp.indexOf(diceResultArr[i]) == -1) {
      comp.push(diceResultArr[i]);
    }
  }
  if (diceResultArr[0] != diceResultArr[1] && diceResultArr[0] != diceResultArr[2] && diceResultArr[1] != diceResultArr[2]) {
    res = "YOU LOSE";
  }
  else if (comp.length == 2) {
    cash = (diceResultArr[0] * 100) + (diceResultArr[1] * 100) + (diceResultArr[2] * 100);
    res = "YOU WIN " + cash + " DOLLARS";
  }
  else if (diceResultArr[0] == diceResultArr[1] && diceResultArr[0] == diceResultArr[2] && diceResultArr[1] == diceResultArr[2]) {
    cash = (diceResultArr[0] * 200) + (diceResultArr[1] * 200) + (diceResultArr[2] * 200);
    res = "YOU WIN " + cash + " DOLLARS";
  }
  return res;
}

console.log(evaluateSlotMachine([1, 1, 2])); // "YOU WIN 400 DOLLARS"
console.log(evaluateSlotMachine([1, 1, 1])); // "YOU WIN 600 DOLLARS"
console.log(evaluateSlotMachine([5, 5, 5])); // "YOU WIN 3000 DOLLARS"
console.log(evaluateSlotMachine([6, 3, 3])); // "YOU WIN 1200 DOLLARS"
console.log(evaluateSlotMachine([1, 3, 2])); // "YOU LOSE"

function hackFox(num) {
  var res = "";
  if (num % 2 !== 0 && num % 3 !== 0) {
    res = "SALAH";
  }
  else if (num % 2 === 0 && num % 3 !== 0) {
    res = "HACK";
  }
  else if (num % 3 === 0 && num % 2 !== 0) {
    res = "FOX";
  }
  else if (num % 2 === 0 && num % 3 === 0){
    res = "HACKFOX";
  }
  return res;
}

console.log(hackFox(5)); // "SALAH"
console.log(hackFox(2)); // "HACK"
console.log(hackFox(8)); // "HACK"
console.log(hackFox(9)); // "FOX"
console.log(hackFox(9)); // "FOX"
console.log(hackFox(12)); // "HACKFOX"
console.log(hackFox(18)); // "HACKFOX"
console.log(hackFox(131)); // "SALAH"

function isKillerTarget(civilianIDParam) {
  var a = civilianIDParam.replace(/Nama:/g,"").replace(/Kota:/g,"");
  var c = a.split(",");
  var d = c[0].split(" ");
  var d1 = d[0];
  var d2 = d1.split("");
  var e = a.split(",");
  var f = e[1];
  var f1 = f.split("");
  if (d2[0] == f1[0]) {
    return true;
  }
  else {
    return false;
  }
}

var civilianID1 = "Nama:Alice Ascher,Kota:Andover";
console.log(civilianID1);
console.log(isKillerTarget(civilianID1));

var civilianID2 = "Nama:Cathy Barnard Barnacle,Kota:Andover";
console.log(civilianID2);
console.log(isKillerTarget(civilianID2));

function rollDice(diceResultsParam) {
 var a = [], cash = 0;
  a = diceResultsParam;
  console.log(a);
  for (var i = 0; i < a.length; i++) {
    if (a[i] == 1) {
      cash += (-1000) * 1;
    }

    else {
      cash += (100 * a[i]);
    }
  }
  return cash;
}

var diceResults1 = [2, 3, 4];
console.log(rollDice(diceResults1));

var diceResults2 = [3, 3, 1];
console.log(rollDice(diceResults2));

var diceResults3 = [1, 6, 6];
console.log(rollDice(diceResults3));

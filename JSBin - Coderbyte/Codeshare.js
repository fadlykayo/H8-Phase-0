// Codeshare

function nextTargetArea(code) {
  var med = [], med2 = [], med3 = [], res = "", num = 0;
  med2 = code.slice().split("");
  if (code.indexOf("W") != -1) {
    med2.filter(isiArray => {
      if (isiArray === "W") {
        med.push("TWO");
        return true;
      }
    });
  }
  if (code.indexOf("H") != -1 && code.indexOf("R") != -1) {
    med2.filter(isiArray => {
      if (isiArray === "R") {
        med.push("THREE");
        return true;
      }
    });
  }
  if (code.indexOf("U") != -1) {
    med2.filter(isiArray => {
      if (isiArray === "U") {
        med.push("FOUR");
        return true;
      }
    });
  }
  if (code.indexOf("X") != -1) {
    med2.filter(isiArray => {
      if (isiArray === "X") {
        med.push("SIX");
        return true;
      }
    });
  }
  if (code.indexOf("V") != -1) {
    med2.filter(isiArray => {
      if (isiArray === "V") {
        med.push("SEVEN");
        return true;
      }
    });
  }
  if (code.indexOf("G") != -1) {
    med2.filter(isiArray => {
      if (isiArray === "G") {
        med.push("EIGHT");
        return true;
      }
    });
  }
  med3 = med.join(",").replace(/,/g, "");
  if (med3.length != code.length) {
    var indexOfThree = med.indexOf("THREE");
    med.splice(indexOfThree, 1);
  }
  for (var i = 0; i < med.length; i++) {
    if (med[i] == "TWO") {
      num += 2;
    }
    if (med[i] == "THREE") {
      num += 3;
    }
    if (med[i] == "FOUR") {
      num += 4;
    }
    if (med[i] == "SIX") {
      num += 6;
    }
    if (med[i] == "SEVEN") {
      num += 7;
    }
    if (med[i] == "EIGHT") {
      num += 8;
    }
  }
  console.log(med);
  res = "District " + num + " is the next target!";
  return res;
}
console.log(nextTargetArea('WTO')); // "District 2 is the next target!"
console.log(nextTargetArea('WTWTHROETEOTWO')); // "District 7 is the next target!"
console.log(nextTargetArea('HSEVTEEINGFOUR')); // "District 15 is the next target!"
console.log(nextTargetArea('FNEXSIVUSEORTHREE')); // "District 17 is the next target!"

/*
// Cara lain nextTargetArea

function nextTargetArea(code) {
  var med = [], res = "", num = 0;
  if (code.indexOf("T") != -1 && code.indexOf("W") != -1 && code.indexOf("O") != -1) {
    med.push("TWO");
    let med2 = code.slice().split("");
    for (var j = 0; j < med2.length; j++) {
      var indexRemoveW = med2.indexOf("W");
      med2.splice(indexRemoveW, 1);
      if ((med2.indexOf("W") != -1) === true) {
        med.push("TWO");
      }
    }
  }
  if (code.indexOf("T") != -1 && code.indexOf("H") != -1 && code.indexOf("R") != -1 && code.indexOf("E") != -1) {
    med.push("THREE");
    let med2 = code.slice().split("");
    for (var l = 0; l < med2.length; l++) {
      var indexRemoveR = med2.indexOf("R");
      med2.splice(indexRemoveR, 1);
      if ((med2.indexOf("R") != -1) === true) {
        med.push("THREE");
      }
    }

  }
  if (code.indexOf("F") != -1 && code.indexOf("O") != -1 && code.indexOf("U") != -1 && code.indexOf("R") != -1) {
    med.push("FOUR");
    let med2 = code.slice().split("");
    for (var l = 0; l < med2.length; l++) {
      var indexRemoveU = med2.indexOf("U");
      med2.splice(indexRemoveU, 1);
      if ((med2.indexOf("U") != -1) === true) {
        med.push("FOUR");
      }
    }
  }
  if (code.indexOf("S") != -1 && code.indexOf("I") != -1 && code.indexOf("X") != -1) {
    med.push("SIX");
    let med2 = code.slice().split("");
    for (var m = 0; m < med2.length; m++) {
      var indexRemoveX = med2.indexOf("X");
      med2.splice(indexRemoveX, 1);
      if ((med2.indexOf("X") != -1) === true) {
        med.push("SIX");
      }
    }
  }
  if (code.indexOf("S") != -1 && code.indexOf("E") != -1 && code.indexOf("V") != -1 && code.indexOf("N") != -1) {
    med.push("SEVEN");
    let med2 = code.slice().split("");
    for (var n = 0; n < med2.length; n++) {
      var indexRemoveV = med2.indexOf("V");
      med2.splice(indexRemoveV, 1);
      if ((med2.indexOf("V") != -1) === true) {
        med.push("SEVEN");
      }
    }
  }
  if (code.indexOf("E") != -1 && code.indexOf("I") != -1 && code.indexOf("G") != -1 && code.indexOf("H") != -1 && code.indexOf("T") != -1) {
    med.push("EIGHT");
    let med2 = code.slice().split("");
    for (var o = 0; o < med2.length; o++) {
      var indexRemoveG = med2.indexOf("G");
      med2.splice(indexRemoveG, 1);
      if ((med2.indexOf("G") != -1) === true) {
        med.push("EIGHT");
      }
    }
  }
  var med3 = med.join(",").replace(/,/g, "");
  if (med3.length != code.length) {
    var indexOfThree = med.indexOf("THREE");
    med.splice(indexOfThree, 1);
  }
  for (var i = 0; i < med.length; i++) {
    if (med[i] == "TWO") {
      num += 2;
    }
    if (med[i] == "THREE") {
      num += 3;
    }
    if (med[i] == "FOUR") {
      num += 4;
    }
    if (med[i] == "SIX") {
      num += 6;
    }
    if (med[i] == "SEVEN") {
      num += 7;
    }
    if (med[i] == "EIGHT") {
      num += 8;
    }
  }
  console.log(med);
  res = "District " + num + " is the next target!";
  return res;
}
*/


// class Rocket {
//   constructor (name, version) {
//     if (typeof name == "string") {
//       this.name = name;
//     }
//     if (typeof version == "number") {
//       this.version = version;
//     }
//     this.astronauts = [];
//   }
//   setRocketName (rocketName) {
//     if (typeof rocketName == "string") {
//       this.name = rocketName;
//     }
//   }
//   setRocketVersion (rocketVersion) {
//     if (typeof rocketVersion == "number") {
//       this.version = rocketVersion;
//     }
//   }
//   addRocketCrew (astronautName) {
//     if (typeof astronautName == "string") {
//       this.astronauts.push(astronautName);
//     }
//   }
//   getAstronautsNames() {
//     let toString = this.astronauts.toString();
//     return toString;
//   }

//   getRocketInfo() {
//     if (this.astronauts.length <= 1) {
//       let output = "Rocket Name: " + this.name + ", Version: " + this.version + " Astronauts: " + this.astronauts.length + " person"
//       return output
//     }
//     else {
//       let output = "Rocket Name: " + this.name + ", Version: " + this.version + " Astronauts: " + this.astronauts.length + " persons"
//       return output
//     }
//   }
// }

// const apolloEleven = new Rocket('Apollo Eleven', 11);
// console.log(apolloEleven.getRocketInfo()); // "Rocket Name: Apollo Eleven, Version 11, Astronauts: 0 person".

// apolloEleven.setRocketName('Apollo Eleven Update X');
// apolloEleven.setRocketVersion(12);
// console.log(apolloEleven.getRocketInfo()); // "Rocket Name: Apollo Eleven Update X, Version 12, Astronauts: 0 person".

// apolloEleven.addRocketCrew("Neil");
// apolloEleven.addRocketCrew("James");
// console.log(apolloEleven.getRocketInfo()); // "Rocket Name: Apollo Eleven Update X, Version 12, Astronauts: 2 persons".
// console.log(apolloEleven.getAstronautsNames()); // "Neil, James"

// function dealWithTheJoker(playerResultArr, jokerResultArr) {
//   var score = 0, score2 = 0, comp = [], comp2 = [], arrCount = [], arrCount2 = [], res = "", count = 1;
//   for (var i = 0; i < playerResultArr.length; i ++) {
//      if (comp.indexOf(playerResultArr[i]) == -1) {
//       comp.push(playerResultArr[i]);
//       arrCount.push(count);
//     }
//     else {
//       arrCount[comp.indexOf(playerResultArr[i])] += count;
//     }
//   }
//   for (var k = 0; k < arrCount.length; k++) {
//     if (arrCount[k] == 2) {
//       score += 1;
//     }
//     if (arrCount[k] == 3) {
//       score += 2;
//     }
//     if (arrCount[k] == 4) {
//       score += 3;
//     }
//   }
//   console.log("Player: " + score);
//   for (var j = 0; j < jokerResultArr.length; j ++) {
//      if (comp2.indexOf(jokerResultArr[j]) == -1) {
//       comp2.push(jokerResultArr[j]);
//       arrCount2.push(count);
//     }
//     else {
//       arrCount2[comp2.indexOf(jokerResultArr[j])] += count;
//     }
//   }
//   for (var l = 0; l < arrCount2.length; l++) {
//     if (arrCount2[l] == 2) {
//       score2 += 1;
//     }
//     if (arrCount2[l] == 3) {
//       score2 += 2;
//     }
//     if (arrCount2[l] == 4) {
//       score2 += 3;
//     }
//   }
//   console.log("Joker: " + score2);
//   if (score < score2) {
//     res = "LOSE";
//   }
//   if (score == score2) {
//     res = "DRAW";
//   }
//   if (score > score2) {
//     res = "WIN";
//   }
//   return res;
// }

// console.log(dealWithTheJoker([2, 2, 3, 3, 5], [5, 5, 5, 5, 2])); // LOSE
// console.log(dealWithTheJoker([3, 2, 3, 3, 2], [2, 3, 4, 5, 6])); // WIN
// console.log(dealWithTheJoker([5, 2, 5, 5, 5], [2, 2, 2, 3, 1])); // WIN
// console.log(dealWithTheJoker([3, 8, 3, 3, 8], [3, 4, 5, 6, 7])); // WIN
// console.log(dealWithTheJoker([8, 8, 8, 8, 9], [2, 2, 2, 2, 6])); // DRAW
// console.log(dealWithTheJoker([5, 5, 3, 4, 2], [8, 7, 2, 4, 7])); // DRAW
// console.log(dealWithTheJoker([9, 3, 2, 2, 9], [5, 5, 5, 5, 2])); // LOSE

// function arrangePairs(studentsArr) {
//   var pairs = [];
//   if (studentsArr.length % 2 !== 0) {
//     studentsArr.push("Instruktur");
//     for (var i = 0; i < studentsArr.length-1; i++) {
//       pairs.push(studentsArr[i] + " dan " + studentsArr[i+1]);
//     }
//     for (var k = 1; k < pairs.length; k += 2) {
//       pairs.splice(k, 1);
//     }
//   }
//   else {
//     for (var j = 0; j < studentsArr.length-1; j++) {
//       pairs.push(studentsArr[j] + " dan " + studentsArr[j+1]);
//     }
//     for (var l = 1; l < pairs.length; l += 2) {
//       pairs.splice(l, 1);
//     }
//   }
//   return pairs;
// }

// console.log(arrangePairs(['Yani', 'Joni', 'Doni', 'Roni'])); // ['Yani dan Joni', 'Doni dan Roni']
// console.log(arrangePairs(['James', 'Jake', 'Jade'])); // ['James dan Jake', 'Jade dan Instruktur']
// console.log(arrangePairs(['Tori', 'Nori', 'Sori', 'Wori', 'Mori'])); // ['Tori dan Nori', 'Sori dan Wori', 'Mori dan Instruktur'];
// console.log(arrangePairs(['Rudi'])); // ['Rudi dan Instruktur']
// console.log(arrangePairs([])); // []

// function foxEars(foxs) {
//   if ( foxs === 0) {
//     return 0;
//   }
//   else {
//     return 2 + foxEars(foxs-1);
//   }
// }

// console.log(foxEars(3)); // 6
// console.log(foxEars(6)); // 12
// console.log(foxEars(4)); // 8
// console.log(foxEars(0)); // 0

// function analyzeDyingMessage(code) {
//   var res = [], med = [], indexOf = [], med2 = [], med3 = [], med4 = [], med5 = [];
//   med = code.split("");
//   var codeC = med.indexOf("C"), codeO = med.indexOf("O", codeC), codeD = med.indexOf("D", codeO), codeE = med.indexOf("E", codeD);
//   //cari tau pake cara loop
//   if (code.match(/[C](.+)?[O](.+)?[D](.+)?[E](.+)?/)) {
//     indexOf.push(med.indexOf("C"));
//     indexOf.push(med.indexOf("O", codeC));
//     indexOf.push(med.indexOf("D", codeO));
//     indexOf.push(med.indexOf("E", codeD));
//   }
//   else {
//     res = "CODE INVALID!";
//     return res;
//   }
//   if (med.indexOf("C") !== 0) {
//     for (var q = 0; q < 5; q++) {
//       med2[q] = "";
//       med4[q] = "";
//       med5[q] = "";
//     }
//     for (var i = 0; i < codeC; i++) {
//       med2[0] += med[i];
//     }
//     for (var k = codeC; k < codeO; k++) {
//       med2[1] += med[k];
//     }
//     for (var l = codeO; l < codeD; l++) {
//       med2[2] += med[l];
//     }
//     for (var m = codeD; m < codeE; m++) {
//       med2[3] += med[m];
//     }
//     for (var n = codeE; n < med.length; n++) {
//       med2[4] += med[n];
//     }
//   }
//   else {
//     for (var j = 0; j < 4; j++) {
//       med2[j] = "";
//       med4[j] = "";
//       med5[j] = "";
//     }
//     for (var r = codeC; r < codeO; r++) {
//       med2[0] += med[r];
//     }
//     for (var s = codeO; s < codeD; s++) {
//       med2[1] += med[s];
//     }
//     for (var t = codeD; t < codeE; t++) {
//       med2[2] += med[t];
//     }
//     for (var u = codeE; u < med.length; u++) {
//       med2[3] += med[u];
//     }
//   }
//   for (var o = 0; o < med2.length; o++) {
//     //med3[o] = med2[o].split("");
//     for (var p = 1 ; p < med2[o].length; p++) {
//       med4[o] += med2[o][p].toLowerCase();
//     }
//     med5[o] += med2[o][0] + med4[o];
//   }
//   console.log(med4);
//   console.log(med5);
//   res = med5.join(" ");
//   return res;
// }

// console.log(analyzeDyingMessage("CHARLESOXDONEULER")); // "Charles Ox Don Euler"
// console.log(analyzeDyingMessage("CODIMARIJAMO")); // false
// console.log(analyzeDyingMessage("CODE")); // "C O D E"
// console.log(analyzeDyingMessage("CODING")); // false
// console.log(analyzeDyingMessage("CHAMICAELOTNIELDAN")); // false
// console.log(analyzeDyingMessage("CHAMICAELOTNIELDANELLAINE")); // "Chamicael Otniel Dan Ellaine"
// console.log(analyzeDyingMessage("MARIAHCHARLIEOZIEDELEANOR")); // "Mariah Charlie Ozie D Eleanor"

// /*
// // Cara lain Live Coding 3rd Week

// function analyzeDyingMessage(code){
// 	code = code.toLowerCase();
// 	c=0;
// 	o=0;
// 	d=0;
// 	e=0;
// 	hasil=[];
// 	for(i=0;i<code.length;i++){
// 		if(c===0 && code[i]==='c'){
// 			if(code[0]==='c'){
// 				hasil.push('C');
// 			}
// 			else{
// 				hasil.push(' C');
// 			}
// 			c=1;
// 		}
// 		else if(c===1 && o===0 && code[i]==='o'){
// 			hasil.push(' O');
// 			o=1;
// 		}
// 		else if(o===1 && d===0 && code[i]==='d'){
// 			hasil.push(' D');
// 			d=1;
// 		}
// 		else if(d===1 && e===0 &&code[i]==='e'){
// 			hasil.push(' E');
// 			e=1;
// 		}
// 		else{
// 			hasil.push(code[i]);
// 		}
// 	}
// 	if(hasil[0]!=='C'){
// 		hasil.splice(0,1,hasil[0].toUpperCase());
// 	}
// 	if(c+o+d+e!==4){
// 		return false;
// 	}
// 	else{
// 		return hasil.join('');
// 	}
// }
// */

// function evaluateSlotMachine(diceResultArr) {
//   var res = "", cash = 0, comp = [];
//   for (var i = 0; i < diceResultArr.length; i++) {
//     if (i === 0) {
//       comp.push(diceResultArr[0]);
//     }
//     else if (comp.indexOf(diceResultArr[i]) == -1) {
//       comp.push(diceResultArr[i]);
//     }
//   }
//   if (diceResultArr[0] != diceResultArr[1] && diceResultArr[0] != diceResultArr[2] && diceResultArr[1] != diceResultArr[2]) {
//     res = "YOU LOSE";
//   }
//   else if (comp.length == 2) {
//     cash = (diceResultArr[0] * 100) + (diceResultArr[1] * 100) + (diceResultArr[2] * 100);
//     res = "YOU WIN " + cash + " DOLLARS";
//   }
//   else if (diceResultArr[0] == diceResultArr[1] && diceResultArr[0] == diceResultArr[2] && diceResultArr[1] == diceResultArr[2]) {
//     cash = (diceResultArr[0] * 200) + (diceResultArr[1] * 200) + (diceResultArr[2] * 200);
//     res = "YOU WIN " + cash + " DOLLARS";
//   }
//   return res;
// }

// console.log(evaluateSlotMachine([1, 1, 2])); // "YOU WIN 400 DOLLARS"
// console.log(evaluateSlotMachine([1, 1, 1])); // "YOU WIN 600 DOLLARS"
// console.log(evaluateSlotMachine([5, 5, 5])); // "YOU WIN 3000 DOLLARS"
// console.log(evaluateSlotMachine([6, 3, 3])); // "YOU WIN 1200 DOLLARS"
// console.log(evaluateSlotMachine([1, 3, 2])); // "YOU LOSE"

// function hackFox(num) {
//   var res = "";
//   if (num % 2 !== 0 && num % 3 !== 0) {
//     res = "SALAH";
//   }
//   else if (num % 2 === 0 && num % 3 !== 0) {
//     res = "HACK";
//   }
//   else if (num % 3 === 0 && num % 2 !== 0) {
//     res = "FOX";
//   }
//   else if (num % 2 === 0 && num % 3 === 0){
//     res = "HACKFOX";
//   }
//   return res;
// }

// console.log(hackFox(5)); // "SALAH"
// console.log(hackFox(2)); // "HACK"
// console.log(hackFox(8)); // "HACK"
// console.log(hackFox(9)); // "FOX"
// console.log(hackFox(9)); // "FOX"
// console.log(hackFox(12)); // "HACKFOX"
// console.log(hackFox(18)); // "HACKFOX"
// console.log(hackFox(131)); // "SALAH"

// function isKillerTarget(civilianIDParam) {
//   var a = civilianIDParam.replace(/Nama:/g,"").replace(/Kota:/g,"");
//   var c = a.split(",");
//   var d = c[0].split(" ");
//   var d1 = d[0];
//   var d2 = d1.split("");
//   var e = a.split(",");
//   var f = e[1];
//   var f1 = f.split("");
//   if (d2[0] == f1[0]) {
//     return true;
//   }
//   else {
//     return false;
//   }
// }

// var civilianID1 = "Nama:Alice Ascher,Kota:Andover";
// console.log(civilianID1);
// console.log(isKillerTarget(civilianID1));

// var civilianID2 = "Nama:Cathy Barnard Barnacle,Kota:Andover";
// console.log(civilianID2);
// console.log(isKillerTarget(civilianID2));

// function rollDice(diceResultsParam) {
//  var a = [], cash = 0;
//   a = diceResultsParam;
//   console.log(a);
//   for (var i = 0; i < a.length; i++) {
//     if (a[i] == 1) {
//       cash += (-1000) * 1;
//     }

//     else {
//       cash += (100 * a[i]);
//     }
//   }
//   return cash;
// }

// var diceResults1 = [2, 3, 4];
// console.log(rollDice(diceResults1));

// var diceResults2 = [3, 3, 1];
// console.log(rollDice(diceResults2));

// var diceResults3 = [1, 6, 6];
// console.log(rollDice(diceResults3));

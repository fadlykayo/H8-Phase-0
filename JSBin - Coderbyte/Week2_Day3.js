// Hello, World!

// Cara 1

// var arrString = [prompt("Input: ")];
var arrString = "hello, world!";

function balikString(parString) {
  var splitString = parString.split("");
  splitString.reverse();
  var joinString = splitString.join("");
  return joinString;
}
var resString = balikString(arrString);
console.log(resString);

// Cara 2

var length = arrString.length;

function balikString2(parString) {
  var a = parString.length-1;
  var resString = [];
  for(var i = a; i >= 0; i--) {
    resString += parString[i];
  }
  return resString;
}
var resString2 = balikString2(arrString);
console.log(resString2);

// Cara 3
function FirstReverse(str) {
    var a = str.length-1;
    var b = [];
    for(var i = a; i >= 0; i--) {
        b.push(str[i]);
    }
    var c = b.join("");
    return c;
}
var resString3 = FirstReverse(arrString);
console.log(resString3);

/*
var balikstring = function(str){

  spl = str.split('');
  splNew='';
  for (var i = str.length-1; i>=0; i--) {
    //splNew =splNew + spl[i];
    splNew += spl[i] + "";
 }
 console.log(splNew);
}
balikstring('hello, world!');


function balikString3(first, second) {
  return first < second;
}
var arrInt = [1, 0, 3, 2];
balikString3(arrInt);
console.log(arrInt);
*/

// Data Handling

var mainArr = [];

function dataHandling(anArr) {
  var panjang = anArr.length;
  for(var i = 0; i < panjang; i++) {
    console.log("Nomor ID: " + anArr[i][0]);
    console.log("Nama Lengkap: " + anArr[i][1]);
    console.log("TTL: " + anArr[i][2] + " " + anArr[i][3]);
    console.log("Hobby: " + anArr[i][4]);
    console.log("");
  }
  var arr1 = [], arr2 = [], arr3 = [], arr4 = [], arr5 = [];
  for(var j = 0; j < panjang; j++) {
    arr1.push(anArr[j][0]);
    arr2.push(anArr[j][1]);
    arr3.push(anArr[j][2]);
    arr4.push(anArr[j][3]);
    arr5.push(anArr[j][4]);
  }
  mainArr = [arr1, arr2, arr3, arr4, arr5];
  console.log(mainArr);
}

var input = [["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
             ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
             ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
             ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]];

dataHandling(input);

function dataEditing(anArr) {
  mainArr[0].splice(3, 1, "0005", "0006", "0007");
  mainArr[1].splice(3, 1, "I Made Sanadhi Sutandi", "Nufus", "Sani");
  mainArr[2].splice(3, 1, 'Denpasar', 'Muaro Bungo', 'Jakarta');
  mainArr[3].splice(3, 1, '13/9/1994', '10/8/1994', '19/7/1994');
  mainArr[4].splice(3, 1, 'Belajar', 'Melukis', 'Touring');
  console.log(mainArr);
}

dataEditing(input);

var bulan = [];

for(var k = 0; k < mainArr[3].length; k++) {
  bulan.push(mainArr[3][k].split("/")[1]);
}

for(var m = 0; m < bulan.length; m++) {
  if (parseInt(bulan[m]) == 1 ) {
    bulan[m] = "Januari";
  }
  else if ((parseInt(bulan[m]) == 2 )){
    bulan[m] = "Februari";
  }
  else if ((parseInt(bulan[m]) == 3 )){
    bulan[m] = "Maret";
  }
  else if ((parseInt(bulan[m]) == 4 )){
    bulan[m] = "April";
  }
  else if ((parseInt(bulan[m]) == 5 )){
    bulan[m] = "Mei";
  }
  else if ((parseInt(bulan[m]) == 6 )){
    bulan[m] = "Juni";
  }
  else if ((parseInt(bulan[m]) == 7 )){
    bulan[m] = "Juli";
  }
  else if ((parseInt(bulan[m]) == 8 )){
    bulan[m] = "Agustus";
  }
  else if ((parseInt(bulan[m]) == 9 )){
    bulan[m] = "September";
  }
  else if ((parseInt(bulan[m]) == 10 )){
    bulan[m] = "Oktober";
  }
  else if ((parseInt(bulan[m]) == 11 )){
    bulan[m] = "November";
  }
  else if ((parseInt(bulan[m]) == 12 )){
    bulan[m] = "Desember";
  }
}
bulan.sort();
mainArr[1].sort();
mainArr[2].sort();
mainArr[3].sort();
mainArr[4].sort();
mainArr[0].sort();

console.log("Daftar Nama: ");
for(var n = 0; n < mainArr[1].length; n++) {
  var m = n+1;
  console.log(m + " - " + mainArr[1][n]);
}
console.log("");
console.log("Semua Tempat Lahir: ");
console.log(mainArr[2].toString());
console.log("");
console.log("Semua Bulan Kelahiran: ");
console.log(bulan.toString());
console.log("");
console.log("Semua Hobi: ");
console.log(mainArr[4].toString());


/*[
    [ '0001', '0002', '0003', '0005', '0006', '0007' ],
    [ 'Roman Alamsyah', 'Dika Sembiring', 'Winona', 'I Made Sanadhi Sutandi', 'Nufus', 'Sani' ],
    [ 'Bandar Lampung', 'Medan', 'Ambon', 'Denpasar', 'Muaro Bungo', 'Jakarta' ],
    [ '21/05/1989', '10/10/1992', '25/12/1965', '13/9/1994', '10/8/1994', '19/7/1994' ],
    [ 'Membaca', 'Bermain Gitar', 'Memasak', 'Belajar', 'Melukis', 'Touring' ]
]*/

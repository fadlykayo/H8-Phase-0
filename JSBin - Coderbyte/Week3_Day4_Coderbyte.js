// Week 3, Day 4

function ArithGeo(arr) {
  var a = [], b = [], result = "";
  for (var i = 0; i < arr.length-1; i++) {
    var j = i+1;
    a[i] = arr[j] - arr[i];
    b[i] = arr[j] / arr[i];
  }
  console.log(arr);
  console.log(a);
  console.log(b);
  for (var k = 0; k < arr.length-2; k++) {
    var m = k+1;
    if (a[m] == a[k]) {
      console.log("Arithmetic");
      result = "Arithmetic";
    }
    else if (b[m] == b[k]) {
      console.log("Geometric");
      result = "Geometric";
    }
    else {
      console.log("-1");
      return "-1";
    }
  }
  console.log(result);
  return result;
}

var arr1 = [2, 6, 18, 54, 162, 486];
ArithGeo(arr1);

/*
// Cara lain ArithGeo (@gana)

function ArithGeo(arr) {
  return (arr[1] - arr[0] === arr[arr.length-1] - arr[arr.length-2]) ? 'Arithmetic' :
    (arr[1] / arr[0] === arr[arr.length-1] / arr[arr.length-2]) ? 'Geometric' : '-1';
}
var arr = [2,4,8,16];
console.log(ArithGeo(arr));
*/

function PowersOfTwo(num) {
  var a = [];
  for(var i = 1; i <= num; i++) {
    a[i-1] = Math.pow(2,i);
    if (num <= a[i-1]) { // jd num harus sama kyk a[i-1] baru true, kalo lebih kecil brati false
      if (num % a[i-1] === 0) {
        console.log(num + " true");
        return true;
      }
      else {
        console.log(num + " false");
        return false;
      }
    }
  }
}
var str = 1023;
PowersOfTwo(str);

// Cara lain PowersOfTwo

/*
var i = 0;
  do{
    if (Math.pow(2, i)==num)
      return "true";
    if (Math.pow(2, i)>num)
      return "false"
    i++;
  }while(true)

function PowersofTwo(num) {
  var a = [], b = "";
  for(var i = 1; i <= num; i++) {
    a[i-1] = Math.pow(2,i);
    if (num >= a[i-1]) {
      if (num % a[i-1] === 0) {
        b = true;
      }
      else {
        b = false;
        return b;
      }
    }
  }
  console.log(b);
  return b;
}

var num = 120;
PowersofTwo(num);
*/

function LargestPair(num) {
  console.log(num);
  var a = [], b = "", c = [];
  b = num.toString();
  for(var i = 0; i < b.length-1; i++) {
    a[i] = b.substr(i,2); // atau: b.slice(i,i+2);
    c[i] = parseInt(a[i]);
  }
  c.sort(function(a, b){return b-a;});
  console.log(c);
  console.log(c[0]);
  return c[0];
}
var num1 = 2568542;
LargestPair(num1);

function PowerSetCount(arr) {
  var a = 0, b = 0;
  a = arr.length;
  b = Math.pow(2,a);
  //console.log(b);
  return b;
}

var arr1 = [1,2,3];
PowerSetCount(arr1);

/*
// deret array

function PowerSetCount(arr) {
var a = [[]], b = [];
  for(var i = 0; i < arr.length; i++) {
    a.push(arr.slice(i, i+1));
  }
  for(var m = 0; m <= arr.length; m++) {
    b.push(a[m]);
  }
  for(var j = 1; j <= arr.length; j++) {
    for(var k = j; k <= arr.length; k++) {
      if (a[j] != a[k]) {
        b.push(a[j].concat(a[k]));
      }
    }
  }
  console.log(b);
  return a;
}

var str = [1,2,3,4];
PowerSetCount(str);

  j = 1 -> k = 1,2,3,4
  j = 2 -> k = 2,3,4
  j = 3 -> k = 3,4
  j = 4 -> k = 4

  [[], [1], [2], [3], [4],
  [1, 2], [1, 3], [1, 4],
  [2, 3], [2, 4],
  [3, 4]]
*/

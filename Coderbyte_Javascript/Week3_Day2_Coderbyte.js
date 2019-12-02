// Week 3, Day 2

function CheckNums(num1,num2) {
  if (num2 > num1) {
      return "true";
  }
  else if (num2 == num1) {
      return "-1";
  }
  else {
      return "false";
  }
}

function FirstReverse(str) {
  var a = str.length-1;
  var b = [];
  for(var i = a; i >= 0; i--) {
    b.push(str[i]);
  }
  var c = b.join("");
  return c;
}

function TimeConvert(num) {
  var a = num / 60;
  var b = parseInt(a);
  var c = num % 60;
  return b + ":" + c;
}

// Cara 1
function ExOh(str) {
  console.log(str);
  var a = [], b = [];
  a = str.match(/x/g);
  b = str.match(/o/g);
  if (a === null || b === null) {
    console.log("false");
    return false;
  }
  console.log(a + " ? " + b);
  if (a.length == b.length) {
    console.log("true");
    return true;
  }
  else {
    console.log("false");
    return false;
  }
}

var str = "";
ExOh(str);

// Cara 2
function ExOh2(str) {
  console.log(str);
  var a = [];
  a = str.split("");
  var b = 0, c = 0;
  for(var i = 0; i < str.length; i++) {
    if (a[i] == "x") {
      b++
    }
    else {
      c++
    }
  }
  console.log(b + " ? " + c);
  if (b == c && b !== 0 && c !== 0) {
    console.log("true");
    return true;
  }
  else {
    console.log("false");
    return false;
  }
}
ExOh2(str);

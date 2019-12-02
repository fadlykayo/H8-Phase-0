// Week 3, Day 3

function VowelCount(str) {
  var a = [], b = 0;
  a = str.split("");
  for(var i = 0; i < a.length; i++) {
      if (a[i].toLowerCase() == "a" || a[i].toLowerCase() == "i" || a[i].toLowerCase() == "u" || a[i].toLowerCase() == "e" || a[i].toLowerCase() == "o") {
          b++;
      }
  }
  return b;
}

function OtherProducts(arrPar) {
 var a = [], b = [], c = "", length = arrPar.length;
  for(var j = 0; j < length; j++) {
    a.push(arrPar[j]);
    b[j] = 1;
  }
  for(var i = 0; i < length; i++) {
    a.splice(i, 1);
    console.log(a);
    for (var m = 0; m < length-1; m++) {
      b[i] *= a[m];
    }
    a.splice(i, 0, arrPar[i]);
  }
  console.log(b);
  for(var k = 0; k < length; k++) {
    if (k != length-1) {
      c += b[k] + "-";
    }
    else {
      c += b[k];
    }
  }
  console.log(c);
  return c;
}
var arr = [1,2,3,4,5];
OtherProducts(arr);

function Palindrome(str) {
  var res = str.replace(/ /g,"");
  var spl = res.split("");
  spl.reverse();
  var join = spl.join("")
  if (join == res) {
      return true;
  }
  else {
      return false;
  }
}

function WordCount(str) {
  var res = str.split(" ");
  return res.length;
}

/*
// other product solutions

function OtherProducts(arr) {
	var result = [];
	var total = arr.reduce(function (a, b) {
		return a * b;
    console.log(total);
	});
	for (var i = 0; i < arr.length; i++) {
		result.push(total / arr[i]);
	}
	//return total;
	return result.join("-");
}
*/

// Coderbyte Week 4, Day 2

function ABCheck(str) {
  var c = str.split("");
  var a = [], b = [];
  for(var i = 0; i < c.length; i++) {
    if (c[i] == "a") {
      a.push(i);
    }
    else if (c[i] == "b") {
      b.push(i);
    }
  }
  var res = "";
  console.log(a);
  console.log(b);
  if (b.length === 0 || a.length === 0) {
    res = "false";
  }
  for(var j = 0; j < b.length; j++) {
    for (var k = 0; k < a.length; k++) {
      if (b[j] - a[k] == 4 || a[k] - b[j] == 4) {
        console.log("true");
        return "true";
      }
      else {
        res = "false";
      }
    }
  }
  console.log(res);
  return res;
}

var str = "laura basdsbd";
ABCheck(str);

function AlphabetSoup(str) {
 var arr = str.replace(/ /g,"");
  var spl = arr.split("");
  spl.sort();
  var join = spl.join("");
  return join;
}

function ProductDigits(num) {
  var div = [1, 2, 3, 4, 5, 6, 7, 8, 9], res = [], res2 = [], count = 0;
  for (var i = 0; i < div.length; i++) {
    res.push((num / div[i]).toString());
  }
  console.log(res);
  res.sort(function (a,b) {return a.length - b.length;});
  for (var j = 0; j < res.length; j++) {
    res2.push(res[j].replace(".", ""));
  }
  console.log(res2);
  count = res2[0].length;
  console.log(count+1);
  return count + 1;
}

var num = 24;
ProductDigits(num);

function SwapCase(str) {
  var med = [], res = "";
  med = str.split("");
  console.log(med);
  for (var i = 0; i < str.length; i++) {
    if(/[A-Z]/.test(med[i])) {
      med[i] = med[i].toLowerCase();
    }
    else if (/[a-z]/.test(med[i])) {
      med[i] = med[i].toUpperCase();
    }
  }
  res = med.join("");
  console.log(res);
  return res;
}

var str = "Sup DUDE!!?";
SwapCase(str);

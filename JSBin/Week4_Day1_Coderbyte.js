// Coderbyte Week 4, Day 1

function LongestWord(sen) {
  var med = [], longestWord = "";
  med = sen.match(/\w+/gi);
  console.log(med);
  for (var i = 0; i < med.length; i++) {
    if (med[i].length > longestWord.length) {
      longestWord = med[i];
    }
  }
  console.log(longestWord);
  return longestWord;
}
var str = "a confusing /:sentences:/[ this is not!!!!!!!~123456789";
LongestWord(str);

/*
// Cara lain LongestWord (gak 100% bener -> sort angka)

function LongestWord(sen) {
  var res = [], a = "";
  res = sen.match(/\w+/gi);
  console.log(res);
  if (res.length == 1) {
    a = res.toString();
  }
  else {
    res.sort(function (a, b) {return b.length - a.length || a.localeCompare(b);});
  }
  console.log(res[0]);
  return res[0];
}

"hello world". The correct answer is hello.
"this is some sort of sentence". The correct answer is sentence.
"coderbyte". The correct answer is coderbyte.
"123456789 98765432". The correct answer is 123456789.
"a b c dee". The correct answer is dee.
"a confusing /:sentence:/[ this is not!!!!!!!~". The correct answer is confusing.
*/

function SimpleSymbols(str) {
  var medium = [], comp = [], res = "";
  medium = str.split("");
  console.log(medium);
  for(var i = 0; i < medium.length; i++) {
    if(/[a-z]/i.test(medium[i])) {
      comp.push(medium[i-1] + medium[i] + medium[i+1]);
    }
  }
  console.log(comp);
  for(var j = 0; j < comp.length; j++) {
    if(/\+[a-z]\+/i.test(comp[j])) {
      res = "true";
    }
    else {
      console.log("false");
      return "false";
    }
  }
  console.log(res);
  return res;
}

var str2 = "+z+z+z+z=z+z+";
SimpleSymbols(str2);

/*
// Cara lain SimpleSymbols (ga 100% benar -> kalo z dempet)

function SimpleSymbols(str) {
  var medium = [], res = "";
  medium = str.match(/(\+?[a-z]\+?)+/gi);
  console.log(medium);
  function checkPlus(plus) {
    return plus.match(/(^[+][a-z+]+[+]$)/i); // bisa juga (\+)
  }
  res = medium.every(checkPlus);
  console.log(res.toString());
  return res.toString();
}

*/

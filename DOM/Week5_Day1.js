// Week 5, Day 1

var header1 = document.getElementById('fill-me');
header1.innerHTML = "HALO!";

var par = document.getElementsByClassName("change-all-of-me");
for (var i = 0; i < par.length; i++) {
  par[i].innerHTML = "HALO JUGA!";
}

var header2 = document.getElementsByTagName("h2");
header2[0].innerHTML = "Apa Kabar!";

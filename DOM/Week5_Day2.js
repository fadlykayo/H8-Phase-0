// Week 5, Day 2

var parentDiv1 = document.getElementById("eldest-parent");
parentDiv1.children[0].innerHTML= "Diakses Melalui Eldest Parent";

var siblingDiv2 = document.getElementById("a-child");
siblingDiv2.previousElementSibling.innerHTML = "Diakses Melalui a Child";
siblingDiv2.nextElementSibling.innerHTML = "Diakses Melalui a Child";
siblingDiv2.parentNode.parentNode.nextElementSibling.innerHTML = "Diakses Melalui a Child";

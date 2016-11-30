var parentDiv1 = document.getElementById("eldest-parent");
parentDiv1.children[0].innerHTML= "Diakses Melalui Eldest Parent";
var siblingDiv2 = document.getElementById("a-child");
siblingDiv2.previousElementSibling.innerHTML = "Diakses Melalui a Child";
siblingDiv2.nextElementSibling.innerHTML = "Diakses Melalui a Child";
siblingDiv2.parentNode.parentNode.nextElementSibling.innerHTML = "Diakses Melalui a Child";


/*
Saya Adalah Keturunan Pertama menjadi Diakses Melalui Eldest Parent
Saya adalah Generasi Termuda, yang paling Tua menjadi Diakses Melalui a Child
Saya adalah Generasi Termuda, yang Paling Muda menjadi Diakses Melalui a Child
Saya adalah Generasi yang Cukup Tua menjadi Diakses Melalui a Child

children, parentNode, nextElementSibling, previousElementSibling, dan innerHTML()
*/

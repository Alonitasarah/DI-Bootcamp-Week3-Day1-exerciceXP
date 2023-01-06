//récuperer un élément 
let elementDiv = document.getElementById("container");
console.log(elementDiv);

//Changer un élément 
document.querySelector(".list").children[1].textContent = "richard";

//Remplacer un élément
let  elementLists = document.querySelectorAll(".list");
elementLists.forEach(list  =>  list.firstElementChild.textContent = "ben");

//Supprimer un élément
elementLists[1].children[1].remove();

//Ajouter une classe
elementLists.forEach(list => list.classList.add("student_list"))
let firstUl = document.querySelector('ul.list.student_list');
firstUl.classList.add("university","attendance");

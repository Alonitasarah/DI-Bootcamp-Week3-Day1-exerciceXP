let elementDiv = document.getElementById('navBar')
  elementDiv.setAttribute("name" , "socialNetworkNavigation ");
  console.log(elementDiv);

  let elementli = document.createElement("li");
  console.log(elementli);
  elementA = document.createElement('a');
  elementA.href ='http://www.marlins.com';

  let newelement = document.createTextNode("Deconnexion");
      console.log(newelement);
      
  let elementUl = document.querySelector("ul");
  elementUl = elementli.appendChild(newelement);
   console.log(elementUl);
   
   let firstElem = elementUl.firstElementChild;
   console.log(firstElem);

let lastElem = elementUl.lastElementChild;
   
   console.log(lastElem);

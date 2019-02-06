function MenuItem(name, kcal, gluten, lactose, stock, img){
  this.name = name;
  this.kcal = kcal;
  this.gluten = gluten;
  this.lactose = lactose;
  this.stock = stock;
  this.img = img;
  
  this.getName = function(){
    return this.name;
  };

  this.getKcal = function(){
    return this.kcal;
  };

  this.containsGluten = function(){
    return this.gluten;
  };

  this.containsLactose = function(){
    return this.lactose;
  };

  this.getStock = function(){
    return this.stock;
  }
}

function createBurgers(){
  let burgerA = new MenuItem("Super Mac", 1000, true, true, 10, "https://gunaxin.com/wp-content/uploads/gallery/big-burgers/big_burgers_006.jpg");
  let burgerB = new MenuItem("Floss Burger", 500, true, true, 10, "https://media.giphy.com/media/ctNJp7PTRuRNTREyTj/giphy.gif");
  let burgerC = new MenuItem("Vego Burger", 700, false, false, 10, "http://www.freakingnews.com/pictures/107000/Green-Burger--107341.jpg");
  let burgerD = new MenuItem("Flugsvampen", 700, true, false, 10, "http://media.graytvinc.com/images/810*526/burger-king-angry-whopper-cnn.jpg");
  let burgerE = new MenuItem("Gluten Tag", 700, false, true, 10, "https://www.mommyhatescooking.com/wp-content/uploads/2012/03/burger2.jpg");

  let burgers = [burgerA, burgerB, burgerC, burgerD, burgerE];

  return burgers;
}
// let myElement = document.getElementById("js-loop");
// for (i in burgers){
//   if (burgers[i].stock > 0){
//     let listItem = document.createElement("li");
//     let listValue = document.createTextNode(burgers[i].name);
//     listItem.appendChild(listValue);
//     myElement.appendChild(listItem);

//     if(burgers[i].gluten){
//       let pItem = document.createElement("p");
//       let pValue = document.createTextNode("Contains gluten");
//       listItem.appendChild(pValue);
//       myElement.appendChild(pItem);      
//     }
//   }
// }

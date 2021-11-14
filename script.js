var btnAdds = document.getElementsByClassName("plus");
var btnMinus = document.getElementsByClassName("minus");
var btnsCheck = document.getElementsByClassName("check");
var btnsHeart = document.getElementsByClassName("heart");
var btnsTrash = document.getElementsByClassName("trash");
var btn = document.querySelector(".lastcheck");
btn.addEventListener("click", totalprice);

for (var i = 0; i < btnAdds.length; i++) {
  btnAdds[i].addEventListener("click", add);
}
for (var j = 0; j < btnMinus.length; j++) {
  btnMinus[j].addEventListener("click", min);
}
for (var k = 0; k < btnsCheck.length; k++) {
  btnsCheck[k].onclick = total;
}
for (var l = 0; l < btnsHeart.length; l++) {
  btnsHeart[l].onclick = color;
}
for (var m = 0; m < btnsTrash.length; m++) {
  btnsTrash[m].onclick = remove;
}
// increment

function add(event) {
  var btnadd = event.target;
  var parent = btnadd.parentElement.parentElement;
  var quantityTag = parent.querySelector(".quantity");
  var quantity = Number(quantityTag.innerHTML);
  //console.log(quantity);
  quantity++;
  quantityTag.innerHTML = quantity;
}
// decrement

function min(event) {
  var btnMin = event.target;
  var parent = btnMin.parentElement.parentElement;
  var quantityTag = parent.querySelector(".quantity");
  var quantity = Number(quantityTag.innerHTML);

  if (quantity > 0) {
    quantity--;
    quantityTag.innerHTML = quantity;
  } else {
    alert("Quantity can't be decremented");
  }
}
//    total price

function total(event) {
  var btncheck = event.target;

  var trElt = btncheck.parentElement.parentElement;

  var quantityTag = trElt.querySelector(".quantity");
  var quantity = Number(quantityTag.innerHTML);
  var unitPriceTag = trElt.querySelector(".unitPrice");
  var unitPrice = Number(unitPriceTag.innerHTML);
  var totalUnitPrice = unitPrice * quantity;
  var totalUnitPriceTag = trElt.querySelector(".totalUnitPrice");
  var total = Number(totalUnitPriceTag.innerHTML);
  total += totalUnitPrice;
  totalUnitPriceTag.innerHTML = total;
  //   var totalTag = document.getElementById("totalPrice");
  //   var totalPrice = Number(totalTag.innerHTML);
  //   totalPrice += total;
  //   totalTag.innerHTML = totalPrice;

  var btnPlus = trElt.querySelector(".plus");
  var btnMin = trElt.querySelector(".minus");

  if (btncheck.checked) {
    btnPlus.setAttribute("disabled", true);
    btnMin.setAttribute("disabled", true);
  } else {
    btnPlus.removeAttribute("disabled");
    btnMin.removeAttribute("disabled");
    quantityTag.innerHTML = 0;
    totalUnitPriceTag.innerHTML = 0;
  }
}
// color
function color(event) {
  var btnHeart = event.target;

  if (btnHeart.style.color !== "red") {
    btnHeart.style.color = "red";
  } else {
    btnHeart.style.color = "black";
  }
}
//delete
var cellNbr = document.getElementsByClassName("elt");
function remove(event) {
  var btnTrash = event.target;
  //console.log(btnTrash);
  var parElt = btnTrash.parentElement.parentElement;
  //  console.log("grandParent",parElt);
  var GranparElt = parElt.parentElement;
  // console.log(GranparElt);
  if (cellNbr.length > 1) {
    GranparElt.remove(parElt);
  } else {
    alert("Can't delete more!!");
  }
}

// var tableau= GranparElt.parentElement;
// console.log(tableau.length);
// if(cellNbr.length>1)
// tableau.removeChild(GranparElt);
// else
// alert("Can't delete more!!")

function totalprice() {
  //console.log("totalclicked");
  var totaltag = document.getElementById("totalPrice");
  var totalUnitPriceTag = document.getElementsByClassName("totalUnitPrice");
  let sum = 0;

  for (let i = 0; i < totalUnitPriceTag.length; i++) {
    sum += Number(totalUnitPriceTag[i].innerHTML);
  }
  //console.log(sum);
  totaltag.innerHTML = sum;
}

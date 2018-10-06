var IHProducts = [];

/*  { name: 'Iron BubbleHead', price: 49.99 }
  , { name: 'Iron Shirt', price: 9.99 }
  , { name: 'Iron Cup', price: 6.99 }
  , { name: 'Iron Cup Holder', price: 12.95 }
  , { name: 'Iron Sticker', price: 12.95 }
  , { name: 'Iron Axe', price: 12.95 }
  */

function deleteItem(e){

}

function getPriceByProduct(itemNode){

}

function updatePriceByProduct(productPrice, index){

}

function getTotalPrice() {

}

function createQuantityInput(){

}

function createDeleteButton(){

}

function createQuantityNode(){

}

function createItemNode(dataType, itemData){

}

function createNewItemRow(itemName, itemUnitPrice){
  var pRec = {
    name: itemName,
    price: itemUnitPrice,
    qty: 0
  };
  IHProducts.push(pRec);
  console.log(IHProducts);
  // Add to our HTML display
  var newProdHTML = `
  <div name="productWrapper" class="wrapper">
    <div class="div-inline" name="productName"><span>{NAME}</span></div>
    <div class="div-inline" name="costPer"><span>{UNITPRICE}</span></div>
    <div class="div-inline" name="orderQty">
      <label name="labelQty">Qty</label>
      <input type="text" id="{QTYNAME}" size="6" name="qty" />
    </div>
    <div class="div-inline" name="subTotal">
      <span id="{SUBTNAME}">0.00</span>
    </div>
    <div class="div-inline div-right">
      <input type="button" class="btn btn-delete" value="Delete" />
    </div>
  </div>
  `;
  newProdHTML = newProdHTML.replace('{NAME}',itemName);
  newProdHTML = newProdHTML.replace('{UNITPRICE}',itemUnitPrice);
  var newIndex = IHProducts.length;
  var qtyName = "qty" + newIndex;
  var subtName = "subt" + newIndex;
  newProdHTML = newProdHTML.replace('{QTYNAME}',qtyName);
  newProdHTML = newProdHTML.replace('{SUBTNAME}',subtName);

  console.log("HTML: " + newProdHTML);
  var allProdDiv = document.getElementById('allProducts');
  allProdDiv.innerHTML = allProdDiv.innerHTML + newProdHTML;
}

function createNewItem(){
  var itemName = document.getElementById("itemName");
  var itemPrice = document.getElementById("itemPrice");
  console.log("Creating new Item Row: " + itemName.value + ", " + itemPrice.value);
  createNewItemRow(itemName.value,itemPrice.value);
  itemName.value = "";
  itemPrice.value = 0.00;
}

/* BONUS STUFF not part of Lab assignment! Just for fun ;) */
var myColors = [
  '#FF0000',
  '#660000',
  '#330000',
  '#FF3333',
  '#FF6666',
  '#AA0000',
  '#FF2020',
  '#FFb0b0',
  '#FFcccc'
];
// Generates a random color in hexadecimal (ie. #62b9cc)
function generateRandomColor() {
  // return '#'+Math.floor(Math.random()*16777215).toString(16);
  return myColors[Math.floor(Math.random()*myColors.length)];
}

function changeColor() {
  var storeHeadline = document.getElementById("storeName");
  storeHeadline.style.color = generateRandomColor();
}

/* End of BONUS STUFF */


window.onload = function(){
  var calculatePriceButton = document.getElementById('calc-prices-button');
  var createItemButton = document.getElementById('new-item-create');
  var deleteButtons = document.getElementsByClassName('btn-delete');

  calculatePriceButton.onclick = getTotalPrice;
  createItemButton.onclick = createNewItem;

  for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }
  setInterval(changeColor, 500);
};

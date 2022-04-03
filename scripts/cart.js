let data = JSON.parse(localStorage.getItem("cartData")) || [];
console.log(data);

let totalMrp = 0;
let totalDiscount = 0;
// totalPrice.push(data.offer_price);
for (var i = 0; i < data.length; i++) {
  totalMrp += Number(data[i].mrp_price);
  totalDiscount += Number(data[i].mrp_price) - Number(data[i].offer_price);
}

let totalAmount = totalMrp - totalDiscount;

console.log(totalMrp, totalDiscount);

function appendData(data) {
  console.log(data);
  data.forEach(function (elem) {
    let imge = document.createElement("img");
    imge.src = elem.image;

    let name = document.createElement("h4");
    name.innerHTML = elem.title;

    let price_box = document.createElement("span");
    price_box.setAttribute("id", "priceSection");

    let sale_price = document.createElement("span");
    sale_price.setAttribute("class", "offerPrice");
    sale_price.innerHTML = `Rs. ${elem.offer_price}`;

    let actual_price = document.createElement("span");
    actual_price.setAttribute("class", "mrp");
    actual_price.innerHTML = `Rs. ${elem.mrp_price}`;

    price_box.append(sale_price, actual_price);

    let delivery = document.createElement("p");
    delivery.innerHTML = "Delivery between April 6- April 7";

    let remove = document.createElement("button");
    remove.setAttribute("id", "removeBtn");
    remove.innerHTML = "REMOVE";

    let saveForLater = document.createElement("button");
    saveForLater.setAttribute("id", "saveBtn");
    saveForLater.innerHTML = "SAVE FOR LATER";

    let mainDiv = document.createElement("div");
    mainDiv.setAttribute("class", "buyItem");

    document.getElementById("cart-items").append(mainDiv);
    mainDiv.append(imge, name, price_box, delivery, remove, saveForLater);
  });
}

function payment(totalMrp, totalDiscount, totalAmount) {
  let payment_title = document.createElement("p");
  payment_title.innerHTML = "Payment Details";

  let mrp_div = document.createElement("div");
  mrp_div.setAttribute("class", "mrpTotal");
  let mrp_title = document.createElement("span");
  mrp_title.setAttribute("class", "priceTitle");
  mrp_title.innerHTML = "MRP Total";
  let mrp_value = document.createElement("span");
  mrp_value.innerHTML = `Rs.${totalMrp}`;
  mrp_div.append(mrp_title, mrp_value);

  let dis_div = document.createElement("div");
  dis_div.setAttribute("class", "disTotal");
  let dis_title = document.createElement("span");
  dis_title.setAttribute("class", "priceTitle");
  dis_title.innerHTML = "Netmeds Discount";
  let dis_value = document.createElement("span");
  dis_value.innerHTML = `Rs.${totalDiscount}`;
  dis_div.append(dis_title, dis_value);

  let amount_div = document.createElement("div");
  amount_div.setAttribute("class", "amountTotal");
  let amt_title = document.createElement("span");
  amt_title.setAttribute("class", "amtTitle");
  amt_title.innerHTML = "Total Amount*";
  let amt_value = document.createElement("span");
  amt_value.innerHTML = `Rs.${totalAmount}`;
  amount_div.append(amt_title, amt_value);

  let order = document.createElement("div");
  order.setAttribute("id", "process_order");
  let pay_amount = document.createElement("p");
  pay_amount.innerHTML = `Total Amount Rs.${totalAmount}`;
  let orderBtn = document.createElement("button");
  orderBtn.setAttribute("class", "order_btn");
  orderBtn.innerText = "PROCEED";
  order.append(pay_amount, orderBtn);

  document
    .getElementById("payment")
    .append(payment_title, mrp_div, dis_div, amount_div, order);
}

appendData(data);
payment(totalMrp, totalDiscount, totalAmount);

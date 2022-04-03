let limited_deals_data = [
  {
    image:
      "https://www.netmeds.com/images/product-v1/150x150/930971/skin_elements_face_pack_turmeric_multani_mitti_100_gm_0_2.jpg",
    discount: "38% OFF",
    title: "Skin Elements Face Pack - Turmeric & Multani Mitti 100 gm",
    offer_price: "247.38",
    mrp_price: "399.00",
  },
  {
    image:
      "https://www.netmeds.com/images/product-v1/150x150/924985/skin_elements_mens_intimate_wash_60_ml_0_2.jpg",
    discount: "38% OFF",
    title: "Skin Elements Men's Intimate Wash 60 ml",
    offer_price: "247.38",
    mrp_price: "399.00",
  },
  {
    image:
      "https://www.netmeds.com/images/product-v1/150x150/924992/skin_elements_mens_intimate_wash_120_ml_0_2.jpg",
    discount: "40% OFF",
    title: "Skin Elements Men's Intimate Wash 120 ml",
    offer_price: "419.40",
    mrp_price: "699.00",
  },
  {
    image:
      "https://www.netmeds.com/images/product-v1/150x150/927520/prolixr_daily_essentials_bundle_0_0.jpg",
    discount: "20% OFF",
    title: "Prolixr Daily Essential Bundle",
    offer_price: "1837.60",
    mrp_price: "2297.00",
  },
  {
    image:
      "https://www.netmeds.com/images/product-v1/150x150/835774/accu_chek_instant_test_strips_50_s_0.jpg",
    discount: "15% OFF",
    title: "Accu-Chek Instant Test Strips 50's",
    offer_price: "828.75",
    mrp_price: "975.00",
  },
  {
    image:
      "https://www.netmeds.com/images/product-v1/150x150/38061/b_protin_nutritional_powder_supplement_chocolate_500_gm_0.jpg",
    discount: "12% OFF",
    title: "B-Protin Nutritional Powder Supplement - Chocolate 500 gm",
    offer_price: "462.00",
    mrp_price: "525.00",
  },
];
var cart_data = JSON.parse(localStorage.getItem("cartData")) || [];
function addToCart(item) {
  console.log(item);
  document.getElementById("addToCartBtn").textContent = "ADDED TO CART";
  limited_deals_data.forEach(function (elem) {
    if (item === elem.title) {
      cart_data.push(elem);
    }
  });

  console.log(cart_data);
  localStorage.setItem("cartData", JSON.stringify(cart_data));
}

// function appendProduct() {
//   let mainDiv = document.getElementById("items");

//   wellness_data.forEach(function (elem) {
//     let imgdiv = document.createElement("div");
//     imgdiv.setAttribute("class", "category_img");
//     let image = document.createElement("img");
//     image.src = elem.image;
//     let imgspan = document.createElement("span");
//     imgspan.innerHTML = elem.discount;
//     imgdiv.append(image, imgspan);

//     let name = document.createElement("div");
//     name.setAttribute("class", "category_name");
//     name.innerHTML = elem.title;

//     let priceSection = document.createElement("span");
//     priceSection.setAttribute("class", "item_price");
//     let bestPrice = document.createElement("span");
//     bestPrice.innerHTML = "Best price*";
//     let finalPrice = document.createElement("span");
//     finalPrice.setAttribute("id", "final_price");
//     finalPrice.innerHTML = elem.offer_price;
//     let mrpTag = document.createElement("p");
//     mrpTag.setAttribute("class", "price");
//     mrpTag.innerHTML = "MRP";
//     let strikePrice = document.createElement("strike");
//     strikePrice.setAttribute("id", "price");
//     strikePrice.innerHTML = elem.mrp_price;
//     mrpTag.append(strikePrice);
//     priceSection.append(bestPrice, finalPrice, mrpTag);

//     let btn = document.createElement("button");
//     btn.setAttribute("id", "addToCartBtn");
//     btn.innerHTML = "ADD TO CART";
//     btn.addEventListener("click", addToCart);

//     // console.log(imgdiv, name, priceSection, btn);

//     console.log(mainDiv);

//     // let swipe = document.getElementsByClassName("swiper-slide");
//     items.append(imgdiv, name, priceSection, btn);
//     // mainDiv.append(imgdiv, name, priceSection, btn);
//   });
//   console.log(mainDiv);
// }
// export default appendProduct();

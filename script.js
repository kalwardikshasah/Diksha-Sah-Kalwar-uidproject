let slideIndex = 0;
showSlides();

function showSlides() {
  let slides = document.getElementsByClassName("slide");

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slideIndex++;
  if (slideIndex > slides.length) { slideIndex = 1 }

  slides[slideIndex - 1].style.display = "block";

  setTimeout(showSlides, 3000);
}
let cart = JSON.parse(localStorage.getItem("cart")) || [];
let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

function addToCart(product){
  cart.push(product);
  localStorage.setItem("cart", JSON.stringify(cart));
  document.getElementById("cart-count").innerText = cart.length;
}

function addToWishlist(product){
  wishlist.push(product);
  localStorage.setItem("wishlist", JSON.stringify(wishlist));
  document.getElementById("wish-count").innerText = wishlist.length;
}
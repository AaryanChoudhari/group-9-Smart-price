// ===============================
// SmartPrice - script.js
// ===============================

// Search Product
function searchProduct() {

    let input = document.getElementById("searchInput");

    if (input == null) {
        return;
    }

    let product = input.value.trim();

    if (product === "") {
        alert("Please enter a product name.");
        return;
    }

    alert("Searching for: " + product);

    // Redirect to compare page
    window.location.href = "compare.html";
}



// Price Alert

function setAlert() {

    let price = document.getElementById("targetPrice");

    if (price == null) {
        return;
    }

    if (price.value == "") {

        alert("Please enter your target price.");

        return;
    }

    alert("Price Alert Set Successfully!\nTarget Price: ₹" + price.value);

    price.value = "";
}



// Add to Wishlist

function addWishlist(productName) {

    alert(productName + " added to Wishlist ❤️");

}



// Remove Wishlist

function removeWishlist(productName) {

    alert(productName + " removed from Wishlist.");

}



// Contact Form

function sendMessage() {

    alert("Thank you for contacting SmartPrice.\nWe will get back to you soon.");

}



// Login

function loginUser() {

    alert("Login Successful!");

}



// Register

function registerUser() {

    alert("Registration Successful!");

}



// Page Loaded

window.onload = function () {

    console.log("Welcome to SmartPrice");

};



// Highlight Active Menu

let currentPage = window.location.pathname.split("/").pop();

let links = document.querySelectorAll("nav ul li a");

links.forEach(function(link){

    if(link.getAttribute("href") === currentPage){

        link.classList.add("active");

    }

});



// Product Button Click

let buttons = document.querySelectorAll(".product-card button");

buttons.forEach(function(btn){

    btn.addEventListener("mouseover",function(){

        btn.style.transform="scale(1.05)";

    });

    btn.addEventListener("mouseout",function(){

        btn.style.transform="scale(1)";

    });

});



// Simple Welcome Message

console.log("SmartPrice Website Loaded Successfully.");



// Current Date in Console

let today = new Date();

console.log("Today's Date : " + today.toDateString());



// Footer Year (Optional)

let footer = document.querySelector("footer p");

if(footer){

    footer.innerHTML =
    "© " +
    new Date().getFullYear() +
    " SmartPrice | Compare Prices & Save Money";

}
'use strict';

// CONSTANTS & VARIABLES
const elements = {};

// FUNCTIONS
const domMapping = () => {
   elements.main = document.querySelector(".main");
   elements.addButtons = document.querySelector(".btnAdd");

   elements.cart = document.querySelector(".cart-container");
   elements.table = document.querySelector("#cart-table");
   elements.quant = document.querySelector("#items-quantity");
   elements.total = document.querySelector("#total");

   elements.footer = document.querySelector(".footer");
}

const init = () => {
   domMapping();
   initCart();
   getProducts();
   // initFooter();
}

// INITIALIZE
init();
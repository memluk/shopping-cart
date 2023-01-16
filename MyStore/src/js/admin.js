'use strict';

// CONSTANTS & VARIABLES
const elements = {};

const productList = [];

// FUNCTIONS
const domMapping = () => {
  elements.formInput = document.querySelector('#newProductForm');
}

// const initForm = () => {}
// const renderForm = () => {}

const appendEventlisteners = () => {
  elements.formInput.addEventListener('submit', submitHandler);
}

const submitHandler = (event) => {
  event.preventDefault(); // helps to see the result by preventing default event settings

  const newItem = {
    id: "",
    title: "",
    imgURL: "",
    info: {
      os: ``,
      cpu: ``,
      vga: ``,
      screen: ``,
      hdd: ``,
      ram: ``,
    },
    price: "",
  }
  
  newItem.id = document.querySelector('#productId').value;
  newItem.title = document.querySelector('#productName').value;
  newItem.imgURL = document.querySelector('#imgURL').value;
  newItem.info.os = document.querySelector('#operatingSystem').value;
  newItem.info.cpu = document.querySelector('#processor').value;
  newItem.info.vga = document.querySelector('#graphics').value;
  newItem.info.screen = document.querySelector('#display').value;
  newItem.info.hdd = document.querySelector('#storage').value;
  newItem.info.ram = document.querySelector('#memory').value;
  newItem.price = document.querySelector('#productPrice').value;

  productList.push(newItem);
  console.log(productList);

  emptyForm();
}

const emptyForm = () => {
  document.querySelector('#productId').value = '';
}

const init = () => {
  domMapping();
  // initForm();
  // renderForm();
  appendEventlisteners();
}

// INIT
document.addEventListener("DOMContentLoaded", init);
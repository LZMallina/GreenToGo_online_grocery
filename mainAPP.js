
//local API are stored in folder(selection) and object(produceAPI.js).  Since it is local, we use import and export function rather than fetch json or xhttp to retrieve API from another server.

//In javascript, import keyword can only be used in a module.  

//declare import

import {selections,meat,bakedGoods,dairy,fruits,juice,vegetable} from './selections/produceAPI.js';


/**function to display all elements upon windows open */

window.addEventListener("DOMContentLoaded", function () {
    displaySelectionCategories();
});//<--end of window.addEventListner

/*function to control the elements inside selection-container*/
//upon window opens, the produce selection automatically display

let select = document.querySelector('.selection-container');

function displaySelectionCategories() {
const displaySelection = selections.map(function (item) {
        return `<article class = "selection" data-id =${item.category} onclick ="openProduce()">
            <a href ="#${item.category}">
                <img src =${item.img} alt = ${item.img} class = "picture">
                <figcaption class ="category">${item.category}</figcaption>
            </a>
        </article>`;
    }).join("");
    select.innerHTML = displaySelection;

    /*Instead of creating each app.js for different produce, we need to automatically upload and update the produce.  See if we can create a function for that.  */

    let produceSelection = document.querySelectorAll('.selection');

    //console.log(produceSelection)

   produceSelection.forEach(function (btn) {
     btn.addEventListener('click', function (e) {
         const selectionCat = e.currentTarget.dataset.id;
         let produce = [];
         if (selectionCat.includes('MEAT')) {
             produce = [...meat];
         } else if (selectionCat.includes('VEGETABLE')) {
             produce = [...vegetable]
         }else if (selectionCat.includes('DAIRY')) {
             produce = [...dairy]
         }else if (selectionCat.includes('BAKED')) {
             produce = [...bakedGoods]
         }else if (selectionCat.includes('FRUITS')) {
             produce = [...fruits]
         }else if (selectionCat.includes('JUICE')) {
             produce = [...juice]
         } else {
             produce = [];
         }
    //pass produce into other functions as arguments
          displayProductItems(produce);
          displayProduceCategories(produce)
    })
   })//<--end of produceSelection

}//<---end of displaySelectionCategories


/*function to control the elements inside produce-container*/
//unpon window open, the window automatically display the produce categories buttons.

const produceFilterBTN = document.querySelector('.produce-btn-container');

function displayProduceCategories(produce) {
    
    const produceCategories = produce.reduce(function (btnBank, item) {
        if (!btnBank.includes(item.category)) {
            btnBank.push(item.category);
        }
    return btnBank;

    }, ['ALL']);
   
    const categoryBTNs = produceCategories.map(function (item) {
        return `
        <button class = "produce-filter-btn" type = "button" data-id = ${item}>${item}</button>
            `;
    }).join('');
    produceFilterBTN.innerHTML = categoryBTNs

    const filterBtns = document.querySelectorAll('.produce-filter-btn');

    filterBtns.forEach(function (btn) {
    btn.addEventListener('click', function (e) {
        const produceCat = e.currentTarget.dataset.id;
        
        const productCat = produce.filter(function (produceItem) {
            if (produceItem.category.includes(produceCat)) {
                return produceItem;
            }
        });
        if (produceCat === "ALL") {
             displayProductItems(produce)
        } else {
            displayProductItems(productCat)
        }
    })
})

}//<---end of function displayProduceCategories

/*functions to control the elements inside product-container*/
//upon window display, the products within a produce selection are displayed.

 const productSelection = document.querySelector('.product-container');

function displayProductItems(produceItem) {
    
     let displayProduct = produceItem.map(function (item) {
        return `<article class = "product">
            
            <button id = "buy">BUY</button><br>
            <img src = ${item.img} alt = ${item.category} class ="picture">
            <h5>${item.title}</h5>
            <h5>$${item.price} / ${item.unit}</h5>
        </article>`;
    });
    displayProduct = displayProduct.join("");
    productSelection.innerHTML = displayProduct;
}//<-end of displayProductItems










const menuItems = [
    {
        itemType: "breakfast",
        itemName: "ButterMilk Pancakes",
        itemPhoto: "/js-projects/MENU/Photos/breakfast/buttermilk_pancakes.jpg",
        itemPrice: 9.99,
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque eveniet voluptates ducimus modi, dignissimos rerum inventore veniam vitae. Molestiae, iure qui quasi repellat cum voluptate!"
    },
    {
        itemType: "lunch",
        itemName: "Veggie Pasta",
        itemPhoto: "/js-projects/MENU/Photos/lunch/veggiepasta.jpg",
        itemPrice: 21.99,
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque eveniet voluptates ducimus modi, dignissimos rerum inventore veniam vitae. Molestiae, iure qui quasi repellat cum voluptate!"
    },
    {
        itemType: "shakes",
        itemName: "Strawberry",
        itemPhoto: "/js-projects/MENU/Photos/shakes/strawberry_shake.jpg",
        itemPrice: 8.99,
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque eveniet voluptates ducimus modi, dignissimos rerum inventore veniam vitae. Molestiae, iure qui quasi repellat cum voluptate!"
    },
    {
        itemType: "breakfast",
        itemName: "Bacon Sandwich",
        itemPhoto: "/js-projects/MENU/Photos/breakfast/baconsandwich.jpg",
        itemPrice: 5.99,
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque eveniet voluptates ducimus modi, dignissimos rerum inventore veniam vitae. Molestiae, iure qui quasi repellat cum voluptate!"
    },
    {
        itemType: "lunch",
        itemName: "Burger Pack",
        itemPhoto: "/js-projects/MENU/Photos/lunch/burgerpack.jpg",
        itemPrice: 17.99,
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque eveniet voluptates ducimus modi, dignissimos rerum inventore veniam vitae. Molestiae, iure qui quasi repellat cum voluptate!"
    },
    {
        itemType: "shakes",
        itemName: "Coconut",
        itemPhoto: "/js-projects/MENU/Photos/shakes/coconut_shake.jpg",
        itemPrice: 8.99,
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque eveniet voluptates ducimus modi, dignissimos rerum inventore veniam vitae. Molestiae, iure qui quasi repellat cum voluptate!"
    },
    {
        itemType: "breakfast",
        itemName: "Coffee",
        itemPhoto: "/js-projects/MENU/Photos/breakfast/coffee.jpg",
        itemPrice: 3.99,
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque eveniet voluptates ducimus modi, dignissimos rerum inventore veniam vitae. Molestiae, iure qui quasi repellat cum voluptate!"
    },
    {
        itemType: "lunch",
        itemName: "Salad",
        itemPhoto: "/js-projects/MENU/Photos/lunch/salad.jpg",
        itemPrice: 21.99,
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque eveniet voluptates ducimus modi, dignissimos rerum inventore veniam vitae. Molestiae, iure qui quasi repellat cum voluptate!"
    },
    {
        itemType: "shakes",
        itemName: "Watermelon",
        itemPhoto: "/js-projects/MENU/Photos/shakes/watermelon_shake.jpg",
        itemPrice: 8.99,
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque eveniet voluptates ducimus modi, dignissimos rerum inventore veniam vitae. Molestiae, iure qui quasi repellat cum voluptate!"
    },
    {
        itemType: "dinner",
        itemName: "Steak Combo",
        itemPhoto: "/js-projects/MENU/Photos/dinner/steakcombo.jpg",
        itemPrice: 109.99,
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque eveniet voluptates ducimus modi, dignissimos rerum inventore veniam vitae. Molestiae, iure qui quasi repellat cum voluptate!"
    },
    {
        itemType: "supper",
        itemName: "Roasted Meat and Fried Potatoes",
        itemPhoto: "/js-projects/MENU/Photos/supper/roastedmeatandfriedpotatoes.jpg",
        itemPrice: 19.99,
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque eveniet voluptates ducimus modi, dignissimos rerum inventore veniam vitae. Molestiae, iure qui quasi repellat cum voluptate!"
    },
];

let i = 1;

//to access the space where items are displayed
const itemsContainer = document.querySelector(".items-container");

//to access the space where the buttons are
const buttonsContainer = document.querySelector(".filter-buttons");


window.addEventListener("DOMContentLoaded", function(){
    displayMenuItems(menuItems);
    //reads the info from the menu and reduces it to the unique categories of items
    const categories = menuItems.reduce(function(values,fancyChoice){
        if (!values.includes(fancyChoice.itemType)){
            values.push(fancyChoice.itemType);
        }
        return values;
    }, ["all"]);
    
    //displays the buttons to the screen
    const displayButtons = categories.map(function(eachButton){
        return `<button class="btn" type="button" data-category="${eachButton}">${eachButton}</button>`;
    }).join("");
    buttonsContainer.innerHTML = displayButtons;
    
    //buttons
    const btns = document.querySelectorAll(".btn");

    btns.forEach(function(btn){
        btn.addEventListener("click", function(e){
            //console.log(e.currentTarget.dataset.category);
            const categoryChoice = e.currentTarget.dataset.category;
            const menuCategory = menuItems.filter(function(menuTypeSelected){
                if ( menuTypeSelected.itemType == categoryChoice){
                    return menuTypeSelected;
                }
            });
    
            displayMenuItems(menuCategory); 
            
            if ( categoryChoice === "all"){
                displayMenuItems(menuItems);
            }
        });
    });
    
});


function displayMenuItems(arr){
    let displayMenu = arr.map(function(item){
        //console.log(item);
        return `<div class="item-${i++}">
                    <header class="items-header">
                        <img src="${item.itemPhoto}" alt="photo of item" class="item-photo">
                        <h2 class="items-name">${item.itemName}</h2>
                        <h3 class="items-price" >$${item.itemPrice}</h3>
                    </header>
                    <p class="description">${item.desc}</p>
                </div>`;
    });
    displayMenu = displayMenu.join("");
    itemsContainer.innerHTML = displayMenu;
}
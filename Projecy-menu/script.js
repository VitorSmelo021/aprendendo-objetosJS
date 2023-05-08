const menu = [

  {
    id: 1,
    title: "Buttermiilk Pancakes",
    category: "Breakfast",
    price: 15.99,
    image: "./images/item-1.jpeg",
    description:
      "I'm baby woke milkshak wolf bitters live-edge blue bottle freegan copper whatever cold-pressed.",
  },

  {
    id: 2,
    title: "Diner Double",
    category: "Lunch",
    price: 13.99,
    image: ".images/item-2.jpeg",
    description:
      "Vaporware iphone mumncore selvage raw danim slow-carb leggings gochujang helvetica man braid jianbing.",
  },

  {
    id: 3,
    title: "Godzilla Milkshake",
    category: "Shakes",
    price: 6.99,
    image: ".images/item-3.jpeg",
    description:
      "ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral",
  },

  {
    id: 4,
    title: "Country Delight",
    category: "Breakfast",
    price: 20.99,
    image: ".images/item-4.jpeg",
    description:
      "Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut",
  },

  {
    id: 5,
    title: "Egg Attack",
    category: "Lunch",
    price: 22.99,
    image: ".images/item-5.jpeg",
    description:
      "Franzen vegan pabst bicycle rights licktater pinterest meditation farm-to-table 90's pop-up",
  },

  {
    id: 6,
    title:"Oreo Dream",
    category: "Shakes",
    price: 18.99,
    image: ".images/item-6.jpeg",
    description: "Portland chicharrones ethical edison, palo santo craft beer chia heirloom iphone everyday",
},

{
    id: 7,
    title:"Bacon Overflow",
    category: "Breakfast",
    price: 8.99,
    image: ".images/item-7.jpeg",
    description: "Carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird",
},
{
    id: 8,
    title:"Anerican Classic",
    category: "Lunch",
    price: 12.99,
    image: ".images/item-8.jpeg",
    description: "On it tumblt kickstarter thundercast migas everyday carry squid palo santo leggings. Food truck truffaut",
},

{
    id: 9,
    title:"Quarantine Buddy",
    category: "Shakes",
    price: 16.99,
    image: ".images/item-9.jpeg",
    description: "Skateboard fam synth authetic semiotics. Live-edge lyft af,edison buld yuccie cricifix microdosing",
},

{
    id: 10,
    title:"Stack Dinner",
    category: "Dinner",
    price: 39.99,
    image: ".images/item-10.jpeg",
    description: "Skateboard fam synth authetic semiotics. Live-edge lyft af,edison buld yuccie cricifix microdosing",
},
];


const menuItems = document.querySelector('.menu-itens');
const buttonContainer = document.querySelector('.button-container');

function displayMenuItems(menuItems){
  let displayMenu = menu.map((item) => {
    return
    `
    <div class="item-image">
    <img src="${item.image}" alt="${item.title}" />
  </div>

  <div class="item-info">
    <div class="item-title">
      <p>${item.title}</p>
      <p class="price">${item.price}</p>
    </div>

    <div class="item-description">
      <p>
        ${item.description}
      </p>
    </div>
  </div>
  `
  });

  displayMenu = displayMenu.join("");
}

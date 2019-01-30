


// Start Here: Create a reference to the ".menu" class
 const menu = document.querySelector('.menu');
// create a reference to the ".menu-button" class
 const menuButton = document.querySelector('.menu-button');
var a = 0;

const toggleMenu = () => {
  // Toggle the "menu--open" class on your menu refence. 
  a++;

  if (a % 2 == 1)
    menu.style.display = "flex";
  else 
    menu.style.display = "none";
}

// Using your menuButton reference, add a click handler that calls toggleMenu
menuButton.addEventListener("mousedown", e => {
  console.log(`You clicked on the menu button!`);
  // menuButton.style.color = `blue`;
  // menuButton.style.border = `5px solid black`;
  toggleMenu();
 
});

// Using your menuButton reference, add a click handler that calls toggleMenu
menuButton.addEventListener("mouseleave", e => {
  console.log(`You clicked on the menu button!`);
  // menuButton.style.color = `blue`;
  // menuButton.style.border = `5px solid black`;
  menu.style.display = "none";
 
});

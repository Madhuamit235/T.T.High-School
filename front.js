// Function to toggle the side menu
function toggleMenu() {
    const menu = document.getElementById('side-menu');
    const menuBtn = document.getElementById('menu-btn');
    
    // Open or close the menu
    if (menu.style.width === '250px') {
        menu.style.width = '0';
        menuBtn.style.display = 'block';
    } else {
        menu.style.width = '250px';
        menuBtn.style.display = 'none';
    }
}

// Function to toggle submenus with arrow icon change
function toggleSubMenu(subMenuId, element) {
    const submenu = document.getElementById(subMenuId);
    if (submenu.style.display === 'block') {
        submenu.style.display = 'none'; // Hide submenu
        element.classList.remove('open'); // Change arrow to right
    } else {
        submenu.style.display = 'block'; // Show submenu
        element.classList.add('open'); // Change arrow to down
    }
}
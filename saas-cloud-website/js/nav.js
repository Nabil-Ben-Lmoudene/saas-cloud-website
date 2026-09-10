/*
  NAV.JS
  -----------------
  Handles opening/closing the mobile menu (the hamburger button
  that appears on small screens). Every page includes this file.
*/

// Wait until the page's HTML is fully loaded before looking for elements
document.addEventListener("DOMContentLoaded", function () {
  const menuButton = document.getElementById("menu-button");
  const mobileMenu = document.getElementById("mobile-menu");

  // If a page doesn't have these elements for some reason, don't crash
  if (!menuButton || !mobileMenu) return;

  menuButton.addEventListener("click", function () {
    // Toggle the "is-open" class defined in css/style.css
    mobileMenu.classList.toggle("is-open");

    // Swap the hamburger icon <-> close (X) icon
    const openIcon = document.getElementById("icon-open");
    const closeIcon = document.getElementById("icon-close");
    openIcon.classList.toggle("hidden");
    closeIcon.classList.toggle("hidden");
  });
});

function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

// Get the button
let mybutton = document.getElementById("backToTopBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function scrollToTop() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}


function toggleMode() {
  const body = document.body;
  const desktopBtn = document.getElementById("theme-btn");
  const mobileBtn = document.getElementById("theme-btn-mobile");
  
  // Toggle the class
  body.classList.toggle("dark-mode");

  // Check if dark mode is active to change the icon
  if (body.classList.contains("dark-mode")) {
    desktopBtn.innerHTML = "&#9790;"; // Moon symbol
    if(mobileBtn) mobileBtn.innerHTML = "&#9790;";
  } else {
    desktopBtn.innerHTML = "&#9728;"; // Sun symbol
    if(mobileBtn) mobileBtn.innerHTML = "&#9728;";
  }
}

function openTab(evt, companyName) {
  // 1. Hide all tab content
  var tabContent = document.getElementsByClassName("tab-content");
  for (var i = 0; i < tabContent.length; i++) {
    tabContent[i].style.display = "none";
    tabContent[i].classList.remove("active-content");
  }

  // 2. Remove "active" class from all tab buttons
  var tabLinks = document.getElementsByClassName("tab-btn");
  for (var i = 0; i < tabLinks.length; i++) {
    tabLinks[i].classList.remove("active");
  }

  // 3. Show the current tab, and add "active" class to the button that clicked it
  document.getElementById(companyName).style.display = "block";
  // Add a tiny timeout to allow the display:block to apply before opacity animation
  setTimeout(() => {
    document.getElementById(companyName).classList.add("active-content");
  }, 10);
  
  evt.currentTarget.classList.add("active");
}


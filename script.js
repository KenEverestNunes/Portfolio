function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

let mybutton = document.getElementById("backToTopBtn");

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

function scrollToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0; 
}


function toggleMode() {
  const body = document.body;
  const desktopBtn = document.getElementById("theme-btn");
  const mobileBtn = document.getElementById("theme-btn-mobile");
  
  body.classList.toggle("dark-mode");

  if (body.classList.contains("dark-mode")) {
    desktopBtn.innerHTML = "&#9790;"; 
    if(mobileBtn) mobileBtn.innerHTML = "&#9790;";
  } else {
    desktopBtn.innerHTML = "&#9728;";
    if(mobileBtn) mobileBtn.innerHTML = "&#9728;";
  }
}

function openTab(evt, companyName) {
  var tabContent = document.getElementsByClassName("tab-content");
  for (var i = 0; i < tabContent.length; i++) {
    tabContent[i].style.display = "none";
    tabContent[i].classList.remove("active-content");
  }

  var tabLinks = document.getElementsByClassName("tab-btn");
  for (var i = 0; i < tabLinks.length; i++) {
    tabLinks[i].classList.remove("active");
  }

  document.getElementById(companyName).style.display = "block";
  setTimeout(() => {
    document.getElementById(companyName).classList.add("active-content");
  }, 10);
  
  evt.currentTarget.classList.add("active");
}


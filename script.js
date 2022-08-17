

const icon = document.querySelector(".burger-menu");
const navList = document.querySelector(".nav_list");
const welcomeText = document.querySelector(".welcome-description");
const links = document.querySelectorAll(".hovered_link[data-goto]");

if(links.length > 0) {
  links.forEach(link => {
    link.addEventListener("click", menu);
  });

}



icon.addEventListener("click", menu)

function menu () {
 
  if (icon.classList.contains("active")) {

    navList.classList.remove("active");
    welcomeText.classList.remove("hidden");
    icon.classList.remove("active");

  } else {

    navList.classList.toggle("active");
    welcomeText.classList.toggle("hidden");
    icon.classList.toggle("active"); 
  };
  
};

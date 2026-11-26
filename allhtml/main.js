
// 1. ACTIVE LINK HIGHLIGHT// 
function highlightNav() {
  const links = document.querySelectorAll("#navbar a");
  links.forEach(link => {
    if (link.href === window.location.href) {
      link.classList.add("active");
    }
  });
}
highlightNav();


const header = document.querySelector("#header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 80) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
});


// 3. HERO BUTTON → SHOP PAGE// 
const heroBtn = document.querySelector("#hero button");
if (heroBtn) {
  heroBtn.addEventListener("click", () => {
    window.location.href = "shop.html";
  });
}



// 4. SCROLL REVEAL ANIMATION// 
const revealElements = document.querySelectorAll(".reveal");

function revealOnScroll() {
  revealElements.forEach(el => {
    let position = el.getBoundingClientRect().top;
    let windowHeight = window.innerHeight;

    if (position < windowHeight - 120) {
      el.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();



// 5. PRODUCT CARD HOVER (Smooth Zoom)// 
const cards = document.querySelectorAll(".pro img");

cards.forEach(card => {
  card.addEventListener("mouseenter", () => {
    card.style.transform = "scale(1.06)";
    card.style.transition = ".4s ease";
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "scale(1)";
  });
});



// 6. NEWSLETTER INPUT VALIDATION//
const newsletterBtn = document.querySelector("#newsletter button");
const newsletterInput = document.querySelector("#newsletter input");

if (newsletterBtn) {
  newsletterBtn.addEventListener("click", () => {
    let email = newsletterInput.value.trim();

    if (email === "" || !email.includes("@") || !email.includes(".")) {
      alert("Please enter a valid email address.");
    } else {
      alert("Thank you for subscribing!");
      newsletterInput.value = "";
    }
  });
}


var mainimage = document.getElementById("mainimg");
var smallimage = document.getElementsByClassName("small-img");

// remove "active" class from all
function removeActive() {
    for (let i = 0; i < smallimage.length; i++) {
        smallimage[i].classList.remove("active");
    }
}

for (let i = 0; i < smallimage.length; i++) {
    smallimage[i].onclick = function () {

        removeActive();                 
        this.classList.add("active");   

        mainimage.classList.add("fade");  

        setTimeout(() => {
            mainimage.src = this.src;     
            mainimage.classList.remove("fade"); 
        }, 200);
    }
}


// =========================
// HEALTHCARE MEDICALS
// script.js
// =========================

// Loader
window.addEventListener("load", () => {
    const loader = document.querySelector(".loader");

    if(loader){
        setTimeout(() => {
            loader.style.display = "none";
        }, 1500);
    }
});

// Mobile Menu
const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector("nav");

if(menuBtn){
    menuBtn.addEventListener("click", () => {
        nav.classList.toggle("active");
    });
}

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e){
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if(target){
            target.scrollIntoView({
                behavior: "smooth"
            });
        }

        nav.classList.remove("active");
    });
});

// Navbar Shadow
window.addEventListener("scroll", () => {
    const header = document.querySelector("header");

    if(window.scrollY > 50){
        header.style.boxShadow = "0 5px 20px rgba(0,0,0,0.15)";
    }else{
        header.style.boxShadow = "0 2px 10px rgba(0,0,0,0.08)";
    }
});

// Counter Animation
const counters = document.querySelectorAll(".counter");

function runCounter(){
    counters.forEach(counter => {

        const target = +counter.getAttribute("data-target");
        let count = 0;

        const update = () => {
            const increment = target / 100;

            if(count < target){
                count += increment;
                counter.innerText = Math.ceil(count);
                setTimeout(update,20);
            }else{
                counter.innerText = target;
            }
        };

        update();
    });
}

const counterSection = document.querySelector(".stats");

if(counterSection){

    const observer = new IntersectionObserver(entries => {

        if(entries[0].isIntersecting){
            runCounter();
            observer.disconnect();
        }

    });

    observer.observe(counterSection);
}

// Product Filter
const filterButtons = document.querySelectorAll(".filter-btn");
const products = document.querySelectorAll(".product-card");

filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        filterButtons.forEach(btn =>
            btn.classList.remove("active")
        );

        button.classList.add("active");

        const category = button.dataset.filter;

        products.forEach(product => {

            if(
                category === "all" ||
                product.dataset.category === category
            ){
                product.style.display = "block";
            }else{
                product.style.display = "none";
            }

        });

    });

});

// Contact Form
const contactForm = document.getElementById("contactForm");

if(contactForm){

    contactForm.addEventListener("submit", function(e){
        e.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        if(name === ""){
            alert("Please enter your name");
            return;
        }

        if(email === ""){
            alert("Please enter your email");
            return;
        }

        if(message === ""){
            alert("Please enter your message");
            return;
        }

        alert(`Thank you ${name}! Your message has been submitted successfully.`);

        contactForm.reset();
    });

}



// Reveal Animation
const revealElements = document.querySelectorAll(
  ".service-card, .product-card, .gallery__item, .review-card, .why__card, .about-card"
);

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add("active");
    }
  });
}, {
  threshold: 0.15
});

revealElements.forEach(el => {
  el.classList.add("reveal");
  observer.observe(el);
});

console.log("Healthcare Medicals Website Loaded Successfully");
setInterval(()=>{
  document.getElementById("liveTime").innerHTML =
  new Date().toLocaleString();
},1000);
const searchProduct = document.getElementById('searchProduct');

searchProduct.addEventListener('keyup', () => {
    const value = searchProduct.value.toLowerCase();

    document.querySelectorAll('.product-card').forEach(card => {
        const title = card.querySelector('h4').textContent.toLowerCase();

        if(title.includes(value)){
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
});

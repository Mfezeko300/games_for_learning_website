/*function myFunction(){ 
 var num1= document.getElementById('name').value; 
 var num2=  document.getElementById('age').value; 
 var num3= document.getElementById('location').value; 
 var sum = num1 + num2 + num3; 
 var myParagraph= document.getElementById('result'); 
 var sum= parseInt(num1) + parseInt(num2) + parseInt(num3); 
myParagraph.innerHTML = "The sum is " + sum; 
}*/ 

 
function sendMessage(){
    var name= document.getElementById('name').value;
    var email= document.getElementById('email').value;
    var message= document.getElementById('message').value;
var yr= parseInt(id.substr(0,1));
var mon=parseInt(id.substr(2,4));
var day=parseInt(id.substr(4,6));
var gender=parseInt(id.substr(6,10));
var cit=parseInt(id.chartAt(10));
var val= parseInt(id.chartAt(12));


    if(id.length != 13){

    alert("Invaild ID no!");            
}else if(yr > 23 || mon > 12 || day > 31 || gender > 9999 || cit > 1){
}
}

// Get all sections and nav links
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

// Function to highlight active link
window.addEventListener("scroll", () => {
    let current = "";

    // Check which section is in the viewport
    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 50) {
            current = section.getAttribute("id"); 
        }
    });

    // Remove active class from all nav links and add to current
    navLinks.forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("href").includes(current)) {
            link.classList.add("active");
        }
    });
});


// JavaScript to move the carousel
let currentIndex = 0;

function moveCarousel(direction) {
    const testimonials = document.querySelectorAll(".testimonial-card");
    currentIndex = (currentIndex + direction + testimonials.length) % testimonials.length;
    testimonials.forEach((testimonial, index) => {
        testimonial.style.display = index === currentIndex ? "block" : "none";
    });
}

// Initialize carousel display
document.addEventListener("DOMContentLoaded", () => {
    moveCarousel(0); // Show the first testimonial
});

// Get all question buttons
const faqQuestions = document.querySelectorAll(".faq-question");

faqQuestions.forEach(question => {
    question.addEventListener("click", () => {
        const answer = question.nextElementSibling;
        
        // Toggle the display of the answer
        answer.style.display = answer.style.display === "block" ? "none" : "block";

        // Change button color or style if needed
        question.classList.toggle("active");
    });
});

function filterProducts() {
    // Get filter values
    const search = document.getElementById('search').value.toLowerCase();
    const category = document.getElementById('category').value;
    const grade = document.getElementById('grade').value;
    
    // Get all products
    const products = document.querySelectorAll('.product');
    
    products.forEach(product => {
        // Get product details
        const productName = product.querySelector('h3').textContent.toLowerCase();
        const productCategory = product.getAttribute('data-category');
        const productGrade = product.getAttribute('data-grade');
        
        // Check if product matches the filters
        const matchesSearch = productName.includes(search);
        const matchesCategory = category === "" || productCategory === category;
        const matchesGrade = grade === "" || productGrade === grade;
        
        // Show or hide product based on filters
        if (matchesSearch && matchesCategory && matchesGrade) {
            product.style.display = "block";
        } else {
            product.style.display = "none";
        }
    });
}

// Open modal function
function openModal(modalId) {
    document.getElementById(modalId).style.display = "block";
}

// Close modal function
function closeModal(modalId) {
    document.getElementById(modalId).style.display = "none";
}

// Close the modal when clicking outside the content
window.onclick = function(event) {
    const modals = document.getElementsByClassName('modal');
    for (let modal of modals) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    }
}
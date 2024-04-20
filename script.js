let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}






let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header navbar a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header navbar a[href*='+ id + ']').classList.add('active');
            });

        };
    });
    /*=== sticky navbar ====*/

    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');


};

var typed = new Typed(".multiple-text",{
    strings:["Web Designer","Frontend Developer","Freelancer","Blogger"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

ScrollReveal({ 
    //reset: true,
    distance: '80px',
    duration: 2000,
    delay:200
});

ScrollReveal().reveal('.home-content, .heading',{ origin: 'top'});
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form',{ origin: 'bottom'});
ScrollReveal().reveal('.home-content h1, .about-img',{ origin: 'left'});
ScrollReveal().reveal('.home-content p, .about-content',{ origin: 'right'});


/*document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault();
    var data = new FormData(event.target);
    fetch("https://formspree.io/f/mjvnpenq", {
        method:'POST',
        body:data,
    }).then(response => {
        if (response.ok) {
            alert('success');
        } else {
            alert('Error');
        }
    });
    document.getElementById('contact-form').reset();
});*/

const form = document.querySelector("form");
const fullname = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const subject = document.getElementById("subject");
const msg = document.getElementById("msg");

function sendEmail() {


    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "champneevarp@gmail.com",
        Password : "5F591BFA2C35800F47B8ED3F94466A92E474",
        To : 'champneevarp@gmail.com',
        From : "champneevarp@gmail.com",
        Subject : "This is the subject",
        Body : "And this is the body"
    }).then(
      message => {
        if(message == "OK"){
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Your message has been sent",
                showConfirmButton: false,
                timer: 1500
              });
        }
      }
    );
}

form.addEventListener("submit", (e)=> {
    e.preventDefault();

    sendEmail();
    document.getElementById('contact-form').reset();
})
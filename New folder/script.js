// toggle Bar
let menuIcon = document.querySelector('#menu_icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}


let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

// scroll
window.onscroll = () => {
    for(let i = 0; i < sections.length; i++) {
        let sec = sections[i];
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            // active navbar
            for(let j = 0; j < navLinks.length; j++) {
                let links = navLinks[j];
                links.classList.remove('active');
                menuIcon.classList.remove('bx-x');
                navbar.classList.remove('active');
                if (links.getAttribute('href') === '#' + id) {
                    links.classList.add('active');
                }
            }
        }
    }

    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);
}

// sending email

function sendEmail(){
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "pydnitish@gmail.com",
        Password : "C2BD04478DF654A23CE48674C3338BADD1AA",
        To : 'pydnitish@gmail.com',
        From : document.getElementById("email").value,
        Subject : document.getElementById("emailsubject").value,
        Body : "Name: " + document.getElementById("name").value
            + "<br> Email: " + document.getElementById("email").value
            + "<br> Mobile No: " + document.getElementById("phone").value
            + "<br> Message: " + document.getElementById("message").value
    }).then(
      message => alert("Message Sent Successfully. Thank you!!")
    );
}

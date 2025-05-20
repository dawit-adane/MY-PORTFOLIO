let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

let navLinks = document.querySelectorAll('header nav a');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-menu'); 
    menuIcon.classList.toggle('bx-x');    
    navbar.classList.toggle('active');
};

window.onscroll = () => {
    let selections = document.querySelectorAll('section');
    let top = window.scrollY;

    selections.forEach(sec => {
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        }
    });
};
let canvas = document.getElementById('myCanvas');
let ctx = canvas.getContext('2d');
let img = new Image();
img.src = 'sura.jpg'; 
img.onload = () => {
    // Save the current context
    ctx.save();
    
    // Flip the canvas vertically
    ctx.scale(1, -1);
    ctx.drawImage(img, 0, -canvas.height, canvas.width, canvas.height);
    
    // Restore the context to its original state
    ctx.restore();
};


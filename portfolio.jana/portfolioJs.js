
// for Testimonials auto slide

let currentIndex = 1;
const totalRadios = 3;

function changeSlide() {
    document.getElementById(`radio${currentIndex}`).checked = true;
    currentIndex = currentIndex % totalRadios + 1; // Loop back after the last slide
}

setInterval(changeSlide, 10000); // Change slide every 5 seconds

// for Mail Sending

function sendEmail(event) {
    event.preventDefault();
    emailjs.init("wCrXCJeIskihrePQo");

    if (!window.emailjs) {
        console.error("EmailJS library not loaded.");
        return;
    }

    let name = document.querySelector('[name="name"]').value.trim();
    let email = document.querySelector('[name="email"]').value.trim();
    let message = document.querySelector('[name="message"]').value.trim();
    let btn = document.querySelector('.contactus-submit-btn');

    if (!name || !email || !message) {
        alert("All fields are required and cannot be empty spaces.");
        return;
    }

    var formData = { name, email, message };

    emailjs.send('service_oa470sw', 'template_qb9lhud', formData)
        .then(response => {
            console.log('SUCCESS!', response.status, response.text);
            alert("Email sent successfully!");
            btn.style.backgroundColor = 'green';
            setTimeout(() => { btn.style.backgroundColor = ''; }, 3000);
        })
        .catch(error => {
            btn.style.backgroundColor = 'red';
            setTimeout(() => { btn.style.backgroundColor = ''; }, 3000);
            console.log('FAILED...', error);
            alert("Failed to send email.");
        });
}

// for Smooth Scrolling

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const targetId = this.getAttribute("href");
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            const offset = 80;
            const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - offset;

            window.scrollTo({
                top: targetPosition,
                behavior: "smooth"
            });
        }
    });
});
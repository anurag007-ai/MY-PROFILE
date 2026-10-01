// ===================================
// SMOOTH SCROLL - CONTACT
// ===================================

function scrollToContact() {

    const contact = document.getElementById("contact");

    if (contact) {

        contact.scrollIntoView({
            behavior: "smooth"
        });

    }

}



// ===================================
// SMOOTH SCROLL - PROJECTS
// ===================================

function scrollToProjects() {

    const projects = document.getElementById("projects");

    if (projects) {

        projects.scrollIntoView({
            behavior: "smooth"
        });

    }

}



// ===================================
// DARK MODE
// ===================================

const themeToggle =
    document.getElementById("theme-toggle");


if (themeToggle) {

    themeToggle.addEventListener(
        "click",
        function () {

            document.body.classList.toggle(
                "dark-mode"
            );


            if (
                document.body.classList.contains(
                    "dark-mode"
                )
            ) {

                themeToggle.textContent = "☀️";

            } else {

                themeToggle.textContent = "🌙";

            }

        }
    );

}



// ===================================
// MOBILE MENU
// ===================================

const menuToggle =
    document.getElementById("menu-toggle");

const navLinks =
    document.querySelector(".nav-links");


if (menuToggle && navLinks) {

    menuToggle.addEventListener(
        "click",
        function () {

            navLinks.classList.toggle(
                "active"
            );

        }
    );


    // Mobile menu link click ke baad close

    const links =
        navLinks.querySelectorAll("a");


    links.forEach(function (link) {

        link.addEventListener(
            "click",
            function () {

                navLinks.classList.remove(
                    "active"
                );

            }
        );

    });

}



// ===================================
// TYPING EFFECT
// ===================================

const typingText =
    document.getElementById("typing-text");


const words = [

    "Web Developer",

    "Frontend Developer",

    "JavaScript Developer"

];


let wordIndex = 0;

let charIndex = 0;

let deleting = false;



function typeEffect() {

    if (!typingText) {

        return;

    }


    const currentWord =
        words[wordIndex];


    if (deleting) {

        typingText.textContent =
            currentWord.substring(
                0,
                charIndex - 1
            );

        charIndex--;

    } else {

        typingText.textContent =
            currentWord.substring(
                0,
                charIndex + 1
            );

        charIndex++;

    }


    let speed =
        deleting ? 70 : 120;


    if (
        !deleting &&
        charIndex === currentWord.length
    ) {

        speed = 1500;

        deleting = true;

    }


    else if (
        deleting &&
        charIndex === 0
    ) {

        deleting = false;

        wordIndex++;


        if (
            wordIndex === words.length
        ) {

            wordIndex = 0;

        }


        speed = 500;

    }


    setTimeout(
        typeEffect,
        speed
    );

}


typeEffect();



// ===================================
// CONTACT FORM
// PHP + MYSQL BACKEND
// ===================================

const contactForm =
    document.getElementById(
        "contact-form"
    );


if (contactForm) {

    contactForm.addEventListener(
        "submit",
        async function (event) {

            // Page reload ko rokna
            event.preventDefault();



            // ===================================
            // GET FORM VALUES
            // ===================================

            const name =
                document.getElementById(
                    "name"
                ).value.trim();


            const email =
                document.getElementById(
                    "email"
                ).value.trim();


            const message =
                document.getElementById(
                    "message"
                ).value.trim();



            // ===================================
            // CHECK EMPTY FIELDS
            // ===================================

            if (
                !name ||
                !email ||
                !message
            ) {

                alert(
                    "Please fill all fields."
                );

                return;

            }



            // ===================================
            // EMAIL VALIDATION
            // ===================================

            const emailPattern =
                /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


            if (
                !emailPattern.test(email)
            ) {

                alert(
                    "Please enter a valid email address."
                );

                return;

            }



            // ===================================
            // CREATE FORM DATA
            // ===================================

            const formData =
                new FormData();


            formData.append(
                "name",
                name
            );


            formData.append(
                "email",
                email
            );


            formData.append(
                "message",
                message
            );



            // ===================================
            // SEND DATA TO PHP
            // ===================================

            try {

                const response =
                    await fetch(
                        "https://anuragmaurya.infinityfreeapp.com/backend/contact.php",
                        {
                            method: "POST",
                            body: formData
                        }
                    );



                // ===================================
                // CHECK RESPONSE
                // ===================================

                if (!response.ok) {

                    throw new Error(
                        "Server error: " +
                        response.status
                    );

                }



                const result =
                    await response.json();



                // ===================================
                // SUCCESS
                // ===================================

                if (result.success) {

                    alert(
                        "Message sent successfully! ✅"
                    );


                    contactForm.reset();

                }



                // ===================================
                // PHP ERROR
                // ===================================

                else {

                    alert(
                        result.message ||
                        "Message could not be sent."
                    );

                }

            }



            // ===================================
            // CONNECTION ERROR
            // ===================================

            catch (error) {

                console.error(
                    "Contact Form Error:",
                    error
                );


                alert(
                    "Server error. Please try again later."
                );

            }

        }
    );

}



// ===================================
// END OF SCRIPT
// ===================================
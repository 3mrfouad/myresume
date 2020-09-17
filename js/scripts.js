/*
----------------------------
Front-End Project DOCSTRING
----------------------------
Title: Front-End Project
Purpose:Resume with Validating Contact Form
Author: Amr Fouad
Date of last edit: september 08, 2020 8:59 am
*/

/*
*==================================================
            GLOBAL VARIABLES DEFINITION
*==================================================
*/
/* DOM ELEMENTS DEFINITION */
const getInTouchForm = document.getElementById("contact-form");
const name = document.getElementById("name");
const emailID = document.getElementById("emailid");
const subject = document.getElementById("subject");
const message = document.getElementById("message");
const nameErrorMsg = document.getElementById("nameerror");
const emailErrorMsg = document.getElementById("emailerror");
const subjectErrorMsg = document.getElementById("subjecterror");
const messageErrorMsg = document.getElementById("messageerror");
const swearWordErrorMsg = document.getElementById("swearworderror");
const emailFormatErrorMsg = document.getElementById("emailformaterror");

/*
*==================================================
            ON LOAD INITIALIZATION LOGIC
*==================================================
*/
document.body.onload = InitializePage();

/*
*==================================================
                CARDS ACCORDION LOGIC
*==================================================
*/
/* EVENT LISTENER */
document.querySelectorAll(".accordion-btn").forEach((button) => {
  button.addEventListener("click", () => {
    button.classList.toggle("accordion-btn-active");
  });
});

/*
*==================================================
            MAILTO VIA CONTACT FORM LOGIC
*==================================================
*/
/* EVENT LISTENER */
getInTouchForm.addEventListener("submit", (event) => {
  event.preventDefault();
  if (GetInTouchFormValidation()) {
    const emailMessageMod = encodeURIComponent(
      `From: ${name.value}` +
        "\13" +
        `Email: ${emailID.value}` +
        "\13\13Message:\13" +
        `${message.value}`
    );
    const myEmail = "info@noemail.com";
    window.location.href = `mailto:${myEmail}?subject=${subject.value}&body=${emailMessageMod}`;
  }
});

/*
*==================================================
            ON LOAD INITIALIZATION FUNCTION
*==================================================
*/
/*NO INPUTS, THE FUNCTION RESTS THE PAGE SPECIALLY THE FORM SECTION WHEN FIRST OPEN OR REFRESHED */
function InitializePage() {
  name.value = "";
  emailID.value = "";
  subject.value = "";
  message.value = "";
}

/*
*==================================================
            FORM VALIDATION FUNCTION
*==================================================
*/
/**
 *
 * VALIDATION FORM TO STOP THE FORM GETTING SUBMITTED WITH EMPTY FIELDS
 * OR WRONG EMAIL FORMAT OR WITH SWEAR WORDS
 * IF ALL VALIDATIONS ARE PASS, THEN THE FORM WILL OPEN THE EMAIL CLIENT
 * THE METHOD IS SERIES OF IF DECISION STATEMENTS, AND AND ERROR COUNTER IS
 * USED TO INDICATE IF ANY VALIDATION ERROR SPOTTED.
 *
 * */

function GetInTouchFormValidation() {
  const swearWords = ["feldercarb", "frack", "skinjob", "vulgacarb"];
  let errorsCntr = 0;
  let swearingCntr = 0;
  /* EMPTY FORM FIELDS VALIDATION */
  if (name.value == "") {
    nameErrorMsg.style.display = "block";
    name.classList.add("empty-field-error");
    errorsCntr++;
  } else {
    nameErrorMsg.style.display = "none";
    name.classList.remove("empty-field-error");
  }
  if (emailID.value == "") {
    emailErrorMsg.style.display = "block";
    emailID.classList.add("empty-field-error");
    errorsCntr++;
  } else {
    emailErrorMsg.style.display = "none";
    emailID.classList.remove("empty-field-error");
  }
  if (subject.value == "") {
    subjectErrorMsg.style.display = "block";
    subject.classList.add("empty-field-error");
    errorsCntr++;
  } else {
    subjectErrorMsg.style.display = "none";
    subject.classList.remove("empty-field-error");
  }
  if (message.value == "") {
    messageErrorMsg.style.display = "block";
    message.classList.add("empty-field-error");

    errorsCntr++;
  } else {
    messageErrorMsg.style.display = "none";
    message.classList.remove("empty-field-error");
  }
  /* TEXT CONTAINS SWEARWORDS VALIDATION */
  for (word of swearWords) {
    if (
      message.value.includes(word) ||
      name.value.includes(word) ||
      emailID.value.includes(word) ||
      subject.value.includes(word)
    ) {
      swearingCntr++;
    }
  }
  if (swearingCntr != 0) {
    swearWordErrorMsg.style.display = "block";
    alert(
      "This is a professional website, and use of inappropriate words won't be tolerated.",
      "Warning"
    );
    errorsCntr++;
  } else {
    swearWordErrorMsg.style.display = "none";
  }
  /* EMAIL ID FORMAT VALIDATION */
  if (!ValidateEmail()) {
    emailFormatErrorMsg.style.display = "block";
    emailID.classList.add("empty-field-error");
    errorsCntr++;
  } else {
    emailFormatErrorMsg.style.display = "none";
    emailID.classList.remove("empty-field-error");
  }
  return Boolean(errorsCntr == 0);
}

/*
*==================================================
          EMAIL FORMAT VALIDATION FUNCTION
*==================================================
*/

/**
 *
 * THIS FUNCTION IS USING REGULAR EXPRESSIONS TO CHECK EMAIL FORMAT PER EXPLANATION BELOW IN THE CITATION SECTION.
 *
 */

function ValidateEmail() {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailID.value)) {
    return true;
  }
  return false;
}

/**
 * Citation: Borrowed code to validate the email ID format.
 * Source: https://www.w3resource.com/javascript/form/email-validation.php
 * Reason: I didn't know a straight forward method and while researching found this simple solution.
 * How it works? It compares the two email id parts around the @ symbol.
 * the id part may be up to 64 characters long and domain name may be up to 253 characters.
 *
 * The function checks the id part if contains the following ASCII characters:
 * Uppercase (A-Z) and lowercase (a-z) English letters.
 * Digits (0-9).
 * Characters ! # $ % & ' * + - / = ? ^ _ ` { | } ~
 * Character . ( period, dot or full-stop) provided that it is not the first or last character and it will not come one after the other.
 *
 * The domain name [for example com, org, net, in, us, info] part contains letters, digits, hyphens, and dots.
 *
 * More details: I tried to understand more about regular expressions but apparently it is a mini programming
 * language by itself, I have skimmed through O'REILLY book called "Introducing Regular Expressions" and I got the
 * primary idea, I guess I will need more time if mastering regular expressions so I can write codes on my own.
 *
 * Alternative solution: I could have written alternative code to validate the email ID using regular JavaScript
 * loops and decision syntax but it would have been much longer of a code.
 */

/*
*==================================================
            POP UP NAV MENU LOGIC
*==================================================
*/
/**
 * Citation: Got inspired by W3Schools menu tutorials. I didn't copy specific code as is, however I got inspired by the logic of different
 * options, the main one that was my starting point is below:
 * Source: https://www.w3schools.com/howto/howto_css_dropdown.asp
 * Reason: Being new to HTML/CSS/JS looking for tutorials and ideas online is normal practice.
 * How it works? the logic is straight forward, toggling the display on a button using CSS button attributes when idle and when user hover
 * by the mouse.
 */

/*
*==================================================
           TESTIMONIALS SLIDE SHOW LOGIC
*==================================================
*/
/**
 * Citation: Got inspired by W3Schools slideshow  tutorials. I did copy part of the code as is,however I modified it to suit my application.
 * Source: https://www.w3schools.com/howto/howto_js_slideshow.asp
 * Reason: Being new to HTML/CSS/JS looking for tutorials and ideas online is normal practice.
 * How it works? the logic is straight forward, toggling the display and/or height when the nex/prev buttons are clicked (also the bottom circles)
 * the toggling is done using JS, while the fade effect was done by CSS frame and opacity attributes.
 */

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}
// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

/**
 *
 * THIS FUNCTION LOOPS OVER THE SLIDES IN THE SLIDES CONTAINER, IT IS BEING CALLED WHEN THE FORWARD OR BACKWARD ARROWS
 * ARE CLICKED OR WHEN ONE OF THE BOTTOM CIRCLES IS CLICKED.
 * IT INCREMENT OR DECREMENT THE SLIDE DEPENDING ON THE CALLING DOT ID.
 *
 *
 */

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display =
    "flex"; /* changed from block to flex to test actual text not img */
  dots[slideIndex - 1].className += " active";
}
document.getElementById("prev").addEventListener("click", () => {
  plusSlides(-1);
});
document.getElementById("next").addEventListener("click", () => {
  plusSlides(1);
});
document.getElementById("dot-1").addEventListener("click", () => {
  currentSlide(1);
});
document.getElementById("dot-2").addEventListener("click", () => {
  currentSlide(2);
});
document.getElementById("dot-3").addEventListener("click", () => {
  currentSlide(3);
});
document.getElementById("dot-4").addEventListener("click", () => {
  currentSlide(4);
});
document.getElementById("dot-5").addEventListener("click", () => {
  currentSlide(5);
});
document.getElementById("dot-6").addEventListener("click", () => {
  currentSlide(6);
});

/*
*==================================================
            EMPLOYMENT SLIDE SHOW LOGIC
*==================================================
*/
let slideIndexEmp = 1;
showSlidesEmp(slideIndexEmp);
// Next/previous controls
function plusSlidesEmp(n) {
  showSlidesEmp((slideIndexEmp += n));
}
// Thumbnail image controls
function currentSlideEmp(n) {
  showSlidesEmp((slideIndexEmp = n));
}

/**
 *
 * THIS FUNCTION LOOPS OVER THE SLIDES IN THE SLIDES CONTAINER, IT IS BEING CALLED WHEN THE FORWARD OR BACKWARD ARROWS
 * ARE CLICKED OR WHEN ONE OF THE BOTTOM CIRCLES IS CLICKED.
 * IT INCREMENT OR DECREMENT THE SLIDE DEPENDING ON THE CALLING DOT ID.
 *
 *
 */

function showSlidesEmp(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides-emp");
  let dots = document.getElementsByClassName("dot-emp");
  if (n > slides.length) {
    slideIndexEmp = 1;
  }
  if (n < 1) {
    slideIndexEmp = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndexEmp - 1].style.display =
    "flex"; /* changed from block to flex to test actual text not img */
  dots[slideIndexEmp - 1].className += " active";
}

document.getElementById("prev-emp").addEventListener("click", () => {
  plusSlidesEmp(-1);
});
document.getElementById("next-emp").addEventListener("click", () => {
  plusSlidesEmp(1);
});

document.getElementById("dot-emp-1").addEventListener("click", () => {
  currentSlideEmp(1);
});
document.getElementById("dot-emp-2").addEventListener("click", () => {
  currentSlideEmp(2);
});
document.getElementById("dot-emp-3").addEventListener("click", () => {
  currentSlideEmp(3);
});
document.getElementById("dot-emp-4").addEventListener("click", () => {
  currentSlideEmp(4);
});
document.getElementById("dot-emp-5").addEventListener("click", () => {
  currentSlideEmp(5);
});
document.getElementById("dot-emp-6").addEventListener("click", () => {
  currentSlideEmp(6);
});
document.getElementById("dot-emp-7").addEventListener("click", () => {
  currentSlideEmp(7);
});
document.getElementById("dot-emp-8").addEventListener("click", () => {
  currentSlideEmp(8);
});

/*
*==================================================
            PORTFOLIO SLIDE SHOW LOGIC
*==================================================
*/
let slideIndexPortfolio = 1;
showSlidesPortfolio(slideIndexPortfolio);
// Next/previous controls
function plusSlidesPortfolio(n) {
  showSlidesPortfolio((slideIndexPortfolio += n));
}
// Thumbnail image controls
function currentSlidePortfolio(n) {
  showSlidesPortfolio((slideIndexPortfolio = n));
}

/**
 *
 * THIS FUNCTION LOOPS OVER THE SLIDES IN THE SLIDES CONTAINER, IT IS BEING CALLED WHEN THE FORWARD OR BACKWARD ARROWS
 * ARE CLICKED OR WHEN ONE OF THE BOTTOM CIRCLES IS CLICKED.
 * IT INCREMENT OR DECREMENT THE SLIDE DEPENDING ON THE CALLING DOT ID.
 *
 *
 */

function showSlidesPortfolio(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides-portfolio");
  let dots = document.getElementsByClassName("dot-portfolio");
  if (n > slides.length) {
    slideIndexPortfolio = 1;
  }
  if (n < 1) {
    slideIndexPortfolio = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndexPortfolio - 1].style.display =
    "flex"; /* changed from block to flex to test actual text not img */
  dots[slideIndexPortfolio - 1].className += " active";
}

document.getElementById("prev-portfolio").addEventListener("click", () => {
  plusSlidesPortfolio(-1);
});
document.getElementById("next-portfolio").addEventListener("click", () => {
  plusSlidesPortfolio(1);
});

document.getElementById("dot-portfolio-1").addEventListener("click", () => {
  currentSlidePortfolio(1);
});
document.getElementById("dot-portfolio-2").addEventListener("click", () => {
  currentSlidePortfolio(2);
});
document.getElementById("dot-portfolio-3").addEventListener("click", () => {
  currentSlidePortfolio(3);
});
document.getElementById("dot-portfolio-4").addEventListener("click", () => {
  currentSlidePortfolio(4);
});
document.getElementById("dot-portfolio-5").addEventListener("click", () => {
  currentSlidePortfolio(5);
});
document.getElementById("dot-portfolio-6").addEventListener("click", () => {
  currentSlidePortfolio(6);
});

/*
*==================================================
        DIRECT EMAIL (CLICK ON EMAIL ID)
*==================================================
*/

/**
 *
 * EVENT LISTENER INCASE THE USER CLICKED THE EMAIL IN THE CONTACT INFO SECTION, IN SUCH CASE THE EMAIL CLIENT WOULD
 * OPEN WITH MY EMAIL ID IN THE "TO" SECTION
 *  *
 */
document.getElementById("direct-email").addEventListener("click", () => {
  window.location.href = `mailto:info@noemail.com?`;
});

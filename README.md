#Aug 28, 2020 Milestone 1: Front-End Project (Resume with Validating Contact Form)
==============================================================================================

Title: Front-End Project
Purpose:Resume with Validating Contact Form
Author: Amr Fouad
Date of last edit: september 08, 2020 8:59 am

==============================================================================================

Assignment: https://docs.google.com/document/d/1rTWkjAguu10WuYsdmlIpvv5Ukd0pZWbzlbpNctVKN4M/edit?usp=sharing

Trello board: https://trello.com/b/AFdr0k2a

GitHub Repo: https://github.com/TECHCareers-by-Manpower/milestone-1-front-end-resume-w-contact-form-3mrfouad.git

#Resources: The following we blinks has been used as research resources during the project execution. If any code snippet is used, a citation would be added to the corresponding code.

https://www.w3schools.com/css/css3_transitions.asp
http://w3schools-fa.ir/howto/howto_css_skill_bar.html
https://www.w3schools.com/howto/howto_js_slideshow.asp
https://www.w3schools.com/cssref/css3_pr_text-shadow.asp
https://www.w3schools.com/howto/howto_css_dropdown.asp
https://stackoverflow.com/questions/24739126/scroll-to-a-specific-element-using-html
https://www.w3schools.com/tags/att_a_download.asp
https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Adding_vector_graphics_to_the_Web
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions


==============================================================================================

Citation:

(1) File Name: main.css

Citation: Code Borrowed and sing @ Import in "main.css" to include "normalize.css" that resets the browser defaults. 

Purpose: Include "initialize.css" rests the browsers' defaults and give better handle on the CSS styling and layout.
Source:
https://www.w3schools.com/cssref/pr_import_rule.asp (guide on using @import)
https://necolas.github.io/normalize.css/ (link to download normalize.css)

==============================================================================================

(2) File Name: main.css

 Citation: Css code that must be in the project folders per FontAwesome documentation.
 
 Source: https://fontawesome.com
 
 Reason: Import FontAwesome icons into the project to fulfill the requirements/challenges.
  
==============================================================================================

(3) File Name: scripts.js

3.1- 
 Citation: Borrowed code to validate the email ID format.
 
 Source: https://www.w3resource.com/javascript/form/email-validation.php
 
 Reason: I didn't know a straight forward method and while researching found this simple solution.
 How it works? It compares the two email id parts around the @ symbol.
 the id part may be up to 64 characters long and domain name may be up to 253 characters.
 
 The function checks the id part if contains the following ASCII characters:
 Uppercase (A-Z) and lowercase (a-z) English letters.
 Digits (0-9).
 Characters ! # $ % & ' * + - / = ? ^ _ ` { | } ~
 Character . ( period, dot or full-stop) provided that it is not the first or last character and it will not come one after the other.
 
 The domain name [for example com, org, net, in, us, info] part contains letters, digits, hyphens, and dots.
 
 More details: I tried to understand more about regular expressions but apparently it is a mini programming
 language by itself, I have skimmed through O'REILLY book called "Introducing Regular Expressions" and I got the
 primary idea, I guess I will need more time if mastering regular expressions so I can write codes on my own.
 
 Alternative solution: I could have written alternative code to validate the email ID using regular JavaScript
 loops and decision syntax but it would have been much longer of a code.
             ==============================================================================================

3.2-
Citation: Got inspired by W3Schools menu tutorials. I didn't copy specific code as is, however I got inspired by the logic of different
options, the main one that was my starting point is below:

Source: https://www.w3schools.com/howto/howto_css_dropdown.asp

Reason: Being new to HTML/CSS/JS looking for tutorials and ideas online is normal practice.

How it works? the logic is straight forward, toggling the display on a button using CSS button attributes when idle and when user hover.
by the mouse
             ==============================================================================================

3.3-
 Citation: Got inspired by W3Schools slideshow  tutorials. I did copy part of the code as is, however I modified it to suit my application.
 
 Source: https://www.w3schools.com/howto/howto_js_slideshow.asp
 
 Reason: Being new to HTML/CSS/JS looking for tutorials and ideas online is normal practice.
 
 How it works? the logic is straight forward, toggling the display and/or height when the nex/prev buttons are clicked (also the bottom circles) the toggling is done using JS, while the fade effect was done by CSS frame and opacity attributes. 

==============================================================================================

Images and Icons Credit has been added to the footer as per the license and attributes documentation from the corresponding websites

Icons Credit goes to: https://www.flaticon.com/authors/freepik and https://icons8.com

Images Credit goes to: 
    - SVG map is designed by pikisuperstar / Freepik at http://www.freepik.com
    - Back ground images by www.rawpixel.com

==============================================================================================

*! orm labels, NOTE THAT SCREEN READER TEXT CLASS WAS USED TO HIDE THE FORM LABELS

==============================================================================================

*! Note: I have used position with three elements in the entire project:

1 - For navigation, that was allowed by the Rubric anyway. The NAV menu style is pop up style fixed at the right bottom corner of the page.
2 - For the form errors arrows to visual aid the error message and add clarity to where is the error exactly within the form with short description... Please note, for that one, I spoke to Warren and he approved it.
3 - Finally, for the hello floating photo and that was the most logical way not to complicate the page layout.